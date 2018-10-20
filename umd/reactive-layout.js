/*!
 * reactive-layout v1.0.0
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactiveLayout"] = factory(require("react"));
	else
		root["ReactiveLayout"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "up.318c6a34.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(1);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/reactive-layout/components/navigation.template.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var fixedContainerStyle = {
  width: "100%",
  position: "fixed",
  top: 0,
  zIndex: 1000
};

var centeredContainerStyle = {
  display: "flex",
  width: "100%",
  maxWidth: "1080px",
  justifyContent: "space-between",
  alignItems: "center",
  height: "45px",
  margin: "auto"
};

var rightWrapperStyle = {
  display: "flex"
};

var navOptionStyle = {
  textDecoration: "none",
  fontSize: "1em",
  width: "100px",
  textAlign: "center",
  backgroundColor: "transparent",
  color: "#000000"
};

var selectStyle = {
  backgroundColor: "transparent",
  marginRight: "10px",
  height: "30px",
  color: "white",
  display: "none"
};

var navButtonStyle = {
  cursor: "pointer",
  padding: "5px",
  fontWeight: "900"
};

var navigation_template_Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    var _temp, _this, _ret;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      slectedId: "1"
    }, _this.scroll = function (index) {
      var target = document.getElementById(_this.props.id).children[index + 1];
      _this.scrollTo(target);
    }, _this.scrollTo = function (el) {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop
      });
    }, _this.setLanguage = function (e) {
      return _this.props.setLanguage(e.currentTarget.dataset.lng);
    }, _this.handledivChange = function (newId, prevId, e) {
      _this.setState({
        selectedId: newId
      });
      _this.scroll(parseInt(newId));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Navigation.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        navItems = _props.navItems,
        theme = _props.theme,
        styles = _props.styles,
        isNavVisible = _props.isNavVisible,
        screenOptions = _props.screenOptions;

    var _fixedContainerStyle = _extends({}, fixedContainerStyle, styles.fixedContainer, {
      display: isNavVisible ? "flex" : "none"
    });
    var _navButtonStyle = _extends({}, navButtonStyle, styles.navButton);
    var _rightWrapperStyle = _extends({}, rightWrapperStyle, styles.rightWrapper, {
      display: screenOptions.isMobileSize ? "none" : "flex"
    });
    var _selectStyle = _extends({}, styles.selectStyle, selectStyle, {
      display: screenOptions.isMobileSize ? "block" : "none"
    });
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "div",
      { style: _fixedContainerStyle },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        "div",
        { style: centeredContainerStyle },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", null),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          "div",
          { style: _rightWrapperStyle },
          navItems.map(function (item, index) {
            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "div",
              {
                style: _navButtonStyle,
                key: "navItem" + index,
                id: index.toString(),
                onClick: function onClick() {
                  return _this2.scroll(index);
                },
                theme: theme
              },
              item
            );
          })
        ),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          "select",
          { style: _selectStyle, onChange: this.scrollToMob },
          navItems.map(function (item, index) {
            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "option",
              {
                style: navOptionStyle,
                key: "menuItem" + index,
                "data-link": item,
                value: item
              },
              item
            );
          })
        )
      )
    );
  };

  return Navigation;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

navigation_template_Navigation.propTypes = {
  navItems: prop_types_default.a.arrayOf(prop_types_default.a.string.isRequired).isRequired,
  id: prop_types_default.a.string.isRequired,
  styles: prop_types_default.a.object,
  screenOptions: prop_types_default.a.object.isRequired
};

/* harmony default export */ var navigation_template = (navigation_template_Navigation);
// EXTERNAL MODULE: ./src/reactive-layout/components/scroll-top/up.png
var up = __webpack_require__(2);
var up_default = /*#__PURE__*/__webpack_require__.n(up);

// CONCATENATED MODULE: ./src/reactive-layout/components/scroll-top/nav-buttons.component.js
var nav_buttons_component_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function nav_buttons_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function nav_buttons_component_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function nav_buttons_component_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  paddingBottom: "20px",
  width: "100%",
  backgoundColor: "transparent",
  position: "absolute",
  bottom: 0
};

