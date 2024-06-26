// import apiReq from '/modules/utility/api/apiReq';
// import { defaultStyle } from '/modules/ecommerce/product/defaults';
// import { v4 as uuidv4 } from 'uuid';
import { pageDefaults } from '/app.config';
import { getServerSidePropsDefault } from '/modules/utility.js';
import { getServerSidePropsFunc } from '/appServer/serverProps';
import React from 'react';
import apiReq from '/modules/utility/api/apiReq'; // Import API for making DB Requests
import { defaultStyle } from '/modules/ecommerce/product/defaults';
import { v4 as uuidv4 } from 'uuid';

const Module = (props) => {
  const [imgCache, setImgCache] = React.useState(new FormData());
  const [surveyState, setSurveyState] = React.useState({
    answers: {},
    currentStage: null,
    pipelineDbItem: {},
    pipelineObject: {},
    imgFor: [],
  });
  const [ran, setRan] = React.useState(false);
  const [componentDidMount, setComponentDidMount] = React.useState(false);

  React.useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(true);
      setSurveyStateDefault();
    }
  }, [componentDidMount]);

  React.useEffect(() => {
    if (surveyState?.pipelineDbItem?.detailmeta) {
      setLineup();
    }
  }, [surveyState?.pipelineDbItem?.detailmeta]);

  const setSurveyStateDefault = () => {
    const temp = surveyState;
    temp.pipelineDbItem = {
      id: uuidv4(),
      shop: props?.shop?.id ?? null,
      name: '',
      detailmeta: {
        productType: 'virtual',
        livestream: true,
        lineup: [],
        ticket: true,
      },
      styles: [defaultStyle()],
      shipping: [],
      published: false,
      images: [],
      protype: {
        type: 'virtual',
        subscription: false,
      },
      infinite: false,
      meta: {},
      files: {},
      new: true,
    };
    setSurveyState(temp);
  };

  // Ensure that you fill all fields 'name', 'description', 'price', 'quantity' on pipelineObject

  // To handle images you must use a file input and update image for values such that a modif flag is associated with a specific img file name
  const allowedTypes = ['image/jpeg', 'image/png'];

  const handleNewFile = React.useCallback((e) => {
    const useForm = imgCache;
    const useImgName = uuidv4();
    //console.log('eee', e?.target?.files);
    useForm.append(
      'image',
      Array.from(e?.target?.files)
        .filter((m) => allowedTypes.indexOf(m.type) > -1)
        .map((m) => {
          var blob = m.slice(0, m.size, m.type);
          const ext =
            allowedTypes[allowedTypes.indexOf(m.type)].match(
              /\/([a-zA-Z0-9].*)/
            )[1];
          return new File([blob], `${useImgName}.${ext}`, { type: m.type });
        })[0]
    );
    const temp = surveyState;
    const modif = 'featureImg'; // Valid in 'featureImg', 'leadImg'
    const useTempImgFor = temp.imgFor;
    useTempImgFor.push({ name: useImgName, modif: modif });
    temp.imgFor = useTempImgFor;
    setSurveyState(temp);
    setImgCache(useForm);
  });

  // Add users to lineup with definition
  const setLineup = () => {
    const temp = { ...surveyState };

    // Update the lineup property in the copy
    temp.pipelineDbItem.detailmeta.lineup = [
      {
        description: 'Artist Description',
        id: uuidv4(),
        image: '',
        time: 'HH:MM', // 24H,
        title: 'Artist Name',
      },
    ];
    setSurveyState(temp);
  };

  const publishProduct = async () => {
    //console.log('Run', surveyState);
    const res = await apiReq('/product/createProduct', {
      apiUrl: props?.apiUrl,
      pipelineDbItem: surveyState.pipelineDbItem,
      pipelineObject: surveyState.pipelineObject,
      imgCache: imgCache,
      imgFor: surveyState.imgFor,
      _loggedIn: props?._loggedIn, // Requires Authentication
    });
    //console.log('Published!', res);
  };

  const run = () => {
    if (!ran && props?._loggedIn) {
      setRan(true);
      publishProduct();
    }
  };

  return (
    <div>
      <button onClick={run}>Create Product</button>
      <input type='file' onChange={handleNewFile} />
    </div>
  );
};

const pageName = 'create';

export const getServerSideProps = async (context) => {
  let currentProps = await getServerSidePropsDefault(
    context,
    pageDefaults[pageName]
  );
  return await getServerSidePropsFunc(currentProps, context);
};

export default Module;
