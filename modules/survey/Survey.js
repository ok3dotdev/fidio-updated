var _span, _span2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// Survey.js
import React from 'react';
import styles from './Survey.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
import { sendSurveyEmail } from '../utility/mail';
import { Lineup } from '../ecommerce/product';
import { isObjectEmpty } from '../util';
import { westernMoneyFormat } from '../utility/ecommerce';
import { defaultDefinePriceCurrency } from '../ecommerce/product/defaults';
import { doSetOptionsMetaData } from '../ecommerce/shop/Functions';
import { allowedTypes } from '../ecommerce/product/defaults';
import { v4 as uuidv4 } from 'uuid';
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [initial, setInitial] = React.useState(false);
  const [backList, setBackList] = React.useState([]);
  const [currentStage, setCurrentStage] = React.useState(null);
  const [answers, setAnswers] = React.useState({});
  const [next, setNext] = React.useState(null);
  const [back, setBack] = React.useState(null);
  const [animatingNext, setAnimatingNext] = React.useState(null);
  const [animatingBack, setAnimatingBack] = React.useState(null);
  const [keepCurrent, setKeepCurrent] = React.useState(false);
  const [pipelineObject, setPipelineObject] = React.useState({});
  const [pipelineDbItem, setPipelineDbItem] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [currentLineupEditing, setCurrentLineupEditing] = React.useState(0);
  const [currentDefinePriceCurrency, setCurrentDefinePriceCurrency] = React.useState(defaultDefinePriceCurrency);
  const [imgCache, setImgCache] = React.useState(new FormData());
  const [imgFor, setImgFor] = React.useState([]);
  const [errorLog, setErrorLog] = React.useState({});
  const inputRef = React.useRef();
  const currentError = React.useRef();
  const useData = props.survey;
  const currentStageItem = useData?.stages[currentStage];
  const nextStageItem = useData?.stages[next];
  const backStageItem = useData?.stages[back];
  React.useEffect(() => {
    if (!componentDidMount) {
      if (props?.imgCache) {
        setImgCache(props.imgCache);
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props?.imgCache]);
  const setAnswersProxy = useAnswers => {
    if (props.setSurveyState && props.surveyState) {
      const temp = props.surveyState;
      temp.answers = useAnswers;
      props.setSurveyState(temp);
    }
    setAnswers(useAnswers);
  };
  const setCurrentStageProxy = stage => {
    if (props.setSurveyState && props.surveyState) {
      const temp = props.surveyState;
      temp.currentStage = stage;
      props.setSurveyState(temp);
    }
    setCurrentStage(stage);
    if (useData?.stages && useData.stages[stage] && typeof useData.stages[stage]?.func === 'function') {
      useData.stages[stage].func();
    }
  };
  React.useEffect(() => {
    if (!currentStage && useData?.stages?.index) {
      setCurrentStageProxy('index');
    }
  }, [useData, currentStage]);
  const setPipelineDbItemProxy = item => {
    if (props.setSurveyState && props.surveyState) {
      const temp = props.surveyState;
      temp.pipelineDbItem = item;
      props.setSurveyState(temp);
    }
    setPipelineDbItem(item);
  };
  const setPipelineObjectProxy = item => {
    if (props.setSurveyState && props.surveyState) {
      const temp = props.surveyState;
      temp.pipelineObject = item;
      props.setSurveyState(temp);
    }
    setPipelineObject(item);
  };
  React.useEffect(() => {
    if (useData?.pipelineDbItemDefault && !isObjectEmpty(useData.pipelineDbItemDefault) && isObjectEmpty(pipelineDbItem)) {
      setPipelineDbItemProxy(useData.pipelineDbItemDefault);
    } else if (isObjectEmpty(pipelineDbItem) && props?.surveyState?.pipelineDbItem && !isObjectEmpty(props?.surveyState?.pipelineDbItem)) {
      setPipelineDbItemProxy(props.pipelineDbItem);
    }
  }, [pipelineDbItem, useData?.pipelineDbItemDefault]);
  const handleOptionClickConfirm = React.useCallback(e => {
    const goto = e?.currentTarget?.getAttribute('goto');
    const question = e?.currentTarget?.getAttribute('question');
    const value = inputRef?.current?.value ?? e?.current?.value ?? e?.currentTarget?.value;
    optionClick(goto, question, value);
  });
  const handleOptionClick = React.useCallback(e => {
    const goto = e?.currentTarget?.getAttribute('goto');
    const question = e?.currentTarget?.getAttribute('question');
    const value = e?.currentTarget?.getAttribute('value') ?? e.currentTarget.value;
    optionClick(goto, question, value);
  });
  const doClear = elements => {
    console.log('Do Clear', elements);
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        console.log(elements[i]?.getAttribute('surveyclear'));
        if (elements[i]?.getAttribute('surveyclear')) {
          elements[i].value = '';
          console.log(elements[i]);
          if (elements[i].getAttribute('usedefault')) {
            elements[i].value = elements[i].getAttribute('usedefault');
          }
        }
      }
    }
  };
  const optionClick = (goto, question, value) => {
    console.log(currentStageItem);
    setErrorLog({}); // Reset Error Log every attempt
    if (currentError?.current) {
      currentError.current.innerHTML = '';
      currentError.current.style.opacity = 0;
    }
    if (currentStageItem?.validation && typeof currentStageItem.validation === 'function') {
      const message = currentStageItem.validation(currentStageItem, value);
      console.log(message);
      if (message) {
        const temp = errorLog;
        temp[currentStage] = message;
        setErrorLog(temp);
        if (currentError?.current) {
          currentError.current.innerHTML = message;
          currentError.current.style.opacity = 1;
        }
        return null; // Prevent further inputs bad info
      }
    }
    if (currentStageItem?.pipeline?.length) {
      for (let i = 0; i < currentStageItem.pipeline.length; i++) {
        if (currentStageItem.pipeline[i]?.input && currentStageItem.pipeline[i]?.input?.validation && typeof currentStageItem.pipeline[i].input.validation === 'function') {
          const message2 = currentStageItem.pipeline[i]?.input?.validation(currentStageItem.pipeline[i], pipelineObject[currentStageItem.pipeline[i].input.var]);
          if (message2) {
            console.log(message2);
            const temp = errorLog;
            temp[currentStage] = message2;
            setErrorLog(temp);
            if (currentError?.current) {
              currentError.current.innerHTML = message2;
              currentError.current.style.opacity = 1;
            }
            return null;
          }
        }
      }
    }
    setNext(goto);
    setBack(currentStage);
    setTimeout(() => {
      setAnimatingNext(true);
    }, 100);
    if (inputRef?.current) {
      inputRef.current.value = '';
      inputRef.current.placeholder = '';
      inputRef.current.select();
    }
    setTimeout(() => {
      setKeepCurrent(true);
      if (goto) {
        console.log(question);
        if (question) {
          const temp = answers;
          if (!temp[currentStage]) {
            temp[currentStage] = {};
          }
          temp[currentStage].question = question;
          temp[currentStage].answer = value;
          setAnswersProxy(temp);
        }
        if (useData?.stages[goto]?.input && inputRef?.current) {
          if (Object.prototype.hasOwnProperty.call(useData?.stages[goto].input, 'default')) {
            inputRef.current.value = useData.stages[goto].input.default;
          }
          if (Object.prototype.hasOwnProperty.call(useData?.stages[goto].input, 'placeholder')) {
            inputRef.current.placeholder = useData.stages[goto].input.placeholder;
          }
        }
        setCurrentStageProxy(goto);
        setTimeout(() => {
          doClear(document.getElementsByTagName('textarea'));
          doClear(document.getElementsByTagName('input'));
        }, 100);
      }
      setTimeout(() => {
        setNext(null);
        setAnimatingNext(null);
        setKeepCurrent(false);
      }, 100);
    }, 450);
    updateBack(currentStage, true);
  };
  const updateBack = (item, add) => {
    const temp = backList;
    if (add && item) {
      temp.push(item);
    } else {
      temp.pop();
    }
    setBackList(temp);
  };
  const handleGoBack = React.useCallback(e => {
    if (backList.length > 0) {
      const next = backList[backList.length - 1];
      console.log(next);
      setBack(next);
      setTimeout(() => {
        setAnimatingBack(true);
      }, 100);
      setTimeout(() => {
        setKeepCurrent(true);
        if (next) {
          setCurrentStageProxy(next);
          setTimeout(() => {
            doClear(document.getElementsByTagName('textarea'));
            doClear(document.getElementsByTagName('input'));
          }, 1);
        }
        setTimeout(() => {
          setBack(null);
          setAnimatingBack(null);
          setKeepCurrent(false);
        }, 100);
        if (useData?.stages[next]?.input && inputRef?.current) {
          if (Object.prototype.hasOwnProperty.call(useData?.stages[next].input, 'default')) {
            inputRef.current.value = useData.stages[next].input.default;
          }
          if (Object.prototype.hasOwnProperty.call(useData?.stages[next].input, 'placeholder')) {
            inputRef.current.placeholder = useData.stages[next].input.placeholder;
          }
        }
      }, 450);
      updateBack(null, false);
    }
  });
  React.useEffect(() => {
    if (!initial) {
      if (inputRef?.current && currentStageItem?.input) {
        console.log('Running');
        setInitial(true);
        inputRef.current.value = '';
        inputRef.current.placeholder = '';
        inputRef.current.select();
        if (Object.prototype.hasOwnProperty.call(currentStageItem.input, 'default')) {
          inputRef.current.value = currentStageItem.input.default;
        }
        if (Object.prototype.hasOwnProperty.call(currentStageItem.input, 'placeholder')) {
          inputRef.current.placeholder = currentStageItem.input.placeholder;
        }
      }
    }
  }, [initial, currentStageItem]);
  React.useEffect(() => {
    console.log(currentStageItem, submitted);
    if (currentStageItem?.submit || nextStageItem?.submit) {
      if (!submitted) {
        const f = async ans => {
          if (ans) {
            const res = await sendSurveyEmail(props.apiUrl, props.domainKey, ans, useData.name, props._loggedIn);
            console.log(res);
          }
        };
        f(answers); // Schedule outbound email back to Businesses admin
        setSubmitted(true);
      }
    }
  }, [currentStageItem, submitted]);
  const addToObject = (useVar, value) => {
    const temp = {
      ...pipelineObject
    };
    temp[useVar] = value;
    console.log('Temp', temp);
    const temp2 = answers;
    if (!temp2[currentStage]) {
      temp2[currentStage] = {};
    }
    if (!temp2[currentStage].pipeline) {
      temp2[currentStage].pipeline = {};
    }
    temp2[currentStage].pipeline[useVar] = value;
    setAnswersProxy(temp2);
    setPipelineObjectProxy(temp);
  };
  const handleKeyDown = React.useCallback(e => {
    try {
      if (e) {
        const value = e?.current?.value ?? e?.currentTarget?.value;
        if (e?.currentTarget?.getAttribute('pipeline')) {
          console.log(value, 'Add to Obj');
          addToObject(e?.currentTarget?.getAttribute('var'), value);
        } else if (e.keyCode === 13) {
          e.preventDefault();
          const goto = e?.currentTarget?.getAttribute('goto');
          const question = e?.currentTarget?.getAttribute('question');
          console.log(value, question, goto);
          optionClick(goto, question, value);
        }
      }
    } catch (err) {
      console.log(err);
    }
  });
  const setOptionsMetaData = React.useCallback(e => {
    console.log(e.currentTarget.checked, e.currentTarget.getAttribute('option'));
    doSetOptionsMetaData(e, pipelineDbItem?.detailmeta, pipelineDbItem, setPipelineDbItemProxy, null, currentLineupEditing, setCurrentLineupEditing);
  });
  const setCurrentPrice = React.useCallback(e => {
    if (e.currentTarget) {
      if (e?.currentTarget?.getAttribute('pipeline')) {
        const value = e?.current?.value ?? e?.currentTarget?.value;
        console.log(value, 'Add to Obj');
        addToObject(e?.currentTarget?.getAttribute('var'), value);
      }
      const temp = {
        ...pipelineDbItem
      };
      if (e?.currentTarget?.getAttribute('method') === 'singleStyle') {
        const f = temp?.styles[0] ? 0 : -1;
        console.log(f, e.currentTarget.value, !isNaN(Number(e.currentTarget.value)));
        if (f > -1) {
          if (!isNaN(Number(e.currentTarget.value))) {
            if (currentDefinePriceCurrency?.currency === 'USD') {
              temp.styles[f].price = Number(e.currentTarget.value);
            } else {
              if (!temp.styles[f].priceTable) {
                temp.styles[f].priceTable = {};
              }
              temp.styles[f].priceTable[currentDefinePriceCurrency.currency] = Number(e.currentTarget.value);
            }
            setPipelineDbItemProxy(temp);
          }
        }
      }
    }
  });
  const setCurrentQuantity = React.useCallback(e => {
    if (e.currentTarget) {
      if (e?.currentTarget?.getAttribute('pipeline')) {
        const value = e?.current?.value ?? e?.currentTarget?.value;
        console.log(value, 'Add to Obj');
        addToObject(e?.currentTarget?.getAttribute('var'), value);
      }
      const temp = {
        ...pipelineDbItem
      };
      if (e?.currentTarget?.getAttribute('method') === 'singleStyle') {
        const f = temp?.styles[0] ? 0 : -1;
        if (f > -1) {
          const f2 = 0;
          if (f2 > -1) {
            if (!isNaN(Number(e.currentTarget.value))) {
              temp.styles[f].option[f2].quantity = Number(e.currentTarget.value);
            }
          }
          setPipelineDbItemProxy(temp);
        }
      }
    }
  });
  const handleNewFile = React.useCallback(e => {
    console.log(e, 'Handle New');
    const modif = e?.currentTarget?.getAttribute('selectmodif');
    console.log('Sel', modif);
    console.log(imgCache);
    const files = e?.target?.files;
    const filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(m => m.type && allowedTypes.indexOf(m.type) > -1).map(m => {
      var blob = m.slice(0, m.size, m.type);
      const ext = allowedTypes[allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
      return new File([blob], `${uuidv4()}.${ext}`, {
        type: m.type
      });
    });
    console.log('Files Renamed', filesRenamed, imgCache);
    const useForm = imgCache;
    const imgForTemp = imgFor;
    if (filesRenamed) {
      filesRenamed.forEach(img => {
        useForm.append('image', img);
        fileToDataUrl(img, modif);
        const f = imgForTemp.findIndex(m => m.name === img.name);
        if (f > -1) {
          imgForTemp.splice(f, 1);
        }
        imgForTemp.push({
          name: img.name,
          modif: modif
        });
      });
    }
    setImgFor(imgForTemp);
    setImgCache(useForm);
    if (props?.setImgCache) {
      props.setImgCache(useForm);
    }
    if (props.setSurveyState && props.surveyState) {
      const temp = props.surveyState;
      temp.imgFor = imgForTemp;
      props.setSurveyState(temp);
    }
  });
  const addTempFile = React.useCallback(e => {
    console.log(e, 'Add Temp');
    if (e?.currentTarget?.getAttribute('modif')) {
      const f = document.querySelector(`input[selectmodif='${e?.currentTarget?.getAttribute('modif')}']`);
      if (f?.click) {
        f.click();
      }
    }
  });
  const fileToDataUrl = (file, useVar) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        console.log(reader.result);
        document.querySelector(`img[selectimg=${useVar}]`).style.backgroundImage = `url(${reader.result})`;
        resolve(reader.result);
      };
      reader.onerror = () => {
        reject(reader.error);
      };
      reader.readAsDataURL(file);
    });
  };
  const resolveImg = m => {
    let lastMatch;
    // Find last match in imgFor for most recent updated
    for (let i = 0; i < imgFor.length; i++) {
      if (m?.input?.var === imgFor[i].modif) {
        lastMatch = imgFor[i].name;
      }
    }
    // Find only image types
    const imageEntries = [...imgCache.entries()].filter(([key, value]) => key === 'image');
    let f;
    // Resolve last match for last used image file
    imageEntries.forEach(([key, value], index) => {
      if (lastMatch === value.name) {
        f = value;
      }
    });
    if (f) {
      fileToDataUrl(f, m.input.var);
    }
    const useFile = `${m.input.var === 'featureImg' && bgImg ? `${props?.cdn?.static}/${bgImg}` : m.input.var === 'leadImg' && leadImg ? `${props?.cdn?.static}/${leadImg}` : 'img/default/greythumb.jpg'}`;
    return /*#__PURE__*/React.createElement("img", {
      style: {
        backgroundImage: `url(${useFile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      selectimg: m?.input?.var
    });
  };
  const appendFormData = (filesRenamed, modif = 'lineup', useId) => {
    const formData = imgCache;
    const tempImgNames = imgFor;
    if (filesRenamed) {
      filesRenamed.forEach(img => {
        formData.append("image", img);
        tempImgNames.push({
          name: img.name,
          modif: modif,
          id: useId
        });
      });
      formData.append('imgNames', JSON.stringify(tempImgNames));
    }
    setImgCache(formData);
    setImgFor(tempImgNames);
    if (props?.setImgCache) {
      props.setImgCache(formData);
    }
    if (props.setSurveyState && props.surveyState) {
      const temp = props.surveyState;
      temp.imgFor = tempImgNames;
      props.setSurveyState(temp);
    }
  };
  const resolveComponent = m => {
    if (m?.component && typeof m.component === 'function') {
      const UseComponent = m.component;
      return /*#__PURE__*/React.createElement(UseComponent, _extends({}, props, {
        m: m
      }));
    }
  };
  const resolveStageItem = (useStageItem, useAnimatingBack, useStyles, useAnimatingNext, useKeepCurrent, useStage) => {
    return /*#__PURE__*/React.createElement("div", {
      className: `${styles[useStyles]} ${styles.item} ${animatingNext && useAnimatingNext ? `${styles[useAnimatingNext]}` : null} ${animatingBack && useAnimatingBack ? `${styles[useAnimatingBack]}` : null} ${keepCurrent && useKeepCurrent ? `${styles.keepCurrent} ${styles.backToOriginal}` : null} ${useStageItem?.className} survey_itemContainer`,
      style: {
        background: useStageItem?.bg ?? null,
        color: useStageItem?.color ?? null
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: `${styles.title} survey_title`
    }, useStageItem?.label), useStageItem?.input?.type === 'select' ? /*#__PURE__*/React.createElement("ul", {
      className: styles.survey__optionsList
    }, useStageItem?.input?.options.map(option => /*#__PURE__*/React.createElement("li", {
      key: option.label
    }, /*#__PURE__*/React.createElement("button", {
      className: styles.survey__optionButton,
      onClick: handleOptionClick,
      goto: option.goto,
      label: option.label,
      question: useStageItem?.label,
      value: option.label
    }, option.label)))) : useStageItem?.input?.type === 'number' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
      type: "number",
      className: `${styles.numberInput}`,
      defaultValue: useStageItem?.input?.default,
      ref: inputRef
    })) : useStageItem?.input?.type === 'text' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextareaAutosize, {
      type: "text",
      className: `${styles.textInput}`,
      placeholder: useStageItem?.input?.default,
      minRows: 3,
      ref: inputRef,
      onKeyDown: handleKeyDown,
      goto: useStageItem?.confirm?.goto,
      question: useStageItem?.label,
      defaultValue: answers[useStage]?.answer
    })) : useStageItem?.component && typeof useStageItem.component === 'function' ? /*#__PURE__*/React.createElement("div", null, resolveComponent(useStageItem)) : null, useStageItem?.pipeline?.map ? useStageItem.pipeline.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "survey_pipelineItemContainer",
      style: {
        marginBottom: '.25rem'
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        lineHeight: '1.5rem'
      }
    }, m?.label ?? ''), /*#__PURE__*/React.createElement("div", null, m?.input?.type === 'text' ? /*#__PURE__*/React.createElement("div", {
      className: `${m?.className}`
    }, /*#__PURE__*/React.createElement(TextareaAutosize, {
      type: "text",
      className: `${styles.textInput}`,
      placeholder: m?.input?.default,
      onInput: handleKeyDown,
      var: m?.input?.var,
      pipeline: "true",
      minRows: m?.input?.rows ?? 1,
      usedefault: pipelineObject[m?.input?.var],
      surveyclear: "true"
    })) : m?.input?.type === 'datetime-local' ? /*#__PURE__*/React.createElement("div", {
      className: `${m?.className}`
    }, /*#__PURE__*/React.createElement("input", {
      type: "datetime-local",
      placeholder: m?.input?.default,
      onInput: handleKeyDown,
      var: m?.input?.var,
      pipeline: "true",
      surveyclear: "true",
      usedefault: pipelineObject[m?.input?.var]
    })) : m?.input?.type === 'lineup' ? /*#__PURE__*/React.createElement("div", {
      className: `${m?.className}`
    }, /*#__PURE__*/React.createElement(Lineup, _extends({}, props, {
      product: pipelineDbItem,
      editing: pipelineDbItem,
      editingOptionsMeta: pipelineDbItem?.detailmeta ?? null,
      setOptionsMetaData: setOptionsMetaData,
      currentLineupEditing: currentLineupEditing,
      setCurrentLineupEditing: setCurrentLineupEditing,
      appendFormData: appendFormData
    }))) : m?.input?.type === 'price' ? /*#__PURE__*/React.createElement("div", {
      className: `${m?.className} flex gap-p2`
    }, _span || (_span = /*#__PURE__*/React.createElement("span", null, "$")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      style: {
        width: '100%'
      },
      onChange: setCurrentPrice,
      var: m?.input?.var,
      pipeline: "true",
      surveyclear: "true",
      method: m?.input?.method,
      usedefault: !isObjectEmpty(pipelineObject) && Object.prototype.hasOwnProperty.call(pipelineObject, [m?.input?.var]) && pipelineObject[m?.input?.var] !== null ? westernMoneyFormat.format(pipelineObject[m?.input?.var]) : '10.00'
    }))) : m?.input?.type === 'quantity' ? /*#__PURE__*/React.createElement("div", {
      className: `${m?.className} flex gap-p2`
    }, _span2 || (_span2 = /*#__PURE__*/React.createElement("span", null, "Qty")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      style: {
        width: '100%'
      },
      onChange: setCurrentQuantity,
      var: m?.input?.var,
      pipeline: "true",
      surveyclear: "true",
      method: m?.input?.method,
      usedefault: !isObjectEmpty(pipelineObject) && Object.prototype.hasOwnProperty.call(pipelineObject, [m?.input?.var]) && pipelineObject[m?.input?.var] !== null ? pipelineObject[m?.input?.var] : '100'
    }))) : m?.input?.type === 'image' && ['leadImg', 'featureImg'].indexOf(m?.input?.var) > -1 ? /*#__PURE__*/React.createElement("div", {
      className: `${m?.className}`
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: m?.height ?? '200px',
        width: m?.width ?? '200px'
      }
    }, resolveImg(m)), /*#__PURE__*/React.createElement("div", {
      className: `flex gap-p2 ${styles.pseudoButton}`,
      style: {
        alignItems: 'center',
        fontSize: '.8rem',
        marginTop: '.5rem'
      },
      onClick: addTempFile,
      modif: m?.input?.var
    }, /*#__PURE__*/React.createElement("div", {
      className: "material-icons",
      style: {
        alignSelf: 'center'
      }
    }, "add"), /*#__PURE__*/React.createElement("div", null, m?.note)), /*#__PURE__*/React.createElement("input", {
      style: {
        display: 'none'
      },
      type: "file",
      onChange: handleNewFile,
      selectmodif: m.input.var
    })) : m?.component ? /*#__PURE__*/React.createElement("div", null, resolveComponent(m)) : null))) : null, /*#__PURE__*/React.createElement("div", {
      className: "survey_errorContainer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "error",
      ref: currentError,
      style: {
        opacity: 0
      }
    }, errorLog[useStage])), /*#__PURE__*/React.createElement("div", {
      className: "flex survey_confirmBackButtonContainer",
      style: {
        marginTop: '.5rem',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: `${styles.confirmButton} survey_confirmButton`,
      onClick: handleOptionClickConfirm,
      goto: useStageItem?.confirm?.goto,
      label: useStageItem?.label,
      value: 'confirm',
      question: useStageItem?.label,
      style: {
        opacity: useStageItem?.confirm ? 1 : 0,
        transition: 0
      }
    }, useStageItem?.confirm?.label ? useStageItem?.confirm.label : useStageItem?.confirm?.goto === 'end' ? 'Confirm' : 'Next'), backList && backList.length > 0 && !useStageItem?.submit && !submitted ? /*#__PURE__*/React.createElement("button", {
      onClick: handleGoBack,
      className: `${styles.backButton} survey_backButton`,
      style: {
        transition: 0
      }
    }, "Back") : null));
  };
  const bgImg = pipelineDbItem?.images ? pipelineDbItem.images.find(m => m?.bgImg) : null;
  const leadImg = pipelineDbItem.images ? pipelineDbItem.images.find(m => m?.leadImg) : null;
  console.log(currentStage, answers, backList, next, submitted, props, currentStageItem);
  console.log('Pipeline Object', pipelineObject, pipelineDbItem, back, next);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.survey__container,
    style: {
      height: props?.height ? `${props.height}px` : '100vh'
    }
  }, back ? resolveStageItem(backStageItem, 'animatingBackBack', 'backItem', null, null, back) : null, resolveStageItem(currentStageItem, 'animatingBackCurrent', 'currentItem', 'animatingNextCurrent', true, currentStage), next ? resolveStageItem(nextStageItem, null, 'nextItem', 'animatingNextNext', null, next) : null);
};
export default Module;