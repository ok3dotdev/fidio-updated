var _div;
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { resolveDefaultStyle, resolveImg, doUploadImageForLineupParticipant } from '../../utility/ecommerce';
import { getFormattedTime } from '../../util';
import PIMStyles from './ProductImageManager.module.scss';
import { allowedTypes, defaultLineup } from './defaults';
import { v4 as uuidv4 } from 'uuid';
const Module = props => {
  const [selectedStyle, setSelectedStyle] = React.useState({});
  const [currentOption, setCurrentOption] = React.useState(null);
  const [uploadingForLineupId, setUploadingForLineupId] = React.useState(null);
  const [currentLineupId, setCurrentLineupId] = React.useState(null);
  const lineupIdRef = React.useRef();
  const lineupNameRef = React.useRef();
  const lineupDescriptionRef = React.useRef();
  const lineupTimeRef = React.useRef();
  const currency = '$';
  resolveDefaultStyle(props.product, selectedStyle, setSelectedStyle, currentOption, setCurrentOption);
  const updateLineup = React.useCallback(e => {
    if (e.currentTarget) {
      if (e.currentTarget.getAttribute('option')) {
        const temp = {
          ...props.product.detailmeta
        };
        if (e.currentTarget.getAttribute('option') === 'add') {
          if (temp.lineup && temp.lineup.length < 10) {
            temp.lineup.push(defaultLineup());
            props.setCurrentLineupEditing(temp.lineup.length - 1);
            setCurrentLineupId(temp.lineup[temp.lineup.length - 1].id);
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'remove') {
          // TODO Must update to delete at current index and delete value on server
          if (temp.lineup && temp.lineup.length > 0) {
            temp.lineup.pop();
            props.setCurrentLineupEditing(temp.lineup.length - 1 > -1 ? temp.lineup.length - 1 : null);
            if (temp.lineup.length !== 0) {
              setCurrentLineupId(temp.lineup[temp.lineup.length - 1].id);
            }
            lineupNameRef.current.value = '';
            lineupDescriptionRef.current.value = '';
            lineupTimeRef.current.value = null;
          }
        } else if (e.currentTarget.getAttribute('option') === 'setSelected') {
          const index = e.currentTarget.getAttribute('index');
          if (!isNaN(index)) {
            props.setCurrentLineupEditing(index);
            setCurrentLineupId(temp.lineup[index].id);
            lineupNameRef.current.value = temp.lineup[index].title;
            lineupDescriptionRef.current.value = temp.lineup[index].description;
            lineupTimeRef.current.value = temp.lineup[index].time;
          }
        }
      }
    }
  });
  React.useEffect(() => {
    let useCur = props.currentLineupEditing;
    if (props.currentLineupEditing === null) {
      props.setCurrentLineupEditing(0);
      useCur = 0;
    }
    if (props.editing && props.editing.detailmeta && props.editing.detailmeta.lineup && props.editing.detailmeta.lineup.length > 0 && props.editing.detailmeta.lineup[useCur]) {
      if (lineupNameRef.current) {
        setCurrentLineupId(props.editing.detailmeta.lineup[useCur].id);
        lineupNameRef.current.value = props.editing.detailmeta.lineup[useCur].title;
        lineupDescriptionRef.current.value = props.editing.detailmeta.lineup[useCur].description;
        lineupTimeRef.current.value = props.editing.detailmeta.lineup[useCur].time;
      }
    }
  }, [props.currentLineupEditing, props.editing.id, props?.editing?.detailmeta?.lineup, lineupNameRef.current, lineupDescriptionRef.current, lineupTimeRef.current]);
  const fileInput = React.useRef();
  const handleUploadImage = React.useCallback(e => {
    if (props?.setWarning) {
      props.setWarning(null);
    }
    setUploadingForLineupId(e.currentTarget.getAttribute('lineupid'));
    setTimeout(() => {
      if (fileInput.current) {
        fileInput.current.click(); // Prompt file upload
      }
    }, 1);
  });
  const handleNewFile = React.useCallback(e => {
    try {
      if (e && e.target && e.target.files) {
        const files = e.target.files;
        if (files && files.length > 0) {
          const filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(m => m.type && allowedTypes.indexOf(m.type) > -1).map(m => {
            var blob = m.slice(0, m.size, m.type);
            const ext = allowedTypes[allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
            return new File([blob], `${uuidv4()}.${ext}`, {
              type: m.type
            });
          });
          const f = async () => {
            if (!props.fetchBusy && props.apiUrl && props.domainKey && props._loggedIn && props.editing) {
              if (props.publishProduct) {
                const formData = new FormData();
                const imgNames = [];
                if (filesRenamed) {
                  filesRenamed.forEach(img => {
                    formData.append("image", img);
                    imgNames.push({
                      name: img.name,
                      modif: 'lineup'
                    });
                  });
                  formData.append('imgNames', JSON.stringify(imgNames));
                }
                formData.append('domainKey', props.domainKey);
                formData.append('hash', props._loggedIn.hash);
                formData.append('identifier', props._loggedIn.identifier);
                formData.append('product', props.editing.id);
                formData.append('detailmeta', JSON.stringify(props.editing.detailmeta));
                formData.append('lineupid', uploadingForLineupId);
                const promise = () => {
                  return new Promise(async (resolve, reject) => {
                    try {
                      const complete = await props.publishProduct('publish', 'true', true);
                      resolve(complete);
                    } catch (err) {
                      resolve(null);
                    }
                  });
                };
                promise().then(async () => {
                  if (props.setFetchBusy) {
                    props.setFetchBusy(true);
                    setTimeout(() => {
                      props.setFetchBusy(false);
                    }, 10000);
                  }
                  console.log(props.editing);
                  const data = await doUploadImageForLineupParticipant(props.apiUrl, props.domainKey, props.editing.id, props._loggedIn, formData);
                  if (data && data.product && data.product.products) {
                    if (fileInput?.current?.value) {
                      fileInput.current.value = null;
                    }
                    if (props.setFetchBusy) {
                      props.setFetchBusy(false);
                    }
                    if (props.setCombinedFeed) {
                      console.log('Set Combined Feed', data.product.products, props.setCombinedFeed);
                      props.setCombinedFeed(data.product.products);
                      if (props.setEditing) {
                        const f = data.product.products.find(m => m.id === props.editing.id);
                        if (f) {
                          props.setEditing(f);
                          if (f.detailmeta) {
                            props.setEditingOptionsMeta(f.detailmeta);
                          }
                        }
                      }
                    }
                  } else {
                    fileInput.current = null;
                  }
                });
              }
            }
          };
          if (props?.product?.new && props?.appendFormData) {
            props.appendFormData(filesRenamed, 'lineup', uploadingForLineupId);
          } else {
            f();
          }
        }
      }
    } catch (err) {
      console.log(err);
      if (props?.setWarning) {
        props.setWarning({
          message: 'There was an issue uploading images'
        });
      }
    }
  });
  const validStyleObject = selectedStyle && props.product && props.product.styles && props.product.styles.find(m => m.sid === selectedStyle) ? props.product.styles.find(m => m.sid === selectedStyle) : null;
  const validOptionObject = validStyleObject && validStyleObject.option ? currentOption ? validStyleObject.option.find(m => m.sid === currentOption) : validStyleObject.option[0] ? validStyleObject.option[0] : null : null;

  // console.log(props.product, props._loggedIn, currentOption, selectedStyle, props)
  const isAdmin = props.product && props.product.owner && props._loggedIn && props._loggedIn.identifier && props._loggedIn.identifier === props.product.owner;
  console.log(props.product, props.editingOptionsMeta, selectedStyle, currency, props.currentDefinePriceCurrency, props.priceInput, validStyleObject, props.editing, props.currentLineupEditing);
  const isEditing = props?.editing?.id && props?.product?.id && props.editing.id === props.product.id;
  const useEditingOptions = isEditing && props?.editingOptionsMeta || !isEditing && props.product.detailmeta;
  return /*#__PURE__*/React.createElement("div", {
    className: `${props.className}`,
    id: props.product && props.product.id ? props.product.id : '',
    selectedstyle: validStyleObject?.sid ? validStyleObject.sid : '',
    currentoption: validOptionObject?.sid ? validOptionObject.sid : ''
  }, props?.editingOptionsMeta?.productType === 'virtual' ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, useEditingOptions.livestream ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#222222',
      marginTop: '.25rem',
      marginBottom: '.25rem',
      borderRadius: '.25rem',
      padding: '.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.8rem',
      fontWeight: '600'
    }
  }, "Lineup"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.6rem'
    },
    ref: lineupIdRef
  }, currentLineupId ?? ''), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Enter participants name",
    placement: "right"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Name",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "title",
    ref: lineupNameRef
  })), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Optional: Enter description of participant",
    placement: "right"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Description",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "description",
    ref: lineupDescriptionRef
  })), /*#__PURE__*/React.createElement(Tooltip, {
    title: "Optional: Enter expected time for lineup participant to be performing",
    placement: "right"
  }, /*#__PURE__*/React.createElement("input", {
    type: "time",
    placeholder: "Time",
    style: {
      fontSize: '.8rem',
      width: '100%'
    },
    onInput: props.setOptionsMetaData,
    option: "lineupTemp",
    option2: "time",
    ref: lineupTimeRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2",
    style: {
      alignItems: 'center',
      marginTop: '.125rem'
    }
  }, props.product.detailmeta.lineup && props.product.detailmeta.lineup.length < 10 && props.product.detailmeta.lineup.length > -1 ? /*#__PURE__*/React.createElement(Tooltip, {
    title: "Add another Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      padding: '.125rem 0'
    },
    onClick: updateLineup,
    option: "add"
  }, "Add")) : null, props.product.detailmeta.lineup && props.product.detailmeta.lineup[props.currentLineupEditing] ? /*#__PURE__*/React.createElement(Tooltip, {
    title: "Remove this Lineup Participant",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      padding: '.125rem 0'
    },
    onClick: updateLineup,
    option: "remove"
  }, "Remove")) : null), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-p2",
    style: {
      overflowX: 'auto',
      overflowY: 'hidden',
      marginTop: '.125rem'
    }
  }, props.product.detailmeta.lineup && props.product.detailmeta.lineup.map ? props.product.detailmeta.lineup.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: `lineupItem_editing ${m.id === currentLineupId ? 'lineupItem_current' : ''}`,
    style: {
      maxWidth: '75px'
    },
    onClick: updateLineup,
    option: 'setSelected',
    index: i,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.7rem',
      fontWeight: '600',
      overflowWrap: 'anywhere'
    }
  }, m.title !== '' ? m.title : /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: '.7'
    }
  }, "Participant")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '.125rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `ProductImageManager_container`,
    style: {
      position: 'relative',
      width: '68px',
      height: '68px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.productImageListThumbnailContainer}`,
    style: {
      backgroundImage: `url(${props.cdn.static}/${m.image})`,
      height: '68px',
      backgroundSize: 'cover',
      borderRadius: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: "Click here to upload an image for your lineup participant",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${PIMStyles.changeImageButtonSmall} image material-icons`,
    onClick: handleUploadImage,
    lineupid: m.id
  }, "image")), /*#__PURE__*/React.createElement("img", {
    src: `${resolveImg(null)}`,
    className: "Product_img",
    style: {
      width: '68px',
      height: '68px',
      borderRadius: '1rem',
      opacity: m.image ? 0 : 1
    }
  })))), m.time ? /*#__PURE__*/React.createElement("div", {
    className: "lineupItem_time",
    style: {
      fontSize: '1rem'
    }
  }, getFormattedTime(m.time, {
    simple: true
  })) : null)) : null)), /*#__PURE__*/React.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    ref: fileInput,
    onChange: handleNewFile
  })) : null)) : _div || (_div = /*#__PURE__*/React.createElement("div", null)));
};
export default Module;