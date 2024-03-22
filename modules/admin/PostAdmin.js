"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _uuid = require("uuid");
var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));
var _StorageAdmin = _interopRequireDefault(require("./StorageAdmin"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _AdminModule = _interopRequireDefault(require("./Admin.module.scss"));
var _SignIn = require("../utility/onboarding/SignIn");
var _fetch = require("../utility/fetch");
var _util = require("../util");
var _utility = require("./article/utility");
var _event = require("../utility/utility/event");
var _toolbarOptions = _interopRequireDefault(require("./editor/toolbarOptions"));
var moduleName = 'PostAdmin';
var editorElementId = 'admin_editor_element';
var defaultText = "Let's start a conversation.";
var useToolbarOptions = _toolbarOptions["default"];
var Module = function Module(props) {
  var _ref2, _published$authorUser, _props$_loggedIn, _ref3, _published$authorUser2, _props$_loggedIn2, _meta$featuredImg, _meta$featuredImg2, _meta$featuredImg3;
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    componentId = _React$useState4[0],
    setComponentId = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(false),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    editorInitialized = _React$useState6[0],
    setEditorInitialized = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(0),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    editorCreateAttempts = _React$useState8[0],
    setEditorCreateAttempts = _React$useState8[1];
  var _React$useState9 = _react["default"].useState('admin'),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    postType = _React$useState10[0],
    setPostType = _React$useState10[1];
  var _React$useState11 = _react["default"].useState([]),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    useGroups = _React$useState12[0],
    setUseGroups = _React$useState12[1];
  var _React$useState13 = _react["default"].useState([]),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    useTags = _React$useState14[0],
    setUseTags = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(false),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    published = _React$useState16[0],
    setPublished = _React$useState16[1];
  var _React$useState17 = _react["default"].useState({}),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    meta = _React$useState18[0],
    setMeta = _React$useState18[1];
  var _React$useState19 = _react["default"].useState([]),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    inHtmlImages = _React$useState20[0],
    setInHtmlImages = _React$useState20[1];
  var _React$useState21 = _react["default"].useState(false),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    didPublishThisSession = _React$useState22[0],
    setDidPublishThisSession = _React$useState22[1];
  var _React$useState23 = _react["default"].useState([]),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    recentArticles = _React$useState24[0],
    setRecentArticles = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(0),
    _React$useState26 = (0, _slicedToArray2["default"])(_React$useState25, 2),
    postOffset = _React$useState26[0],
    setPostOffset = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(true),
    _React$useState28 = (0, _slicedToArray2["default"])(_React$useState27, 2),
    approved = _React$useState28[0],
    setApproved = _React$useState28[1];
  var titleRef = _react["default"].useRef();
  var editorRef = _react["default"].useRef();
  var groupsRef = _react["default"].useRef();
  var tagsRef = _react["default"].useRef();
  var approvedRef = _react["default"].useRef();
  var featuredImgRef = _react["default"].useRef();
  var featuredImgUrlRef = _react["default"].useRef();
  var useDefaultText = defaultText;
  props._LocalEventEmitter.unsubscribe(moduleName);
  props._LocalEventEmitter.subscribe(moduleName, function (e) {
    if (e) {
      if (e.dispatch === 'loadDefault') {
        // loadDefault()
      } else if (e.dispatch === 'save') {
        if (localStorage && editorRef !== null && editorRef !== void 0 && editorRef.current) {
          var contentRaw = editorRef.current.getText();
          var currentContents = editorRef.current.getContents();
          console.log(currentContents, inHtmlImages);
          var mappedHtmlForImages = findImagesInEditorHtml(currentContents);
          var images = mappedHtmlForImages.flat(100).filter(Boolean);
          setInHtmlImages(images);
          if (contentRaw.length > useDefaultText.length + 25) {
            // If there is a rough match to default text, do not save
            if (!published) {
              // Only cache if not published for now
              if (currentContents) {
                var _titleRef$current;
                localStorage.setItem('cached_post_admin', JSON.stringify({
                  title: titleRef === null || titleRef === void 0 || (_titleRef$current = titleRef.current) === null || _titleRef$current === void 0 ? void 0 : _titleRef$current.value,
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
  var findImagesInEditorHtml = function findImagesInEditorHtml(html) {
    return Object.entries(html).map(function (m) {
      if ((0, _typeof2["default"])(m[1]) === 'object') {
        return findImagesInEditorHtml(m[1]);
      }
      if (m[0] === 'image') {
        return m[1];
      }
    });
  };
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      var id = (0, _uuid.v4)();
      setComponentId(id);
      setInterval(function () {
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
  var loadDefault = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var body, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            body = {
              domainKey: props.domainKey,
              hash: props._loggedIn.hash,
              identifier: props._loggedIn.identifier,
              postOffset: postOffset * 100
            };
            _context.next = 3;
            return (0, _fetch.fetchPost)(props.apiUrl + '/a/recentarticles', null, null, body);
          case 3:
            res = _context.sent;
            if (res) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", false);
          case 8:
            if (!res.hasOwnProperty('status')) {
              _context.next = 21;
              break;
            }
            if (!(res.status == "disauthenticated")) {
              _context.next = 14;
              break;
            }
            (0, _SignIn.logout)();
            return _context.abrupt("return", "disauthenticated");
          case 14:
            if (!(res.status == "failed")) {
              _context.next = 18;
              break;
            }
            return _context.abrupt("return", false);
          case 18:
            if (!(res.status == "success")) {
              _context.next = 21;
              break;
            }
            if (res !== null && res !== void 0 && res.data) {
              setRecentArticles(res.data);
            }
            // if (res.askStream) {
            //     setAskStream(res.askStream)
            // }
            // if (res.canStream) {
            //     setCanStream(res.canStream)
            // }
            return _context.abrupt("return", res);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function loadDefault() {
      return _ref.apply(this, arguments);
    };
  }();
  var initializeEditor = function initializeEditor() {
    var temp = editorCreateAttempts;
    temp = temp + 1;
    setEditorCreateAttempts(temp);
    var quill = new window.Quill("#".concat(editorElementId), {
      modules: {
        toolbar: useToolbarOptions
      },
      theme: 'snow'
    });
    if (quill) {
      if (quill.getModule) {
        var toolbar = quill.getModule('toolbar');
        toolbar.addHandler('image', imageHandler);
      }
      editorRef.current = quill;
      if (localStorage && editorRef.current) {
        // Load cached post
        var cachedPost = JSON.parse(localStorage.getItem('cached_post_admin'));
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
  _react["default"].useEffect(function () {
    var _window;
    if ((_window = window) !== null && _window !== void 0 && _window.Quill && !editorInitialized && editorCreateAttempts < 3) {
      var editorRendered = document.getElementById(editorElementId);
      if (editorRendered) {
        (0, _util.throttleFunctionCall)(props._LocalEventEmitter, '_initializeEditor', 1000, initializeEditor, []);
      }
    }
  }, [editorInitialized, editorCreateAttempts]);

  // If any nodes are recreated this will delete extra
  var destroyExtraNodes = function destroyExtraNodes() {
    try {
      if (document.getElementsByClassName('ql-toolbar')) {
        var tb = document.getElementsByClassName('ql-toolbar');
        if (tb.length > 1) {
          for (var i = 0; i < tb.length - 1; i++) {
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
  var handleUpdateInput = _react["default"].useCallback(function (e) {
    var _e$currentTarget;
    if (e !== null && e !== void 0 && (_e$currentTarget = e.currentTarget) !== null && _e$currentTarget !== void 0 && _e$currentTarget.getAttribute && e.currentTarget.getAttribute('modif')) {
      var _e$currentTarget2;
      var modif = e.currentTarget.getAttribute('modif');
      var value = e !== null && e !== void 0 && (_e$currentTarget2 = e.currentTarget) !== null && _e$currentTarget2 !== void 0 && (_e$currentTarget2 = _e$currentTarget2.value) !== null && _e$currentTarget2 !== void 0 && _e$currentTarget2.split ? e.currentTarget.value.split(' ') : [];
      if (modif === 'groups') {
        setUseGroups(value);
      } else if (modif === 'tags') {
        setUseTags(value);
      }
    }
  });
  var handlePublishArticle = _react["default"].useCallback(function (e) {
    (0, _utility.publishArticle)(props, published, titleRef, useGroups, useTags, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, meta, setDidPublishThisSession, setPublished, loadDefault, useDefaultText, approved, setApproved, approvedRef, inHtmlImages);
  });
  var handleDeleteArticle = _react["default"].useCallback(function (e) {
    (0, _utility.deleteArticle)(props, published, titleRef, setUseTags, setUseGroups, tagsRef, groupsRef, editorRef, setPublished, loadDefault, useDefaultText);
  });
  var handleLoadArticle = _react["default"].useCallback(function (e) {
    var _e$currentTarget3;
    if (e !== null && e !== void 0 && (_e$currentTarget3 = e.currentTarget) !== null && _e$currentTarget3 !== void 0 && _e$currentTarget3.getAttribute) {
      var article = e.currentTarget.getAttribute('article');
      if (article) {
        (0, _utility.loadArticle)(props, article, editorRef, titleRef, groupsRef, tagsRef, setUseGroups, setUseTags, setPublished, setApproved, approvedRef, setMeta, setInHtmlImages);
      }
    }
  });
  var handleSetApproved = _react["default"].useCallback(function (e) {
    if (e !== null && e !== void 0 && e.currentTarget) {
      setApproved(e.currentTarget.checked);
    }
  });
  var handleSetFeaturedImage = _react["default"].useCallback(function (e) {
    if (e !== null && e !== void 0 && e.currentTarget) {
      var temp = meta;
      temp.featuredImg = e.currentTarget.value;
      setMeta(temp);
      if (featuredImgRef !== null && featuredImgRef !== void 0 && featuredImgRef.current) {
        featuredImgRef.current.style.backgroundImage = "url(".concat(temp.featuredImg, ")");
      }
    }
  });

  // console.log(recentArticles, meta, inHtmlImages, published)

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(props.className, " ").concat(moduleName, "_Container")
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Post"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].containerTwoSmallRight)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "Editor_Container Editor_MaxWidth"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
    className: "".concat(_AdminModule["default"].millerText),
    type: "text",
    placeholder: "Title",
    style: {
      fontStyle: 'italic',
      width: '100%',
      fontSize: '2rem',
      fontWeight: '700'
    },
    ref: titleRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: '1.125rem',
      marginBottom: '.25rem',
      color: '#cccccc',
      fontWeight: '600'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].millerText),
    style: {
      fontStyle: 'italic'
    }
  }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "/p?u=".concat((_ref2 = (_published$authorUser = published === null || published === void 0 ? void 0 : published.authorUsername) !== null && _published$authorUser !== void 0 ? _published$authorUser : props === null || props === void 0 || (_props$_loggedIn = props._loggedIn) === null || _props$_loggedIn === void 0 ? void 0 : _props$_loggedIn.username) !== null && _ref2 !== void 0 ? _ref2 : ''),
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "by:\xA0"), /*#__PURE__*/_react["default"].createElement("span", null, (_ref3 = (_published$authorUser2 = published === null || published === void 0 ? void 0 : published.authorUsername) !== null && _published$authorUser2 !== void 0 ? _published$authorUser2 : props === null || props === void 0 || (_props$_loggedIn2 = props._loggedIn) === null || _props$_loggedIn2 === void 0 ? void 0 : _props$_loggedIn2.username) !== null && _ref3 !== void 0 ? _ref3 : '')))), /*#__PURE__*/_react["default"].createElement("div", null, published !== null && published !== void 0 && published.title ? /*#__PURE__*/_react["default"].createElement("div", {
    style: (0, _defineProperty2["default"])((0, _defineProperty2["default"])({
      background: 'rgba(55, 55, 55, 1)',
      borderRadius: '.5rem',
      padding: '.25rem',
      width: '-webkit-fill-available',
      textAlign: 'center'
    }, "width", '100%'), "marginBottom", '.25rem')
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Read\xA0"), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "https://".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id))
  }, "\"", published === null || published === void 0 ? void 0 : published.title, "\""), /*#__PURE__*/_react["default"].createElement("span", null, "\xA0at\xA0"), /*#__PURE__*/_react["default"].createElement("span", {
    selectValue: "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "https://".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id)),
    onClick: _event.selectThisText
  }, "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id)))) : null), /*#__PURE__*/_react["default"].createElement("div", {
    id: "".concat(editorElementId),
    className: "Editor_Platform",
    style: {
      marginBottom: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, useDefaultText)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].metaContainer, " flex gap-p2"),
    style: {
      marginBottom: '.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      minWidth: '200px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "Featured Image"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Featured Image Url",
    style: {
      width: '100%',
      fontWeight: '600'
    },
    defaultValue: "".concat((_meta$featuredImg = meta === null || meta === void 0 ? void 0 : meta.featuredImg) !== null && _meta$featuredImg !== void 0 ? _meta$featuredImg : ''),
    onChange: handleSetFeaturedImage,
    ref: featuredImgUrlRef
  })), /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      backgroundImage: "url(".concat((_meta$featuredImg2 = meta === null || meta === void 0 ? void 0 : meta.featuredImg) !== null && _meta$featuredImg2 !== void 0 ? _meta$featuredImg2 : null),
      height: '100px',
      width: '100%',
      minWidth: '100px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    selectValue: "".concat((_meta$featuredImg3 = meta === null || meta === void 0 ? void 0 : meta.featuredImg) !== null && _meta$featuredImg3 !== void 0 ? _meta$featuredImg3 : null),
    onClick: _event.selectThisText,
    ref: featuredImgRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Groups"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "".concat(moduleName, "_groupingInput"),
    placeholder: "Post Groups",
    style: {
      width: '100%',
      fontWeight: '600'
    },
    onInput: handleUpdateInput,
    modif: "groups",
    ref: groupsRef
  })), (useGroups === null || useGroups === void 0 ? void 0 : useGroups.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, useGroups.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Tags"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "".concat(moduleName, "_useTagsInput"),
    placeholder: "Tags",
    style: {
      width: '100%',
      fontWeight: '600'
    },
    onInput: handleUpdateInput,
    modif: "tags",
    ref: tagsRef
  })), (useTags === null || useTags === void 0 ? void 0 : useTags.length) > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "tagContainer",
    style: {
      marginTop: '.25rem'
    }
  }, useTags.map(function (d) {
    return d !== '' ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "tagItem"
    }, d) : /*#__PURE__*/_react["default"].createElement("div", null);
  })) : null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].forceSafeBreak, " flex gap-p2")
  }, !published ? /*#__PURE__*/_react["default"].createElement("button", {
    className: "".concat(_AdminModule["default"].actionButton),
    onClick: handlePublishArticle
  }, "Post") : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      minWidth: '200px',
      maxWidth: '90%'
    },
    onClick: handlePublishArticle
  }, "Update"), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      minWidth: '200px',
      maxWidth: '90%'
    },
    onClick: handleDeleteArticle
  }, "Delete")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-p2",
    style: {
      background: 'rgb(55, 55, 55)',
      borderRadius: '1rem',
      padding: '0 2rem',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("label", null, "Approved"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    ref: approvedRef,
    defaultChecked: true,
    onChange: handleSetApproved
  }))), didPublishThisSession && published !== null && published !== void 0 && published.id ? /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: (0, _defineProperty2["default"])({
      background: 'rgba(55, 55, 55, 1)',
      borderRadius: '.5rem',
      padding: '.25rem',
      width: '-webkit-fill-available',
      textAlign: 'center'
    }, "width", '100%')
  }, "Your post was made successsfully. View at\xA0", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "https://".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id))
  }, "".concat(props.devLocal ? "".concat(props.devAddress, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id) : "".concat(props.domainUrl, "/ar?p=").concat(published === null || published === void 0 ? void 0 : published.id))))) : null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      fontWeight: '600'
    }
  }, "Recent Articles"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_AdminModule["default"].simpleList, " ").concat(_AdminModule["default"].simpleListShortText),
    style: {
      maxHeight: '200px',
      overflow: 'auto'
    }
  }, (recentArticles === null || recentArticles === void 0 ? void 0 : recentArticles.length) > 0 ? recentArticles.map(function (m, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        background: 'rgb(53, 53, 53)'
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        cursor: 'pointer'
      },
      article: m === null || m === void 0 ? void 0 : m.id,
      onClick: handleLoadArticle
    }, m.title), /*#__PURE__*/_react["default"].createElement("span", null, m.publish && !isNaN(Number(m.publish)) && !isNaN(new Date(Number(m.publish))) ? " - ".concat(new Date(Number(m.publish)).toDateString()) : ''));
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_StorageAdmin["default"], (0, _extends2["default"])({}, props, {
    vert: true
  }))))));
};
var _default = exports["default"] = Module;