var leftScrollButtonStyle = {
  background: "url(" + up_default.a + ")",
  width: "48px",
  height: "48px",
  cursor: "pointer",
  margin: "0px 5px 0px 5px"
};

var rightScrollButtonStyle = nav_buttons_component_extends({}, leftScrollButtonStyle, {
  transform: "rotate(180deg)"
});

var nav_buttons_component_NavButtons = function (_Component) {
  nav_buttons_component_inherits(NavButtons, _Component);

  function NavButtons() {
    var _temp, _this, _ret;

    nav_buttons_component_classCallCheck(this, NavButtons);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = nav_buttons_component_possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      totalLength: 0
    }, _this.NavButtons = function (e) {
      e.preventDefault();
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: 0
      });
    }, _this.scrollNextUp = function () {
      var target = document.getElementById(_this.props.id).children[_this.props.index];
      _this.scrollTo(target);
    }, _this.scrollNextDown = function () {
      var target = document.getElementById(_this.props.id).children[_this.props.index + 2];
      _this.scrollTo(target);
    }, _this.scrollTo = function (el) {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: el.offsetTop
      });
    }, _temp), nav_buttons_component_possibleConstructorReturn(_this, _ret);
  }

  NavButtons.prototype.componentDidMount = function componentDidMount() {
    var newValue = document.getElementById(this.props.id).childElementCount - 2;
    this.setState({ totalLength: newValue });
  };

  NavButtons.prototype.render = function render() {
    var isFirst = this.props.index === 0;
    var isLast = this.props.index === this.state.totalLength;
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "div",
      { style: containerStyle },
      !isFirst && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", { style: leftScrollButtonStyle, onClick: this.props.scrollPrev }),
      !isLast && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", { style: rightScrollButtonStyle, onClick: this.props.scrollNext })
    );
  };

  return NavButtons;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

nav_buttons_component_NavButtons.propTypes = {
  index: prop_types_default.a.number.isRequired,
  id: prop_types_default.a.string.isRequired
};

/* harmony default export */ var nav_buttons_component = (nav_buttons_component_NavButtons);
// CONCATENATED MODULE: ./src/reactive-layout/components/screen.layout.js
var screen_layout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var screen_layout_containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",
  alignItems: "center",
  backgroundSize: "cover",
  overflow: "hidden",
  position: "relative"
};

var childBoxStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
  // height: "100%",
};

var screen_layout_Screen = function Screen(_ref) {
  var index = _ref.index,
      noNav = _ref.noNav,
      children = _ref.children,
      scrollNext = _ref.scrollNext,
      scrollPrev = _ref.scrollPrev,
      id = _ref.id,
      bg = _ref.bg,
      screenOptions = _ref.screenOptions;

  var newStyles = {
    backgroundColor: bg.color || "transparent",
    backgroundImage: "url(" + bg.img + ")" || "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };
  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    "div",
    { style: screen_layout_containerStyle, id: id },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "div",
      { style: screen_layout_extends({}, childBoxStyle, newStyles) },
      children || external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", null)
    ),
    !noNav && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(nav_buttons_component, {
      index: index,
      scrollNext: scrollNext,
      scrollPrev: scrollPrev,
      id: id
    })
  );
};

screen_layout_Screen.propTypes = {
  index: prop_types_default.a.number.isRequired,
  noNav: prop_types_default.a.bool,
  children: prop_types_default.a.any,
  id: prop_types_default.a.string.isRequired,
  bg: prop_types_default.a.shape({
    img: prop_types_default.a.string,
    color: prop_types_default.a.string
  }),
  screenOptions: prop_types_default.a.object
};

/* harmony default export */ var screen_layout = (screen_layout_Screen);
// CONCATENATED MODULE: ./src/reactive-layout/services/compute-options.js
var computeOptions = function computeOptions() {
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight,
      isMobile = false;
  //eslint-disable-next-line
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }

  var opt = {
    isMobile: isMobile,
    isMobileSize: x <= 400,
    isTabletSize: 400 < x < 1080,
    isPcSize: x >= 1080,
    height: y,
    width: x
  };

  return opt;
};

