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
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
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
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/reactive-layout/components/navigation.template.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var fixedWrapperStyle = {
  width: "100%",
  position: "fixed",
  top: "0"
};

var containerStyle = {
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
  textAlign: "center"
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
  fontWeight: "900",
  fontFamily: "Play"
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
        theme = _props.theme;


    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "div",
      { style: fixedWrapperStyle },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        "div",
        { style: containerStyle },
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement("div", null),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          "div",
          { style: rightWrapperStyle },
          navItems.map(function (item, index) {
            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "div",
              {
                style: navButtonStyle,
                key: "navItem" + index,
                id: index.toString(),
                onClick: function onClick() {
                  return _this2.scroll(index);
                },
                theme: theme
              },
              item.text
            );
          })
        ),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          "select",
          { style: selectStyle, onChange: this.scrollToMob },
          navItems.map(function (item, index) {
            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              "option",
              {
                style: navOptionStyle,
                key: "menuItem" + index,
                "data-link": item,
                value: item
              },
              item.text
            );
          })
        )
      )
    );
  };

  return Navigation;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

navigation_template_Navigation.propTypes = {
  navItems: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    link: prop_types_default.a.string.isRequired,
    text: prop_types_default.a.string.isRequired
  })).isRequired,
  id: prop_types_default.a.string.isRequired
};

/* harmony default export */ var navigation_template = (navigation_template_Navigation);
// EXTERNAL MODULE: ./src/reactive-layout/components/scroll-top/up.png
var up = __webpack_require__(2);
var up_default = /*#__PURE__*/__webpack_require__.n(up);

// CONCATENATED MODULE: ./src/reactive-layout/components/scroll-top/nav-buttons.component.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function nav_buttons_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function nav_buttons_component_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function nav_buttons_component_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var nav_buttons_component_containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  paddingBottom: "20px",
  width: "100%"
};

var leftScrollButtonStyle = {
  background: "url(" + up_default.a + ")",
  width: "48px",
  height: "48px",
  cursor: "pointer",
  margin: "0px 5px 0px 5px"
};

var rightScrollButtonStyle = _extends({}, leftScrollButtonStyle, {
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
      { style: nav_buttons_component_containerStyle },
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




var screen_layout_containerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",
  alignItems: "center",
  backgroundSize: "cover",
  overflow: "hidden"
};

var childBoxStyle = {
  flex: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw"
};

var screen_layout_Screen = function Screen(_ref) {
  var index = _ref.index,
      noNav = _ref.noNav,
      children = _ref.children,
      scrollNext = _ref.scrollNext,
      scrollPrev = _ref.scrollPrev,
      id = _ref.id;

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    "div",
    { style: screen_layout_containerStyle, id: id },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      "div",
      { style: childBoxStyle },
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
  id: prop_types_default.a.string.isRequired
};

/* harmony default export */ var screen_layout = (screen_layout_Screen);
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
      selectedId: "0"
    };
    return _this;
  }

  ReactiveLayout.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        navItems = _props.navItems,
        components = _props.components;

    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"],
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(navigation_template, {
        id: this.props.id,
        navItems: navItems,
        selectedId: this.state.selectedId,
        handleTabChange: this.handleTabChange
      }),
      navItems.map(function (navItem, index) {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          screen_layout,
          {
            key: _this2.props.id + index,
            id: _this2.props.id,
            index: index,
            scrollNext: _this2.scrollNext,
            scrollPrev: _this2.scrollPrev
          },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components[index])
        );
      })
    );
  };

  return ReactiveLayout;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

reactive_layout_component_ReactiveLayout.propTypes = {
  id: prop_types_default.a.string.isRequired,
  navItems: prop_types_default.a.array.isRequired,
  components: prop_types_default.a.array.isRequired
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