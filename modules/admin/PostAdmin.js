var _h, _span, _span2, _span3, _div, _div2, _div3, _div4, _label;
var REACT_ELEMENT_TYPE;
function _jsx(e, r, E, l) { REACT_ELEMENT_TYPE || (REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103); var o = e && e.defaultProps, n = arguments.length - 3; if (r || 0 === n || (r = { children: void 0 }), 1 === n) r.children = l;else if (n > 1) { for (var t = new Array(n), f = 0; f < n; f++) t[f] = arguments[f + 3]; r.children = t; } if (r && o) for (var i in o) void 0 === r[i] && (r[i] = o[i]);else r || (r = o || {}); return { $$typeof: REACT_ELEMENT_TYPE, type: e, key: void 0 === E ? null : "" + E, ref: null, props: r, _owner: null }; }
import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import TextareaAutosize from 'react-textarea-autosize';
import StorageAdmin from './StorageAdmin';
import Tooltip from '@mui/material/Tooltip';
import AdminStyles from './Admin.module.scss';
import { logout } from '../utility/onboarding/SignIn';
import { fetchPost } from '../utility/fetch';
import { isObjectEmpty, throttleFunctionCall } from '../util';
import { loadArticle, publishArticle, deleteArticle } from './article/utility';
import { selectThisText } from '../utility/utility/event';
import toolbarOptions from './editor/toolbarOptions';
const moduleName = 'PostAdmin';
const editorElementId = 'admin_editor_element';
const defaultText = `Let's start a conversation.`;
const useToolbarOptions = toolbarOptions;
const Module = props => {
  const [componentDidMount, setComponentDidMount] = React.useState(false);
  const [componentId, setComponentId] = React.useState(null);
  const [editorInitialized, setEditorInitialized] = React.useState(false);
  const [editorCreateAttempts, setEditorCreateAttempts] = React.useState(0);
  const [postType, setPostType] = React.useState('admin');
  const [useGroups, setUseGroups] = React.useState([]);
  const [useTags, setUseTags] = React.useState([]);
  const [published, setPublished] = React.useState(false);
  const [meta, setMeta] = React.useState({});
  const [inHtmlImages, setInHtmlImages] = React.useState([]);
  const [didPublishThisSession, setDidPublishThisSession] = React.useState(false);
  const [recentArticles, setRecentArticles] = React.useState([]);
  const [postOffset, setPostOffset] = React.useState(0);
  const [approved, setApproved] = React.useState(true);
  const titleRef = React.useRef();
  const editorRef = React.useRef();
  const groupsRef = React.useRef();
  const tagsRef = React.useRef();
  const approvedRef = React.useRef();
  const featuredImgRef = React.useRef();
  const featuredImgUrlRef = React.useRef();
  const useDefaultText = defaultText;
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, e => {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        // loadDefault()
      } else if (e.dispatch === 'save') {
        if (localStorage && editorRef?.current) {
          const contentRaw = editorRef.current.getText();
          const currentContents = editorRef.current.getContents();
          console.log(currentContents, inHtmlImages);
          const mappedHtmlForImages = findImagesInEditorHtml(currentContents);
          const images = mappedHtmlForImages.flat(100).filter(Boolean);
          setInHtmlImages(images);
          if (contentRaw.length > useDefaultText.length + 25) {
            // If there is a rough match to default text, do not save
            if (!published) {
              // Only cache if not published for now
              if (currentContents) {
                localStorage.setItem('cached_post_admin', JSON.stringify({
                  title: titleRef?.current?.value,
                  content: currentContents,
                  groups: useGroups,
                  tags: useTags
                }));
              }
            }
          }
        }
      }
    }
  });
  const findImagesInEditorHtml = html => {
    return Object.entries(html).map(m => {
      if (typeof m[1] === 'object') {
        return findImagesInEditorHtml(m[1]);
      }
      if (m[0] === 'image') {
        return m[1];
      }
    });
  };
  React.useEffect(() => {
    if (!componentDidMount) {
      const id = uuidv4();
      setComponentId(id);
      setInterval(() => {
        props._LocalEventEmitter.dispatch(moduleName, {
          dispatch: 'save'
        });
      }, 7500);
      loadDefault();
      setComponentDidMount(true);
    }
  }, [componentDidMount]);

  /**
   * Should load initial recently created Platform Posts
   * @returns 
   */
  const loadDefault = async () => {
    const body = {
      domainKey: props.domainKey,
      hash: props._loggedIn.hash,
      identifier: props._loggedIn.identifier,
      postOffset: postOffset * 100
    };
    let res = await fetchPost(props.apiUrl + '/a/recentarticles', null, null, body);
    if (!res) {
      return false;
    } else if (res.hasOwnProperty('status')) {
      if (res.status == "disauthenticated") {
        logout();
        return "disauthenticated";
      } else if (res.status == "failed") {
        return false;
      } else if (res.status == "success") {
        if (res?.data) {
          setRecentArticles(res.data);
        }
        // if (res.askStream) {
        //     setAskStream(res.askStream)
        // }
        // if (res.canStream) {
        //     setCanStream(res.canStream)
        // }
        return res;
      }
    }
  };
  const initializeEditor = () => {
    let temp = editorCreateAttempts;
    temp = temp + 1;
    setEditorCreateAttempts(temp);
    var quill = new window.Quill(`#${editorElementId}`, {
      modules: {
        toolbar: useToolbarOptions
      },
      theme: 'snow'
    });
    if (quill) {
      if (quill.getModule) {
        const toolbar = quill.getModule('toolbar');
        toolbar.addHandler('image', imageHandler);
      }
      editorRef.current = quill;
      if (localStorage && editorRef.current) {
        // Load cached post
        const cachedPost = JSON.parse(localStorage.getItem('cached_post_admin'));
        if (cachedPost) {
          if (cachedPost.content) {
            editorRef.current.setContents(cachedPost.content);
          }
          if (cachedPost.title) {
            titleRef.current.value = cachedPost.title;
          }
          if (cachedPost.groups) {
            console.log(cachedPost.groups);
            groupsRef.current.value = cachedPost.groups.join(' ');
            setUseGroups(cachedPost.groups);
          }
          if (cachedPost.tags) {
            tagsRef.current.value = cachedPost.tags.join(' ');
            setUseTags(cachedPost.tags);
          }
        }
      }
      setEditorInitialized(true);
    }
  };
  function imageHandler() {
    console.log(document.getElementById(editorElementId));
    var range = this.quill.getSelection();
    var value = prompt('Image URL:');
    if (value) {
      this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
    }
  }
  React.useEffect(() => {
    if (window?.Quill && !editorInitialized && editorCreateAttempts < 3) {
      const editorRendered = document.getElementById(editorElementId);
      if (editorRendered) {
        throttleFunctionCall(props._LocalEventEmitter, '_initializeEditor', 1000, initializeEditor, []);
      }
    }
  }, [editorInitialized, editorCreateAttempts]);

  // If any nodes are recreated this will delete extra
  const destroyExtraNodes = () => {
    try {
      if (document.getElementsByClassName('ql-toolbar')) {
        const tb = document.getElementsByClassName('ql-toolbar');
        if (tb.length > 1) {
          for (let i = 0; i < tb.length - 1; i++) {
            // Dont destroy most recently created
            if (tb[i] && tb[i].remove) {
              tb[i].remove();
            }
          }
        }
      }
    } catch (err) {
      // fail silently
    }
  };
  destroyExtraNodes();
  const handleUpdateInput = React.useCallback(e => {
    if (e?.currentTarget?.getAttribute && e.currentTarget.getAttribute('modif')) {
      const modif = e.currentTarget.getAttribute('modif');
      const value = e?.currentTarget?.value?.split ? e.currentTarget.value.split(' ') : [];
      if (modif === 'groups') {
        setUseGroups(value);
      } else if (modif === 'tags') {
        setUseTags(value);
      }
    }
  });
  const handlePublishArticle = React.useCallback(e => {
    publishArticle(props, published, titleRef, useGroups, useTags, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, meta, setDidPublishThisSession, setPublished, loadDefault, useDefaultText, approved, setApproved, approvedRef, inHtmlImages);
  });
  const handleDeleteArticle = React.useCallback(e => {
    deleteArticle(props, published, titleRef, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, setPublished, loadDefault, useDefaultText);
  });
  const handleLoadArticle = React.useCallback(e => {
    if (e?.currentTarget?.getAttribute) {
      const article = e.currentTarget.getAttribute('article');
      if (article) {
        loadArticle(props, article, editorRef, titleRef, groupsRef, tagsRef, setUseGroups, setUseTags, setPublished, setApproved, approvedRef, setMeta, setInHtmlImages);
      }
    }
  });
  const handleSetApproved = React.useCallback(e => {
    if (e?.currentTarget) {
      setApproved(e.currentTarget.checked);
    }
  });
  const handleSetFeaturedImage = React.useCallback(e => {
    if (e?.currentTarget) {
      const temp = meta;
      temp.featuredImg = e.currentTarget.value;
      setMeta(temp);
      if (featuredImgRef?.current) {
        featuredImgRef.current.style.backgroundImage = `url(${temp.featuredImg})`;
      }
    }
  });

  // console.log(recentArticles, meta, inHtmlImages, published)

  return /*#__PURE__*/_jsx("div", {
    className: `${props.className} ${moduleName}_Container`
  }, void 0, _h || (_h = /*#__PURE__*/_jsx("h3", {}, void 0, "Post")), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.containerTwoSmallRight}`
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `Editor_Container Editor_MaxWidth`
  }, void 0, /*#__PURE__*/_jsx("div", {}, void 0, <TextareaAutosize className={`${AdminStyles.millerText}`} type='text' placeholder='Title' style={{
    fontStyle: 'italic',
    width: '100%',
    fontSize: '2rem',
    fontWeight: '700'
  }} ref={titleRef} />), /*#__PURE__*/_jsx("div", {
    style: {
      fontSize: '1.125rem',
      marginBottom: '.25rem',
      color: '#cccccc',
      fontWeight: '600'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.millerText}`,
    style: {
      fontStyle: 'italic'
    }
  }, void 0, /*#__PURE__*/_jsx(Link, {
    href: `/p?u=${published?.authorUsername ?? props?._loggedIn?.username ?? ''}`,
    style: {
      alignSelf: 'center'
    }
  }, void 0, _span || (_span = /*#__PURE__*/_jsx("span", {}, void 0, "by:\xA0")), /*#__PURE__*/_jsx("span", {}, void 0, published?.authorUsername ?? props?._loggedIn?.username ?? '')))), /*#__PURE__*/_jsx("div", {}, void 0, published?.title ? /*#__PURE__*/_jsx("div", {
    style: {
      background: 'rgba(55, 55, 55, 1)',
      borderRadius: '.5rem',
      padding: '.25rem',
      width: '-webkit-fill-available',
      textAlign: 'center',
      width: '100%',
      marginBottom: '.25rem'
    }
  }, void 0, _span2 || (_span2 = /*#__PURE__*/_jsx("span", {}, void 0, "Read\xA0")), /*#__PURE__*/_jsx(Link, {
    href: `${props.devLocal ? `${props.devAddress}/ar?p=${published?.id}` : `https://${props.domainUrl}/ar?p=${published?.id}`}`
  }, void 0, "\"", published?.title, "\""), _span3 || (_span3 = /*#__PURE__*/_jsx("span", {}, void 0, "\xA0at\xA0")), /*#__PURE__*/_jsx("span", {
    selectValue: `${props.devLocal ? `${props.devAddress}/ar?p=${published?.id}` : `https://${props.domainUrl}/ar?p=${published?.id}`}`,
    onClick: selectThisText
  }, void 0, `${props.devLocal ? `${props.devAddress}/ar?p=${published?.id}` : `${props.domainUrl}/ar?p=${published?.id}`}`)) : null), /*#__PURE__*/_jsx("div", {
    id: `${editorElementId}`,
    className: `Editor_Platform`,
    style: {
      marginBottom: '.25rem'
    }
  }, void 0, /*#__PURE__*/_jsx("p", {}, void 0, useDefaultText)), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.metaContainer} flex gap-p2`,
    style: {
      marginBottom: '.25rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2",
    style: {
      flexDirection: 'column'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      minWidth: '200px'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, void 0, "Featured Image"), <input type='text' placeholder='Featured Image Url' style={{
    width: '100%',
    fontWeight: '600'
  }} defaultValue={`${meta?.featuredImg ?? ''}`} onChange={handleSetFeaturedImage} ref={featuredImgUrlRef} />), <img style={{
    backgroundImage: `url(${meta?.featuredImg ?? null}`,
    height: '100px',
    width: '100%',
    minWidth: '100px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }} selectValue={`${meta?.featuredImg ?? null}`} onClick={selectThisText} ref={featuredImgRef} />), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2",
    style: {
      width: '100%'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, _div || (_div = /*#__PURE__*/_jsx("div", {}, void 0, "Groups")), <input type='text' id={`${moduleName}_groupingInput`} placeholder='Post Groups' style={{
    width: '100%',
    fontWeight: '600'
  }} onInput={handleUpdateInput} modif='groups' ref={groupsRef} />), useGroups?.length > 0 ? /*#__PURE__*/_jsx("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, void 0, useGroups.map(d => {
    return d !== '' ? /*#__PURE__*/_jsx("div", {
      className: "tagItem"
    }, void 0, d) : _div2 || (_div2 = /*#__PURE__*/_jsx("div", {}));
  })) : null), /*#__PURE__*/_jsx("div", {
    style: {
      width: '100%'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, _div3 || (_div3 = /*#__PURE__*/_jsx("div", {}, void 0, "Tags")), <input type='text' id={`${moduleName}_useTagsInput`} placeholder='Tags' style={{
    width: '100%',
    fontWeight: '600'
  }} onInput={handleUpdateInput} modif='tags' ref={tagsRef} />), useTags?.length > 0 ? /*#__PURE__*/_jsx("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, void 0, useTags.map(d => {
    return d !== '' ? /*#__PURE__*/_jsx("div", {
      className: "tagItem"
    }, void 0, d) : _div4 || (_div4 = /*#__PURE__*/_jsx("div", {}));
  })) : null))), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.forceSafeBreak} flex gap-p2`
  }, void 0, !published ? /*#__PURE__*/_jsx("button", {
    className: `${AdminStyles.actionButton}`,
    onClick: handlePublishArticle
  }, void 0, "Post") : /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2"
  }, void 0, /*#__PURE__*/_jsx("button", {
    style: {
      minWidth: '200px',
      maxWidth: '90%'
    },
    onClick: handlePublishArticle
  }, void 0, "Update"), /*#__PURE__*/_jsx("button", {
    style: {
      minWidth: '200px',
      maxWidth: '90%'
    },
    onClick: handleDeleteArticle
  }, void 0, "Delete")), /*#__PURE__*/_jsx("div", {
    className: "flex gap-p2",
    style: {
      background: 'rgb(55, 55, 55)',
      borderRadius: '1rem',
      padding: '0 2rem',
      justifyContent: 'center'
    }
  }, void 0, _label || (_label = /*#__PURE__*/_jsx("label", {}, void 0, "Approved")), <input type='checkbox' ref={approvedRef} defaultChecked={true} onChange={handleSetApproved} />)), didPublishThisSession && published?.id ? /*#__PURE__*/_jsx("div", {
    style: {
      marginTop: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      background: 'rgba(55, 55, 55, 1)',
      borderRadius: '.5rem',
      padding: '.25rem',
      width: '-webkit-fill-available',
      textAlign: 'center',
      width: '100%'
    }
  }, void 0, "Your post was made successsfully. View at\xA0", /*#__PURE__*/_jsx(Link, {
    href: `${props.devLocal ? `${props.devAddress}/ar?p=${published?.id}` : `https://${props.domainUrl}/ar?p=${published?.id}`}`
  }, void 0, `${props.devLocal ? `${props.devAddress}/ar?p=${published?.id}` : `${props.domainUrl}/ar?p=${published?.id}`}`))) : null), /*#__PURE__*/_jsx("div", {}, void 0, /*#__PURE__*/_jsx("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, void 0, /*#__PURE__*/_jsx("h4", {
    style: {
      fontWeight: '600'
    }
  }, void 0, "Recent Articles"), /*#__PURE__*/_jsx("div", {
    className: `${AdminStyles.simpleList} ${AdminStyles.simpleListShortText}`,
    style: {
      maxHeight: '200px',
      overflow: 'auto'
    }
  }, void 0, recentArticles?.length > 0 ? recentArticles.map((m, i) => /*#__PURE__*/_jsx("div", {
    style: {
      background: 'rgb(53, 53, 53)'
    }
  }, void 0, /*#__PURE__*/_jsx("span", {
    style: {
      cursor: 'pointer'
    },
    article: m?.id,
    onClick: handleLoadArticle
  }, void 0, m.title), /*#__PURE__*/_jsx("span", {}, void 0, m.publish && !isNaN(Number(m.publish)) && !isNaN(new Date(Number(m.publish))) ? ` - ${new Date(Number(m.publish)).toDateString()}` : ''))) : null)), /*#__PURE__*/_jsx("div", {}, void 0, <StorageAdmin {...props} vert={true} />))));
};
export default Module;