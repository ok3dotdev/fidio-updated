"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _SurveyModule = _interopRequireDefault(require("./Survey.module.scss"));
var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));
var _mail = require("../utility/mail");
var _product = require("../ecommerce/product");
var _util = require("../util");
var _ecommerce = require("../utility/ecommerce");
var _defaults = require("../ecommerce/product/defaults");
var _Functions = require("../ecommerce/shop/Functions");
var _uuid = require("uuid");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // Survey.js
var Module = function Module(props) {
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    componentDidMount = _React$useState2[0],
    setComponentDidMount = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    initial = _React$useState4[0],
    setInitial = _React$useState4[1];
  var _React$useState5 = _react["default"].useState([]),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    backList = _React$useState6[0],
    setBackList = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(null),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    currentStage = _React$useState8[0],
    setCurrentStage = _React$useState8[1];
  var _React$useState9 = _react["default"].useState({}),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    answers = _React$useState10[0],
    setAnswers = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(null),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    next = _React$useState12[0],
    setNext = _React$useState12[1];
  var _React$useState13 = _react["default"].useState(null),
    _React$useState14 = (0, _slicedToArray2["default"])(_React$useState13, 2),
    back = _React$useState14[0],
    setBack = _React$useState14[1];
  var _React$useState15 = _react["default"].useState(null),
    _React$useState16 = (0, _slicedToArray2["default"])(_React$useState15, 2),
    animatingNext = _React$useState16[0],
    setAnimatingNext = _React$useState16[1];
  var _React$useState17 = _react["default"].useState(null),
    _React$useState18 = (0, _slicedToArray2["default"])(_React$useState17, 2),
    animatingBack = _React$useState18[0],
    setAnimatingBack = _React$useState18[1];
  var _React$useState19 = _react["default"].useState(false),
    _React$useState20 = (0, _slicedToArray2["default"])(_React$useState19, 2),
    keepCurrent = _React$useState20[0],
    setKeepCurrent = _React$useState20[1];
  var _React$useState21 = _react["default"].useState({}),
    _React$useState22 = (0, _slicedToArray2["default"])(_React$useState21, 2),
    pipelineObject = _React$useState22[0],
    setPipelineObject = _React$useState22[1];
  var _React$useState23 = _react["default"].useState({}),
    _React$useState24 = (0, _slicedToArray2["default"])(_React$useState23, 2),
    pipelineDbItem = _React$useState24[0],
    setPipelineDbItem = _React$useState24[1];
  var _React$useState25 = _react["default"].useState(false),
    _React$useState26 = (0, _slicedToArray2["default"])(_React$useState25, 2),
    submitted = _React$useState26[0],
    setSubmitted = _React$useState26[1];
  var _React$useState27 = _react["default"].useState(0),
    _React$useState28 = (0, _slicedToArray2["default"])(_React$useState27, 2),
    currentLineupEditing = _React$useState28[0],
    setCurrentLineupEditing = _React$useState28[1];
  var _React$useState29 = _react["default"].useState(_defaults.defaultDefinePriceCurrency),
    _React$useState30 = (0, _slicedToArray2["default"])(_React$useState29, 2),
    currentDefinePriceCurrency = _React$useState30[0],
    setCurrentDefinePriceCurrency = _React$useState30[1];
  var _React$useState31 = _react["default"].useState(new FormData()),
    _React$useState32 = (0, _slicedToArray2["default"])(_React$useState31, 2),
    imgCache = _React$useState32[0],
    setImgCache = _React$useState32[1];
  var _React$useState33 = _react["default"].useState([]),
    _React$useState34 = (0, _slicedToArray2["default"])(_React$useState33, 2),
    imgFor = _React$useState34[0],
    setImgFor = _React$useState34[1];
  var _React$useState35 = _react["default"].useState({}),
    _React$useState36 = (0, _slicedToArray2["default"])(_React$useState35, 2),
    errorLog = _React$useState36[0],
    setErrorLog = _React$useState36[1];
  var inputRef = _react["default"].useRef();
  var currentError = _react["default"].useRef();
  var useData = props.survey;
  var currentStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[currentStage];
  var nextStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[next];
  var backStageItem = useData === null || useData === void 0 ? void 0 : useData.stages[back];
  _react["default"].useEffect(function () {
    if (!componentDidMount) {
      if (props !== null && props !== void 0 && props.imgCache) {
        setImgCache(props.imgCache);
      }
      setComponentDidMount(true);
    }
  }, [componentDidMount, props === null || props === void 0 ? void 0 : props.imgCache]);
  var setAnswersProxy = function setAnswersProxy(useAnswers) {
    if (props.setSurveyState && props.surveyState) {
      var temp = props.surveyState;
      temp.answers = useAnswers;
      props.setSurveyState(temp);
    }
    setAnswers(useAnswers);
  };
  var setCurrentStageProxy = function setCurrentStageProxy(stage) {
    var _useData$stages$stage;
    if (props.setSurveyState && props.surveyState) {
      var temp = props.surveyState;
      temp.currentStage = stage;
      props.setSurveyState(temp);
    }
    setCurrentStage(stage);
    if (useData !== null && useData !== void 0 && useData.stages && useData.stages[stage] && typeof ((_useData$stages$stage = useData.stages[stage]) === null || _useData$stages$stage === void 0 ? void 0 : _useData$stages$stage.func) === 'function') {
      useData.stages[stage].func();
    }
  };
  _react["default"].useEffect(function () {
    var _useData$stages;
    if (!currentStage && useData !== null && useData !== void 0 && (_useData$stages = useData.stages) !== null && _useData$stages !== void 0 && _useData$stages.index) {
      setCurrentStageProxy('index');
    }
  }, [useData, currentStage]);
  var setPipelineDbItemProxy = function setPipelineDbItemProxy(item) {
    if (props.setSurveyState && props.surveyState) {
      var temp = props.surveyState;
      temp.pipelineDbItem = item;
      props.setSurveyState(temp);
    }
    setPipelineDbItem(item);
  };
  var setPipelineObjectProxy = function setPipelineObjectProxy(item) {
    if (props.setSurveyState && props.surveyState) {
      var temp = props.surveyState;
      temp.pipelineObject = item;
      props.setSurveyState(temp);
    }
    setPipelineObject(item);
  };
  _react["default"].useEffect(function () {
    var _props$surveyState, _props$surveyState2;
    if (useData !== null && useData !== void 0 && useData.pipelineDbItemDefault && !(0, _util.isObjectEmpty)(useData.pipelineDbItemDefault) && (0, _util.isObjectEmpty)(pipelineDbItem)) {
      setPipelineDbItemProxy(useData.pipelineDbItemDefault);
    } else if ((0, _util.isObjectEmpty)(pipelineDbItem) && props !== null && props !== void 0 && (_props$surveyState = props.surveyState) !== null && _props$surveyState !== void 0 && _props$surveyState.pipelineDbItem && !(0, _util.isObjectEmpty)(props === null || props === void 0 || (_props$surveyState2 = props.surveyState) === null || _props$surveyState2 === void 0 ? void 0 : _props$surveyState2.pipelineDbItem)) {
      setPipelineDbItemProxy(props.pipelineDbItem);
    }
  }, [pipelineDbItem, useData === null || useData === void 0 ? void 0 : useData.pipelineDbItemDefault]);
  var handleOptionClickConfirm = _react["default"].useCallback(function (e) {
    var _e$currentTarget, _e$currentTarget2, _ref, _inputRef$current$val, _inputRef$current, _e$current, _e$currentTarget3;
    var _goto = e === null || e === void 0 || (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.getAttribute('goto');
    var question = e === null || e === void 0 || (_e$currentTarget2 = e.currentTarget) === null || _e$currentTarget2 === void 0 ? void 0 : _e$currentTarget2.getAttribute('question');
    var value = (_ref = (_inputRef$current$val = inputRef === null || inputRef === void 0 || (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.value) !== null && _inputRef$current$val !== void 0 ? _inputRef$current$val : e === null || e === void 0 || (_e$current = e.current) === null || _e$current === void 0 ? void 0 : _e$current.value) !== null && _ref !== void 0 ? _ref : e === null || e === void 0 || (_e$currentTarget3 = e.currentTarget) === null || _e$currentTarget3 === void 0 ? void 0 : _e$currentTarget3.value;
    optionClick(_goto, question, value);
  });
  var handleOptionClick = _react["default"].useCallback(function (e) {
    var _e$currentTarget4, _e$currentTarget5, _e$currentTarget$getA, _e$currentTarget6;
    var _goto2 = e === null || e === void 0 || (_e$currentTarget4 = e.currentTarget) === null || _e$currentTarget4 === void 0 ? void 0 : _e$currentTarget4.getAttribute('goto');
    var question = e === null || e === void 0 || (_e$currentTarget5 = e.currentTarget) === null || _e$currentTarget5 === void 0 ? void 0 : _e$currentTarget5.getAttribute('question');
    var value = (_e$currentTarget$getA = e === null || e === void 0 || (_e$currentTarget6 = e.currentTarget) === null || _e$currentTarget6 === void 0 ? void 0 : _e$currentTarget6.getAttribute('value')) !== null && _e$currentTarget$getA !== void 0 ? _e$currentTarget$getA : e.currentTarget.value;
    optionClick(_goto2, question, value);
  });
  var doClear = function doClear(elements) {
    console.log('Do Clear', elements);
    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        var _elements$i, _elements$i2;
        console.log((_elements$i = elements[i]) === null || _elements$i === void 0 ? void 0 : _elements$i.getAttribute('surveyclear'));
        if ((_elements$i2 = elements[i]) !== null && _elements$i2 !== void 0 && _elements$i2.getAttribute('surveyclear')) {
          elements[i].value = '';
          console.log(elements[i]);
          if (elements[i].getAttribute('usedefault')) {
            elements[i].value = elements[i].getAttribute('usedefault');
          }
        }
      }
    }
  };
  var optionClick = function optionClick(_goto3, question, value) {
    var _currentStageItem$pip;
    console.log(currentStageItem);
    setErrorLog({}); // Reset Error Log every attempt
    if (currentError !== null && currentError !== void 0 && currentError.current) {
      currentError.current.innerHTML = '';
      currentError.current.style.opacity = 0;
    }
    if (currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.validation && typeof currentStageItem.validation === 'function') {
      var message = currentStageItem.validation(currentStageItem, value);
      console.log(message);
      if (message) {
        var temp = errorLog;
        temp[currentStage] = message;
        setErrorLog(temp);
        if (currentError !== null && currentError !== void 0 && currentError.current) {
          currentError.current.innerHTML = message;
          currentError.current.style.opacity = 1;
        }
        return null; // Prevent further inputs bad info
      }
    }
    if (currentStageItem !== null && currentStageItem !== void 0 && (_currentStageItem$pip = currentStageItem.pipeline) !== null && _currentStageItem$pip !== void 0 && _currentStageItem$pip.length) {
      for (var i = 0; i < currentStageItem.pipeline.length; i++) {
        var _currentStageItem$pip2, _currentStageItem$pip3;
        if ((_currentStageItem$pip2 = currentStageItem.pipeline[i]) !== null && _currentStageItem$pip2 !== void 0 && _currentStageItem$pip2.input && (_currentStageItem$pip3 = currentStageItem.pipeline[i]) !== null && _currentStageItem$pip3 !== void 0 && (_currentStageItem$pip3 = _currentStageItem$pip3.input) !== null && _currentStageItem$pip3 !== void 0 && _currentStageItem$pip3.validation && typeof currentStageItem.pipeline[i].input.validation === 'function') {
          var _currentStageItem$pip4;
          var message2 = (_currentStageItem$pip4 = currentStageItem.pipeline[i]) === null || _currentStageItem$pip4 === void 0 || (_currentStageItem$pip4 = _currentStageItem$pip4.input) === null || _currentStageItem$pip4 === void 0 ? void 0 : _currentStageItem$pip4.validation(currentStageItem.pipeline[i], pipelineObject[currentStageItem.pipeline[i].input["var"]]);
          if (message2) {
            console.log(message2);
            var _temp = errorLog;
            _temp[currentStage] = message2;
            setErrorLog(_temp);
            if (currentError !== null && currentError !== void 0 && currentError.current) {
              currentError.current.innerHTML = message2;
              currentError.current.style.opacity = 1;
            }
            return null;
          }
        }
      }
    }
    setNext(_goto3);
    setBack(currentStage);
    setTimeout(function () {
      setAnimatingNext(true);
    }, 100);
    if (inputRef !== null && inputRef !== void 0 && inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.placeholder = '';
      inputRef.current.select();
    }
    setTimeout(function () {
      setKeepCurrent(true);
      if (_goto3) {
        var _useData$stages$_goto;
        console.log(question);
        if (question) {
          var _temp2 = answers;
          if (!_temp2[currentStage]) {
            _temp2[currentStage] = {};
          }
          _temp2[currentStage].question = question;
          _temp2[currentStage].answer = value;
          setAnswersProxy(_temp2);
        }
        if (useData !== null && useData !== void 0 && (_useData$stages$_goto = useData.stages[_goto3]) !== null && _useData$stages$_goto !== void 0 && _useData$stages$_goto.input && inputRef !== null && inputRef !== void 0 && inputRef.current) {
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_goto3].input, 'default')) {
            inputRef.current.value = useData.stages[_goto3].input["default"];
          }
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_goto3].input, 'placeholder')) {
            inputRef.current.placeholder = useData.stages[_goto3].input.placeholder;
          }
        }
        setCurrentStageProxy(_goto3);
        setTimeout(function () {
          doClear(document.getElementsByTagName('textarea'));
          doClear(document.getElementsByTagName('input'));
        }, 100);
      }
      setTimeout(function () {
        setNext(null);
        setAnimatingNext(null);
        setKeepCurrent(false);
      }, 100);
    }, 450);
    updateBack(currentStage, true);
  };
  var updateBack = function updateBack(item, add) {
    var temp = backList;
    if (add && item) {
      temp.push(item);
    } else {
      temp.pop();
    }
    setBackList(temp);
  };
  var handleGoBack = _react["default"].useCallback(function (e) {
    if (backList.length > 0) {
      var _next = backList[backList.length - 1];
      console.log(_next);
      setBack(_next);
      setTimeout(function () {
        setAnimatingBack(true);
      }, 100);
      setTimeout(function () {
        var _useData$stages$_next;
        setKeepCurrent(true);
        if (_next) {
          setCurrentStageProxy(_next);
          setTimeout(function () {
            doClear(document.getElementsByTagName('textarea'));
            doClear(document.getElementsByTagName('input'));
          }, 1);
        }
        setTimeout(function () {
          setBack(null);
          setAnimatingBack(null);
          setKeepCurrent(false);
        }, 100);
        if (useData !== null && useData !== void 0 && (_useData$stages$_next = useData.stages[_next]) !== null && _useData$stages$_next !== void 0 && _useData$stages$_next.input && inputRef !== null && inputRef !== void 0 && inputRef.current) {
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_next].input, 'default')) {
            inputRef.current.value = useData.stages[_next].input["default"];
          }
          if (Object.prototype.hasOwnProperty.call(useData === null || useData === void 0 ? void 0 : useData.stages[_next].input, 'placeholder')) {
            inputRef.current.placeholder = useData.stages[_next].input.placeholder;
          }
        }
      }, 450);
      updateBack(null, false);
    }
  });
  _react["default"].useEffect(function () {
    if (!initial) {
      if (inputRef !== null && inputRef !== void 0 && inputRef.current && currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.input) {
        console.log('Running');
        setInitial(true);
        inputRef.current.value = '';
        inputRef.current.placeholder = '';
        inputRef.current.select();
        if (Object.prototype.hasOwnProperty.call(currentStageItem.input, 'default')) {
          inputRef.current.value = currentStageItem.input["default"];
        }
        if (Object.prototype.hasOwnProperty.call(currentStageItem.input, 'placeholder')) {
          inputRef.current.placeholder = currentStageItem.input.placeholder;
        }
      }
    }
  }, [initial, currentStageItem]);
  _react["default"].useEffect(function () {
    console.log(currentStageItem, submitted);
    if (currentStageItem !== null && currentStageItem !== void 0 && currentStageItem.submit || nextStageItem !== null && nextStageItem !== void 0 && nextStageItem.submit) {
      if (!submitted) {
        var f = /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ans) {
            var res;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!ans) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 3;
                  return (0, _mail.sendSurveyEmail)(props.apiUrl, props.domainKey, ans, useData.name, props._loggedIn);
                case 3:
                  res = _context.sent;
                  console.log(res);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function f(_x) {
            return _ref2.apply(this, arguments);
          };
        }();
        f(answers); // Schedule outbound email back to Businesses admin
        setSubmitted(true);
      }
    }
  }, [currentStageItem, submitted]);
  var addToObject = function addToObject(useVar, value) {
    var temp = _objectSpread({}, pipelineObject);
    temp[useVar] = value;
    console.log('Temp', temp);
    var temp2 = answers;
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
  var handleKeyDown = _react["default"].useCallback(function (e) {
    try {
      if (e) {
        var _e$current$value, _e$current2, _e$currentTarget7, _e$currentTarget8;
        var value = (_e$current$value = e === null || e === void 0 || (_e$current2 = e.current) === null || _e$current2 === void 0 ? void 0 : _e$current2.value) !== null && _e$current$value !== void 0 ? _e$current$value : e === null || e === void 0 || (_e$currentTarget7 = e.currentTarget) === null || _e$currentTarget7 === void 0 ? void 0 : _e$currentTarget7.value;
        if (e !== null && e !== void 0 && (_e$currentTarget8 = e.currentTarget) !== null && _e$currentTarget8 !== void 0 && _e$currentTarget8.getAttribute('pipeline')) {
          var _e$currentTarget9;
          console.log(value, 'Add to Obj');
          addToObject(e === null || e === void 0 || (_e$currentTarget9 = e.currentTarget) === null || _e$currentTarget9 === void 0 ? void 0 : _e$currentTarget9.getAttribute('var'), value);
        } else if (e.keyCode === 13) {
          var _e$currentTarget10, _e$currentTarget11;
          e.preventDefault();
          var _goto4 = e === null || e === void 0 || (_e$currentTarget10 = e.currentTarget) === null || _e$currentTarget10 === void 0 ? void 0 : _e$currentTarget10.getAttribute('goto');
          var question = e === null || e === void 0 || (_e$currentTarget11 = e.currentTarget) === null || _e$currentTarget11 === void 0 ? void 0 : _e$currentTarget11.getAttribute('question');
          console.log(value, question, _goto4);
          optionClick(_goto4, question, value);
        }
      }
    } catch (err) {
      console.log(err);
    }
  });
  var setOptionsMetaData = _react["default"].useCallback(function (e) {
    console.log(e.currentTarget.checked, e.currentTarget.getAttribute('option'));
    (0, _Functions.doSetOptionsMetaData)(e, pipelineDbItem === null || pipelineDbItem === void 0 ? void 0 : pipelineDbItem.detailmeta, pipelineDbItem, setPipelineDbItemProxy, null, currentLineupEditing, setCurrentLineupEditing);
  });
  var setCurrentPrice = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var _e$currentTarget12, _e$currentTarget15;
      if (e !== null && e !== void 0 && (_e$currentTarget12 = e.currentTarget) !== null && _e$currentTarget12 !== void 0 && _e$currentTarget12.getAttribute('pipeline')) {
        var _e$current$value2, _e$current3, _e$currentTarget13, _e$currentTarget14;
        var value = (_e$current$value2 = e === null || e === void 0 || (_e$current3 = e.current) === null || _e$current3 === void 0 ? void 0 : _e$current3.value) !== null && _e$current$value2 !== void 0 ? _e$current$value2 : e === null || e === void 0 || (_e$currentTarget13 = e.currentTarget) === null || _e$currentTarget13 === void 0 ? void 0 : _e$currentTarget13.value;
        console.log(value, 'Add to Obj');
        addToObject(e === null || e === void 0 || (_e$currentTarget14 = e.currentTarget) === null || _e$currentTarget14 === void 0 ? void 0 : _e$currentTarget14.getAttribute('var'), value);
      }
      var temp = _objectSpread({}, pipelineDbItem);
      if ((e === null || e === void 0 || (_e$currentTarget15 = e.currentTarget) === null || _e$currentTarget15 === void 0 ? void 0 : _e$currentTarget15.getAttribute('method')) === 'singleStyle') {
        var f = temp !== null && temp !== void 0 && temp.styles[0] ? 0 : -1;
        console.log(f, e.currentTarget.value, !isNaN(Number(e.currentTarget.value)));
        if (f > -1) {
          if (!isNaN(Number(e.currentTarget.value))) {
            if ((currentDefinePriceCurrency === null || currentDefinePriceCurrency === void 0 ? void 0 : currentDefinePriceCurrency.currency) === 'USD') {
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
  var setCurrentQuantity = _react["default"].useCallback(function (e) {
    if (e.currentTarget) {
      var _e$currentTarget16, _e$currentTarget19;
      if (e !== null && e !== void 0 && (_e$currentTarget16 = e.currentTarget) !== null && _e$currentTarget16 !== void 0 && _e$currentTarget16.getAttribute('pipeline')) {
        var _e$current$value3, _e$current4, _e$currentTarget17, _e$currentTarget18;
        var value = (_e$current$value3 = e === null || e === void 0 || (_e$current4 = e.current) === null || _e$current4 === void 0 ? void 0 : _e$current4.value) !== null && _e$current$value3 !== void 0 ? _e$current$value3 : e === null || e === void 0 || (_e$currentTarget17 = e.currentTarget) === null || _e$currentTarget17 === void 0 ? void 0 : _e$currentTarget17.value;
        console.log(value, 'Add to Obj');
        addToObject(e === null || e === void 0 || (_e$currentTarget18 = e.currentTarget) === null || _e$currentTarget18 === void 0 ? void 0 : _e$currentTarget18.getAttribute('var'), value);
      }
      var temp = _objectSpread({}, pipelineDbItem);
      if ((e === null || e === void 0 || (_e$currentTarget19 = e.currentTarget) === null || _e$currentTarget19 === void 0 ? void 0 : _e$currentTarget19.getAttribute('method')) === 'singleStyle') {
        var f = temp !== null && temp !== void 0 && temp.styles[0] ? 0 : -1;
        if (f > -1) {
          var f2 = 0;
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
  var handleNewFile = _react["default"].useCallback(function (e) {
    var _e$currentTarget20, _e$target;
    console.log(e, 'Handle New');
    var modif = e === null || e === void 0 || (_e$currentTarget20 = e.currentTarget) === null || _e$currentTarget20 === void 0 ? void 0 : _e$currentTarget20.getAttribute('selectmodif');
    console.log('Sel', modif);
    console.log(imgCache);
    var files = e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.files;
    var filesRenamed = Array.from(files).slice(0, files.length > 1 ? 1 : files.length).filter(function (m) {
      return m.type && _defaults.allowedTypes.indexOf(m.type) > -1;
    }).map(function (m) {
      var blob = m.slice(0, m.size, m.type);
      var ext = _defaults.allowedTypes[_defaults.allowedTypes.indexOf(m.type)].match(/\/([a-zA-Z0-9].*)/)[1];
      return new File([blob], "".concat((0, _uuid.v4)(), ".").concat(ext), {
        type: m.type
      });
    });
    console.log('Files Renamed', filesRenamed, imgCache);
    var useForm = imgCache;
    var imgForTemp = imgFor;
    if (filesRenamed) {
      filesRenamed.forEach(function (img) {
        useForm.append('image', img);
        fileToDataUrl(img, modif);
        var f = imgForTemp.findIndex(function (m) {
          return m.name === img.name;
        });
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
    if (props !== null && props !== void 0 && props.setImgCache) {
      props.setImgCache(useForm);
    }
    if (props.setSurveyState && props.surveyState) {
      var temp = props.surveyState;
      temp.imgFor = imgForTemp;
      props.setSurveyState(temp);
    }
  });
  var addTempFile = _react["default"].useCallback(function (e) {
    var _e$currentTarget21;
    console.log(e, 'Add Temp');
    if (e !== null && e !== void 0 && (_e$currentTarget21 = e.currentTarget) !== null && _e$currentTarget21 !== void 0 && _e$currentTarget21.getAttribute('modif')) {
      var _e$currentTarget22;
      var f = document.querySelector("input[selectmodif='".concat(e === null || e === void 0 || (_e$currentTarget22 = e.currentTarget) === null || _e$currentTarget22 === void 0 ? void 0 : _e$currentTarget22.getAttribute('modif'), "']"));
      if (f !== null && f !== void 0 && f.click) {
        f.click();
      }
    }
  });
  var fileToDataUrl = function fileToDataUrl(file, useVar) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        console.log(reader.result);
        document.querySelector("img[selectimg=".concat(useVar, "]")).style.backgroundImage = "url(".concat(reader.result, ")");
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
      reader.readAsDataURL(file);
    });
  };
  var resolveImg = function resolveImg(m) {
    var _props$cdn, _props$cdn2, _m$input2;
    var lastMatch;
    // Find last match in imgFor for most recent updated
    for (var i = 0; i < imgFor.length; i++) {
      var _m$input;
      if ((m === null || m === void 0 || (_m$input = m.input) === null || _m$input === void 0 ? void 0 : _m$input["var"]) === imgFor[i].modif) {
        lastMatch = imgFor[i].name;
      }
    }
    // Find only image types
    var imageEntries = (0, _toConsumableArray2["default"])(imgCache.entries()).filter(function (_ref3) {
      var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];
      return key === 'image';
    });
    var f;
    // Resolve last match for last used image file
    imageEntries.forEach(function (_ref5, index) {
      var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];
      if (lastMatch === value.name) {
        f = value;
      }
    });
    if (f) {
      fileToDataUrl(f, m.input["var"]);
    }
    var useFile = "".concat(m.input["var"] === 'featureImg' && bgImg ? "".concat(props === null || props === void 0 || (_props$cdn = props.cdn) === null || _props$cdn === void 0 ? void 0 : _props$cdn["static"], "/").concat(bgImg) : m.input["var"] === 'leadImg' && leadImg ? "".concat(props === null || props === void 0 || (_props$cdn2 = props.cdn) === null || _props$cdn2 === void 0 ? void 0 : _props$cdn2["static"], "/").concat(leadImg) : 'img/default/greythumb.jpg');
    return /*#__PURE__*/_react["default"].createElement("img", {
      style: {
        backgroundImage: "url(".concat(useFile, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      },
      selectimg: m === null || m === void 0 || (_m$input2 = m.input) === null || _m$input2 === void 0 ? void 0 : _m$input2["var"]
    });
  };
  var appendFormData = function appendFormData(filesRenamed) {
    var modif = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'lineup';
    var useId = arguments.length > 2 ? arguments[2] : undefined;
    var formData = imgCache;
    var tempImgNames = imgFor;
    if (filesRenamed) {
      filesRenamed.forEach(function (img) {
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
    if (props !== null && props !== void 0 && props.setImgCache) {
      props.setImgCache(formData);
    }
    if (props.setSurveyState && props.surveyState) {
      var temp = props.surveyState;
      temp.imgFor = tempImgNames;
      props.setSurveyState(temp);
    }
  };
  var resolveComponent = function resolveComponent(m) {
    if (m !== null && m !== void 0 && m.component && typeof m.component === 'function') {
      var UseComponent = m.component;
      return /*#__PURE__*/_react["default"].createElement(UseComponent, (0, _extends2["default"])({}, props, {
        m: m
      }));
    }
  };
  var resolveStageItem = function resolveStageItem(useStageItem, useAnimatingBack, useStyles, useAnimatingNext, useKeepCurrent, useStage) {
    var _useStageItem$bg, _useStageItem$color, _useStageItem$input, _useStageItem$input2, _useStageItem$input3, _useStageItem$input4, _useStageItem$input5, _useStageItem$input6, _useStageItem$confirm, _answers$useStage, _useStageItem$pipelin, _useStageItem$confirm2, _useStageItem$confirm3, _useStageItem$confirm4;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(_SurveyModule["default"][useStyles], " ").concat(_SurveyModule["default"].item, " ").concat(animatingNext && useAnimatingNext ? "".concat(_SurveyModule["default"][useAnimatingNext]) : null, " ").concat(animatingBack && useAnimatingBack ? "".concat(_SurveyModule["default"][useAnimatingBack]) : null, " ").concat(keepCurrent && useKeepCurrent ? "".concat(_SurveyModule["default"].keepCurrent, " ").concat(_SurveyModule["default"].backToOriginal) : null, " ").concat(useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.className, " survey_itemContainer"),
      style: {
        background: (_useStageItem$bg = useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.bg) !== null && _useStageItem$bg !== void 0 ? _useStageItem$bg : null,
        color: (_useStageItem$color = useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.color) !== null && _useStageItem$color !== void 0 ? _useStageItem$color : null
      }
    }, /*#__PURE__*/_react["default"].createElement("h1", {
      className: "".concat(_SurveyModule["default"].title, " survey_title")
    }, useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.label), (useStageItem === null || useStageItem === void 0 || (_useStageItem$input = useStageItem.input) === null || _useStageItem$input === void 0 ? void 0 : _useStageItem$input.type) === 'select' ? /*#__PURE__*/_react["default"].createElement("ul", {
      className: _SurveyModule["default"].survey__optionsList
    }, useStageItem === null || useStageItem === void 0 || (_useStageItem$input2 = useStageItem.input) === null || _useStageItem$input2 === void 0 ? void 0 : _useStageItem$input2.options.map(function (option) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: option.label
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: _SurveyModule["default"].survey__optionButton,
        onClick: handleOptionClick,
        "goto": option["goto"],
        label: option.label,
        question: useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.label,
        value: option.label
      }, option.label));
    })) : (useStageItem === null || useStageItem === void 0 || (_useStageItem$input3 = useStageItem.input) === null || _useStageItem$input3 === void 0 ? void 0 : _useStageItem$input3.type) === 'number' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
      type: "number",
      className: "".concat(_SurveyModule["default"].numberInput),
      defaultValue: useStageItem === null || useStageItem === void 0 || (_useStageItem$input4 = useStageItem.input) === null || _useStageItem$input4 === void 0 ? void 0 : _useStageItem$input4["default"],
      ref: inputRef
    })) : (useStageItem === null || useStageItem === void 0 || (_useStageItem$input5 = useStageItem.input) === null || _useStageItem$input5 === void 0 ? void 0 : _useStageItem$input5.type) === 'text' ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
      type: "text",
      className: "".concat(_SurveyModule["default"].textInput),
      placeholder: useStageItem === null || useStageItem === void 0 || (_useStageItem$input6 = useStageItem.input) === null || _useStageItem$input6 === void 0 ? void 0 : _useStageItem$input6["default"],
      minRows: 3,
      ref: inputRef,
      onKeyDown: handleKeyDown,
      "goto": useStageItem === null || useStageItem === void 0 || (_useStageItem$confirm = useStageItem.confirm) === null || _useStageItem$confirm === void 0 ? void 0 : _useStageItem$confirm["goto"],
      question: useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.label,
      defaultValue: (_answers$useStage = answers[useStage]) === null || _answers$useStage === void 0 ? void 0 : _answers$useStage.answer
    })) : useStageItem !== null && useStageItem !== void 0 && useStageItem.component && typeof useStageItem.component === 'function' ? /*#__PURE__*/_react["default"].createElement("div", null, resolveComponent(useStageItem)) : null, useStageItem !== null && useStageItem !== void 0 && (_useStageItem$pipelin = useStageItem.pipeline) !== null && _useStageItem$pipelin !== void 0 && _useStageItem$pipelin.map ? useStageItem.pipeline.map(function (m, i) {
      var _m$label, _m$input3, _m$input4, _m$input5, _m$input$rows, _m$input6, _m$input7, _m$input8, _m$input9, _m$input10, _m$input11, _m$input12, _pipelineDbItem$detai, _m$input13, _m$input14, _m$input15, _m$input16, _m$input17, _m$input18, _m$input19, _m$input20, _m$input21, _m$input22, _m$input23, _m$input24, _m$input25, _m$input26, _m$height, _m$width, _m$input27;
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i,
        className: "survey_pipelineItemContainer",
        style: {
          marginBottom: '.25rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("label", {
        style: {
          lineHeight: '1.5rem'
        }
      }, (_m$label = m === null || m === void 0 ? void 0 : m.label) !== null && _m$label !== void 0 ? _m$label : ''), /*#__PURE__*/_react["default"].createElement("div", null, (m === null || m === void 0 || (_m$input3 = m.input) === null || _m$input3 === void 0 ? void 0 : _m$input3.type) === 'text' ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(m === null || m === void 0 ? void 0 : m.className)
      }, /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
        type: "text",
        className: "".concat(_SurveyModule["default"].textInput),
        placeholder: m === null || m === void 0 || (_m$input4 = m.input) === null || _m$input4 === void 0 ? void 0 : _m$input4["default"],
        onInput: handleKeyDown,
        "var": m === null || m === void 0 || (_m$input5 = m.input) === null || _m$input5 === void 0 ? void 0 : _m$input5["var"],
        pipeline: "true",
        minRows: (_m$input$rows = m === null || m === void 0 || (_m$input6 = m.input) === null || _m$input6 === void 0 ? void 0 : _m$input6.rows) !== null && _m$input$rows !== void 0 ? _m$input$rows : 1,
        usedefault: pipelineObject[m === null || m === void 0 || (_m$input7 = m.input) === null || _m$input7 === void 0 ? void 0 : _m$input7["var"]],
        surveyclear: "true"
      })) : (m === null || m === void 0 || (_m$input8 = m.input) === null || _m$input8 === void 0 ? void 0 : _m$input8.type) === 'datetime-local' ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(m === null || m === void 0 ? void 0 : m.className)
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "datetime-local",
        placeholder: m === null || m === void 0 || (_m$input9 = m.input) === null || _m$input9 === void 0 ? void 0 : _m$input9["default"],
        onInput: handleKeyDown,
        "var": m === null || m === void 0 || (_m$input10 = m.input) === null || _m$input10 === void 0 ? void 0 : _m$input10["var"],
        pipeline: "true",
        surveyclear: "true",
        usedefault: pipelineObject[m === null || m === void 0 || (_m$input11 = m.input) === null || _m$input11 === void 0 ? void 0 : _m$input11["var"]]
      })) : (m === null || m === void 0 || (_m$input12 = m.input) === null || _m$input12 === void 0 ? void 0 : _m$input12.type) === 'lineup' ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(m === null || m === void 0 ? void 0 : m.className)
      }, /*#__PURE__*/_react["default"].createElement(_product.Lineup, (0, _extends2["default"])({}, props, {
        product: pipelineDbItem,
        editing: pipelineDbItem,
        editingOptionsMeta: (_pipelineDbItem$detai = pipelineDbItem === null || pipelineDbItem === void 0 ? void 0 : pipelineDbItem.detailmeta) !== null && _pipelineDbItem$detai !== void 0 ? _pipelineDbItem$detai : null,
        setOptionsMetaData: setOptionsMetaData,
        currentLineupEditing: currentLineupEditing,
        setCurrentLineupEditing: setCurrentLineupEditing,
        appendFormData: appendFormData
      }))) : (m === null || m === void 0 || (_m$input13 = m.input) === null || _m$input13 === void 0 ? void 0 : _m$input13.type) === 'price' ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(m === null || m === void 0 ? void 0 : m.className, " flex gap-p2")
      }, /*#__PURE__*/_react["default"].createElement("span", null, "$"), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        style: {
          width: '100%'
        },
        onChange: setCurrentPrice,
        "var": m === null || m === void 0 || (_m$input14 = m.input) === null || _m$input14 === void 0 ? void 0 : _m$input14["var"],
        pipeline: "true",
        surveyclear: "true",
        method: m === null || m === void 0 || (_m$input15 = m.input) === null || _m$input15 === void 0 ? void 0 : _m$input15.method,
        usedefault: !(0, _util.isObjectEmpty)(pipelineObject) && Object.prototype.hasOwnProperty.call(pipelineObject, [m === null || m === void 0 || (_m$input16 = m.input) === null || _m$input16 === void 0 ? void 0 : _m$input16["var"]]) && pipelineObject[m === null || m === void 0 || (_m$input17 = m.input) === null || _m$input17 === void 0 ? void 0 : _m$input17["var"]] !== null ? _ecommerce.westernMoneyFormat.format(pipelineObject[m === null || m === void 0 || (_m$input18 = m.input) === null || _m$input18 === void 0 ? void 0 : _m$input18["var"]]) : '10.00'
      }))) : (m === null || m === void 0 || (_m$input19 = m.input) === null || _m$input19 === void 0 ? void 0 : _m$input19.type) === 'quantity' ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(m === null || m === void 0 ? void 0 : m.className, " flex gap-p2")
      }, /*#__PURE__*/_react["default"].createElement("span", null, "Qty"), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        style: {
          width: '100%'
        },
        onChange: setCurrentQuantity,
        "var": m === null || m === void 0 || (_m$input20 = m.input) === null || _m$input20 === void 0 ? void 0 : _m$input20["var"],
        pipeline: "true",
        surveyclear: "true",
        method: m === null || m === void 0 || (_m$input21 = m.input) === null || _m$input21 === void 0 ? void 0 : _m$input21.method,
        usedefault: !(0, _util.isObjectEmpty)(pipelineObject) && Object.prototype.hasOwnProperty.call(pipelineObject, [m === null || m === void 0 || (_m$input22 = m.input) === null || _m$input22 === void 0 ? void 0 : _m$input22["var"]]) && pipelineObject[m === null || m === void 0 || (_m$input23 = m.input) === null || _m$input23 === void 0 ? void 0 : _m$input23["var"]] !== null ? pipelineObject[m === null || m === void 0 || (_m$input24 = m.input) === null || _m$input24 === void 0 ? void 0 : _m$input24["var"]] : '100'
      }))) : (m === null || m === void 0 || (_m$input25 = m.input) === null || _m$input25 === void 0 ? void 0 : _m$input25.type) === 'image' && ['leadImg', 'featureImg'].indexOf(m === null || m === void 0 || (_m$input26 = m.input) === null || _m$input26 === void 0 ? void 0 : _m$input26["var"]) > -1 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(m === null || m === void 0 ? void 0 : m.className)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: (_m$height = m === null || m === void 0 ? void 0 : m.height) !== null && _m$height !== void 0 ? _m$height : '200px',
          width: (_m$width = m === null || m === void 0 ? void 0 : m.width) !== null && _m$width !== void 0 ? _m$width : '200px'
        }
      }, resolveImg(m)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex gap-p2 ".concat(_SurveyModule["default"].pseudoButton),
        style: {
          alignItems: 'center',
          fontSize: '.8rem',
          marginTop: '.5rem'
        },
        onClick: addTempFile,
        modif: m === null || m === void 0 || (_m$input27 = m.input) === null || _m$input27 === void 0 ? void 0 : _m$input27["var"]
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "material-icons",
        style: {
          alignSelf: 'center'
        }
      }, "add"), /*#__PURE__*/_react["default"].createElement("div", null, m === null || m === void 0 ? void 0 : m.note)), /*#__PURE__*/_react["default"].createElement("input", {
        style: {
          display: 'none'
        },
        type: "file",
        onChange: handleNewFile,
        selectmodif: m.input["var"]
      })) : m !== null && m !== void 0 && m.component ? /*#__PURE__*/_react["default"].createElement("div", null, resolveComponent(m)) : null));
    }) : null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "survey_errorContainer"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "error",
      ref: currentError,
      style: {
        opacity: 0
      }
    }, errorLog[useStage])), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex survey_confirmBackButtonContainer",
      style: {
        marginTop: '.5rem',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "".concat(_SurveyModule["default"].confirmButton, " survey_confirmButton"),
      onClick: handleOptionClickConfirm,
      "goto": useStageItem === null || useStageItem === void 0 || (_useStageItem$confirm2 = useStageItem.confirm) === null || _useStageItem$confirm2 === void 0 ? void 0 : _useStageItem$confirm2["goto"],
      label: useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.label,
      value: 'confirm',
      question: useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.label,
      style: {
        opacity: useStageItem !== null && useStageItem !== void 0 && useStageItem.confirm ? 1 : 0,
        transition: 0
      }
    }, useStageItem !== null && useStageItem !== void 0 && (_useStageItem$confirm3 = useStageItem.confirm) !== null && _useStageItem$confirm3 !== void 0 && _useStageItem$confirm3.label ? useStageItem === null || useStageItem === void 0 ? void 0 : useStageItem.confirm.label : (useStageItem === null || useStageItem === void 0 || (_useStageItem$confirm4 = useStageItem.confirm) === null || _useStageItem$confirm4 === void 0 ? void 0 : _useStageItem$confirm4["goto"]) === 'end' ? 'Confirm' : 'Next'), backList && backList.length > 0 && !(useStageItem !== null && useStageItem !== void 0 && useStageItem.submit) && !submitted ? /*#__PURE__*/_react["default"].createElement("button", {
      onClick: handleGoBack,
      className: "".concat(_SurveyModule["default"].backButton, " survey_backButton"),
      style: {
        transition: 0
      }
    }, "Back") : null));
  };
  var bgImg = pipelineDbItem !== null && pipelineDbItem !== void 0 && pipelineDbItem.images ? pipelineDbItem.images.find(function (m) {
    return m === null || m === void 0 ? void 0 : m.bgImg;
  }) : null;
  var leadImg = pipelineDbItem.images ? pipelineDbItem.images.find(function (m) {
    return m === null || m === void 0 ? void 0 : m.leadImg;
  }) : null;
  console.log(currentStage, answers, backList, next, submitted, props, currentStageItem);
  console.log('Pipeline Object', pipelineObject, pipelineDbItem, back, next);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _SurveyModule["default"].survey__container,
    style: {
      height: props !== null && props !== void 0 && props.height ? "".concat(props.height, "px") : '100vh'
    }
  }, back ? resolveStageItem(backStageItem, 'animatingBackBack', 'backItem', null, null, back) : null, resolveStageItem(currentStageItem, 'animatingBackCurrent', 'currentItem', 'animatingNextCurrent', true, currentStage), next ? resolveStageItem(nextStageItem, null, 'nextItem', 'animatingNextNext', null, next) : null);
};
var _default = exports["default"] = Module;