/* harmony default export */ var compute_options = (computeOptions);
// CONCATENATED MODULE: ./src/reactive-layout/reactive-layout.component.js
function reactive_layout_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function reactive_layout_component_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function reactive_layout_component_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var reactive_layout_component_ReactiveLayout = function (_Component) {
  reactive_layout_component_inherits(ReactiveLayout, _Component);

  function ReactiveLayout() {
    reactive_layout_component_classCallCheck(this, ReactiveLayout);

    var _this = reactive_layout_component_possibleConstructorReturn(this, _Component.call(this));

    _this.handleTabChange = function (newId, prevId, e) {
      _this.setState({
        selectedId: newId
      });
      _this.scroll(parseInt(newId));
    };

    _this.scroll = function (index) {
      var target = document.getElementById(_this.props.id).children[index + 1];
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: target.offsetTop
      });
    };

    _this.scrollNext = function () {
      var selectedId = parseInt(_this.state.selectedId);
      var newId = selectedId + 1;
      _this.setState({
        selectedId: newId.toString()
      });
      _this.scroll(newId);
    };

    _this.scrollPrev = function () {
      var selectedId = parseInt(_this.state.selectedId);
      var newId = selectedId - 1;
      _this.setState({
        selectedId: newId.toString()
      });
      _this.scroll(newId);
    };

    _this.openDetails = function (index) {
      _this.setState({
        isDetailOpen: true,
        detailIndex: index
      });
    };

    _this.closeDetails = function () {
      _this.setState({
        isDetailOpen: false
      });
    };

    _this.submitForm = function (e) {
      e.preventDefault();
    };

    _this.state = {
      isDetailOpen: false,
      detailIndex: 0,
      selectedId: "0",
      screenOptions: compute_options()
    };
    return _this;
  }

  ReactiveLayout.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    window.addEventListener("resize", function () {
      _this2.setState({
        screenOptions: compute_options()
      });
    });
  };

  ReactiveLayout.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        navItems = _props.navItems,
        components = _props.components,
        navBarStyles = _props.navBarStyles,
        bgs = _props.bgs,
        isNavVisible = _props.isNavVisible;

    var addProps = {
      screenOptions: this.state.screenOptions
    };
    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"],
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(navigation_template, {
        id: this.props.id,
        isNavVisible: isNavVisible,
        navItems: navItems,
        selectedId: this.state.selectedId,
        handleTabChange: this.handleTabChange,
        styles: navBarStyles || {},
        screenOptions: this.state.screenOptions
      }),
      navItems.map(function (navItem, index) {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          screen_layout,
          {
            key: _this3.props.id + index,
            id: _this3.props.id,
            index: index,
            bg: bgs[index] || {},
            scrollNext: _this3.scrollNext,
            scrollPrev: _this3.scrollPrev,
            screenOptions: _this3.state.screenOptions
          },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components[index], addProps, null)
        );
      })
    );
  };

  return ReactiveLayout;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

reactive_layout_component_ReactiveLayout.defaultProps = {
  bgs: [],
  isNavVisible: true
};

reactive_layout_component_ReactiveLayout.propTypes = {
  id: prop_types_default.a.string.isRequired,
  isNavVisible: prop_types_default.a.bool.isRequired,
  navItems: prop_types_default.a.array.isRequired,
  components: prop_types_default.a.array.isRequired,
  navBarStyles: prop_types_default.a.object,
  bgs: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    img: prop_types_default.a.string,
    color: prop_types_default.a.string
  }))
};

/* harmony default export */ var reactive_layout_component = (reactive_layout_component_ReactiveLayout);
// CONCATENATED MODULE: ./src/index.js
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./exemple/exemple";

// ReactDOM.render(<App defaultLanguage="fr" />, document.getElementById("root"));


/* harmony default export */ var src = __webpack_exports__["default"] = (reactive_layout_component);

/***/ })
/******/ ])["default"];
});