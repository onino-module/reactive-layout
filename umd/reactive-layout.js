/*!
 * reactive-layout v1.0.0
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["ReactiveLayout"] = factory(require("react"), require("styled-components"));
	else
		root["ReactiveLayout"] = factory(root["React"], root["styled"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
  module.exports = __webpack_require__(19)();
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export ACTIVE */
/* unused harmony export ALIGN_LEFT */
/* unused harmony export ALIGN_RIGHT */
/* unused harmony export CONDENSED */
/* unused harmony export DARK */
/* unused harmony export DISABLED */
/* unused harmony export FILL */
/* unused harmony export FIXED */
/* unused harmony export FIXED_TOP */
/* unused harmony export INLINE */
/* unused harmony export INTERACTIVE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LARGE; });
/* unused harmony export LOADING */
/* unused harmony export MINIMAL */
/* unused harmony export MULTILINE */
/* unused harmony export ROUND */
/* unused harmony export SMALL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return VERTICAL; });
/* unused harmony export ELEVATION_0 */
/* unused harmony export ELEVATION_1 */
/* unused harmony export ELEVATION_2 */
/* unused harmony export ELEVATION_3 */
/* unused harmony export ELEVATION_4 */
/* unused harmony export INTENT_PRIMARY */
/* unused harmony export INTENT_SUCCESS */
/* unused harmony export INTENT_WARNING */
/* unused harmony export INTENT_DANGER */
/* unused harmony export FOCUS_DISABLED */
/* unused harmony export UI_TEXT */
/* unused harmony export RUNNING_TEXT */
/* unused harmony export MONOSPACE_TEXT */
/* unused harmony export TEXT_LARGE */
/* unused harmony export TEXT_SMALL */
/* unused harmony export TEXT_MUTED */
/* unused harmony export TEXT_DISABLED */
/* unused harmony export TEXT_OVERFLOW_ELLIPSIS */
/* unused harmony export BLOCKQUOTE */
/* unused harmony export CODE */
/* unused harmony export CODE_BLOCK */
/* unused harmony export HEADING */
/* unused harmony export LIST */
/* unused harmony export LIST_UNSTYLED */
/* unused harmony export RTL */
/* unused harmony export ALERT */
/* unused harmony export ALERT_BODY */
/* unused harmony export ALERT_CONTENTS */
/* unused harmony export ALERT_FOOTER */
/* unused harmony export BREADCRUMB */
/* unused harmony export BREADCRUMB_CURRENT */
/* unused harmony export BREADCRUMBS */
/* unused harmony export BREADCRUMBS_COLLAPSED */
/* unused harmony export BUTTON */
/* unused harmony export BUTTON_GROUP */
/* unused harmony export BUTTON_SPINNER */
/* unused harmony export BUTTON_TEXT */
/* unused harmony export CALLOUT */
/* unused harmony export CALLOUT_ICON */
/* unused harmony export CARD */
/* unused harmony export COLLAPSE */
/* unused harmony export COLLAPSE_BODY */
/* unused harmony export COLLAPSIBLE_LIST */
/* unused harmony export CONTEXT_MENU */
/* unused harmony export CONTEXT_MENU_POPOVER_TARGET */
/* unused harmony export CONTROL_GROUP */
/* unused harmony export DIALOG */
/* unused harmony export DIALOG_CONTAINER */
/* unused harmony export DIALOG_BODY */
/* unused harmony export DIALOG_CLOSE_BUTTON */
/* unused harmony export DIALOG_FOOTER */
/* unused harmony export DIALOG_FOOTER_ACTIONS */
/* unused harmony export DIALOG_HEADER */
/* unused harmony export DIVIDER */
/* unused harmony export EDITABLE_TEXT */
/* unused harmony export EDITABLE_TEXT_CONTENT */
/* unused harmony export EDITABLE_TEXT_EDITING */
/* unused harmony export EDITABLE_TEXT_INPUT */
/* unused harmony export EDITABLE_TEXT_PLACEHOLDER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FLEX_EXPANDER; });
/* unused harmony export HTML_SELECT */
/* unused harmony export SELECT */
/* unused harmony export HTML_TABLE */
/* unused harmony export HTML_TABLE_STRIPED */
/* unused harmony export HTML_TABLE_BORDERED */
/* unused harmony export INPUT */
/* unused harmony export INPUT_GHOST */
/* unused harmony export INPUT_GROUP */
/* unused harmony export INPUT_ACTION */
/* unused harmony export CONTROL */
/* unused harmony export CONTROL_INDICATOR */
/* unused harmony export CHECKBOX */
/* unused harmony export RADIO */
/* unused harmony export SWITCH */
/* unused harmony export FILE_INPUT */
/* unused harmony export FILE_UPLOAD_INPUT */
/* unused harmony export KEY */
/* unused harmony export KEY_COMBO */
/* unused harmony export MODIFIER_KEY */
/* unused harmony export HOTKEY */
/* unused harmony export HOTKEY_LABEL */
/* unused harmony export HOTKEY_COLUMN */
/* unused harmony export HOTKEY_DIALOG */
/* unused harmony export LABEL */
/* unused harmony export FORM_GROUP */
/* unused harmony export FORM_CONTENT */
/* unused harmony export FORM_HELPER_TEXT */
/* unused harmony export MENU */
/* unused harmony export MENU_ITEM */
/* unused harmony export MENU_ITEM_LABEL */
/* unused harmony export MENU_SUBMENU */
/* unused harmony export MENU_DIVIDER */
/* unused harmony export MENU_HEADER */
/* unused harmony export NAVBAR */
/* unused harmony export NAVBAR_GROUP */
/* unused harmony export NAVBAR_HEADING */
/* unused harmony export NAVBAR_DIVIDER */
/* unused harmony export NON_IDEAL_STATE */
/* unused harmony export NON_IDEAL_STATE_VISUAL */
/* unused harmony export NUMERIC_INPUT */
/* unused harmony export OVERFLOW_LIST */
/* unused harmony export OVERFLOW_LIST_SPACER */
/* unused harmony export OVERLAY */
/* unused harmony export OVERLAY_BACKDROP */
/* unused harmony export OVERLAY_CONTENT */
/* unused harmony export OVERLAY_INLINE */
/* unused harmony export OVERLAY_OPEN */
/* unused harmony export OVERLAY_SCROLL_CONTAINER */
/* unused harmony export PANEL_STACK */
/* unused harmony export PANEL_STACK_HEADER */
/* unused harmony export PANEL_STACK_HEADER_BACK */
/* unused harmony export PANEL_STACK_VIEW */
/* unused harmony export POPOVER */
/* unused harmony export POPOVER_ARROW */
/* unused harmony export POPOVER_BACKDROP */
/* unused harmony export POPOVER_CONTENT */
/* unused harmony export POPOVER_CONTENT_SIZING */
/* unused harmony export POPOVER_DISMISS */
/* unused harmony export POPOVER_DISMISS_OVERRIDE */
/* unused harmony export POPOVER_OPEN */
/* unused harmony export POPOVER_TARGET */
/* unused harmony export POPOVER_WRAPPER */
/* unused harmony export TRANSITION_CONTAINER */
/* unused harmony export PROGRESS_BAR */
/* unused harmony export PROGRESS_METER */
/* unused harmony export PROGRESS_NO_STRIPES */
/* unused harmony export PROGRESS_NO_ANIMATION */
/* unused harmony export PORTAL */
/* unused harmony export SKELETON */
/* unused harmony export SLIDER */
/* unused harmony export SLIDER_AXIS */
/* unused harmony export SLIDER_HANDLE */
/* unused harmony export SLIDER_LABEL */
/* unused harmony export SLIDER_TRACK */
/* unused harmony export SLIDER_PROGRESS */
/* unused harmony export START */
/* unused harmony export END */
/* unused harmony export SPINNER */
/* unused harmony export SPINNER_ANIMATION */
/* unused harmony export SPINNER_HEAD */
/* unused harmony export SPINNER_NO_SPIN */
/* unused harmony export SPINNER_TRACK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TAB_INDICATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TAB_INDICATOR_WRAPPER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TAB_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TAB_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TABS; });
/* unused harmony export TAG */
/* unused harmony export TAG_REMOVE */
/* unused harmony export TAG_INPUT */
/* unused harmony export TAG_INPUT_ICON */
/* unused harmony export TAG_INPUT_VALUES */
/* unused harmony export TOAST */
/* unused harmony export TOAST_CONTAINER */
/* unused harmony export TOAST_MESSAGE */
/* unused harmony export TOOLTIP */
/* unused harmony export TOOLTIP_INDICATOR */
/* unused harmony export TREE */
/* unused harmony export TREE_NODE */
/* unused harmony export TREE_NODE_CARET */
/* unused harmony export TREE_NODE_CARET_CLOSED */
/* unused harmony export TREE_NODE_CARET_NONE */
/* unused harmony export TREE_NODE_CARET_OPEN */
/* unused harmony export TREE_NODE_CONTENT */
/* unused harmony export TREE_NODE_EXPANDED */
/* unused harmony export TREE_NODE_ICON */
/* unused harmony export TREE_NODE_LABEL */
/* unused harmony export TREE_NODE_LIST */
/* unused harmony export TREE_NODE_SECONDARY_LABEL */
/* unused harmony export TREE_NODE_SELECTED */
/* unused harmony export TREE_ROOT */
/* unused harmony export ICON */
/* unused harmony export ICON_STANDARD */
/* unused harmony export ICON_LARGE */
/* unused harmony export getClassNamespace */
/* unused harmony export alignmentClass */
/* unused harmony export elevationClass */
/* unused harmony export iconClass */
/* unused harmony export intentClass */
/* harmony import */ var _alignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _elevation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _intent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



var NS = process.env.BLUEPRINT_NAMESPACE || "bp3";
// modifiers
var ACTIVE = NS + "-active";
var ALIGN_LEFT = NS + "-align-left";
var ALIGN_RIGHT = NS + "-align-right";
var CONDENSED = NS + "-condensed";
var DARK = NS + "-dark";
var DISABLED = NS + "-disabled";
var FILL = NS + "-fill";
var FIXED = NS + "-fixed";
var FIXED_TOP = NS + "-fixed-top";
var INLINE = NS + "-inline";
var INTERACTIVE = NS + "-interactive";
var LARGE = NS + "-large";
var LOADING = NS + "-loading";
var MINIMAL = NS + "-minimal";
var MULTILINE = NS + "-multiline";
var ROUND = NS + "-round";
var SMALL = NS + "-small";
var VERTICAL = NS + "-vertical";
var ELEVATION_0 = elevationClass(_elevation__WEBPACK_IMPORTED_MODULE_1__[/* Elevation */ "a"].ZERO);
var ELEVATION_1 = elevationClass(_elevation__WEBPACK_IMPORTED_MODULE_1__[/* Elevation */ "a"].ONE);
var ELEVATION_2 = elevationClass(_elevation__WEBPACK_IMPORTED_MODULE_1__[/* Elevation */ "a"].TWO);
var ELEVATION_3 = elevationClass(_elevation__WEBPACK_IMPORTED_MODULE_1__[/* Elevation */ "a"].THREE);
var ELEVATION_4 = elevationClass(_elevation__WEBPACK_IMPORTED_MODULE_1__[/* Elevation */ "a"].FOUR);
var INTENT_PRIMARY = intentClass(_intent__WEBPACK_IMPORTED_MODULE_2__[/* Intent */ "a"].PRIMARY);
var INTENT_SUCCESS = intentClass(_intent__WEBPACK_IMPORTED_MODULE_2__[/* Intent */ "a"].SUCCESS);
var INTENT_WARNING = intentClass(_intent__WEBPACK_IMPORTED_MODULE_2__[/* Intent */ "a"].WARNING);
var INTENT_DANGER = intentClass(_intent__WEBPACK_IMPORTED_MODULE_2__[/* Intent */ "a"].DANGER);
var FOCUS_DISABLED = NS + "-focus-disabled";
// text utilities
var UI_TEXT = NS + "-ui-text";
var RUNNING_TEXT = NS + "-running-text";
var MONOSPACE_TEXT = NS + "-monospace-text";
var TEXT_LARGE = NS + "-text-large";
var TEXT_SMALL = NS + "-text-small";
var TEXT_MUTED = NS + "-text-muted";
var TEXT_DISABLED = NS + "-text-disabled";
var TEXT_OVERFLOW_ELLIPSIS = NS + "-text-overflow-ellipsis";
// textual elements
var BLOCKQUOTE = NS + "-blockquote";
var CODE = NS + "-code";
var CODE_BLOCK = NS + "-code-block";
var HEADING = NS + "-heading";
var LIST = NS + "-list";
var LIST_UNSTYLED = NS + "-list-unstyled";
var RTL = NS + "-rtl";
// components
var ALERT = NS + "-alert";
var ALERT_BODY = ALERT + "-body";
var ALERT_CONTENTS = ALERT + "-contents";
var ALERT_FOOTER = ALERT + "-footer";
var BREADCRUMB = NS + "-breadcrumb";
var BREADCRUMB_CURRENT = BREADCRUMB + "-current";
var BREADCRUMBS = BREADCRUMB + "s";
var BREADCRUMBS_COLLAPSED = BREADCRUMB + "s-collapsed";
var BUTTON = NS + "-button";
var BUTTON_GROUP = BUTTON + "-group";
var BUTTON_SPINNER = BUTTON + "-spinner";
var BUTTON_TEXT = BUTTON + "-text";
var CALLOUT = NS + "-callout";
var CALLOUT_ICON = CALLOUT + "-icon";
var CARD = NS + "-card";
var COLLAPSE = NS + "-collapse";
var COLLAPSE_BODY = COLLAPSE + "-body";
var COLLAPSIBLE_LIST = NS + "-collapse-list";
var CONTEXT_MENU = NS + "-context-menu";
var CONTEXT_MENU_POPOVER_TARGET = CONTEXT_MENU + "-popover-target";
var CONTROL_GROUP = NS + "-control-group";
var DIALOG = NS + "-dialog";
var DIALOG_CONTAINER = DIALOG + "-container";
var DIALOG_BODY = DIALOG + "-body";
var DIALOG_CLOSE_BUTTON = DIALOG + "-close-button";
var DIALOG_FOOTER = DIALOG + "-footer";
var DIALOG_FOOTER_ACTIONS = DIALOG + "-footer-actions";
var DIALOG_HEADER = DIALOG + "-header";
var DIVIDER = NS + "-divider";
var EDITABLE_TEXT = NS + "-editable-text";
var EDITABLE_TEXT_CONTENT = EDITABLE_TEXT + "-content";
var EDITABLE_TEXT_EDITING = EDITABLE_TEXT + "-editing";
var EDITABLE_TEXT_INPUT = EDITABLE_TEXT + "-input";
var EDITABLE_TEXT_PLACEHOLDER = EDITABLE_TEXT + "-placeholder";
var FLEX_EXPANDER = NS + "-flex-expander";
var HTML_SELECT = NS + "-html-select";
/** @deprecated prefer `<HTMLSelect>` component */
var SELECT = NS + "-select";
var HTML_TABLE = NS + "-html-table";
var HTML_TABLE_STRIPED = HTML_TABLE + "-striped";
var HTML_TABLE_BORDERED = HTML_TABLE + "-bordered";
var INPUT = NS + "-input";
var INPUT_GHOST = INPUT + "-ghost";
var INPUT_GROUP = INPUT + "-group";
var INPUT_ACTION = INPUT + "-action";
var CONTROL = NS + "-control";
var CONTROL_INDICATOR = CONTROL + "-indicator";
var CHECKBOX = NS + "-checkbox";
var RADIO = NS + "-radio";
var SWITCH = NS + "-switch";
var FILE_INPUT = NS + "-file-input";
var FILE_UPLOAD_INPUT = NS + "-file-upload-input";
var KEY = NS + "-key";
var KEY_COMBO = KEY + "-combo";
var MODIFIER_KEY = NS + "-modifier-key";
var HOTKEY = NS + "-hotkey";
var HOTKEY_LABEL = HOTKEY + "-label";
var HOTKEY_COLUMN = HOTKEY + "-column";
var HOTKEY_DIALOG = HOTKEY + "-dialog";
var LABEL = NS + "-label";
var FORM_GROUP = NS + "-form-group";
var FORM_CONTENT = NS + "-form-content";
var FORM_HELPER_TEXT = NS + "-form-helper-text";
var MENU = NS + "-menu";
var MENU_ITEM = MENU + "-item";
var MENU_ITEM_LABEL = MENU_ITEM + "-label";
var MENU_SUBMENU = NS + "-submenu";
var MENU_DIVIDER = MENU + "-divider";
var MENU_HEADER = MENU + "-header";
var NAVBAR = NS + "-navbar";
var NAVBAR_GROUP = NAVBAR + "-group";
var NAVBAR_HEADING = NAVBAR + "-heading";
var NAVBAR_DIVIDER = NAVBAR + "-divider";
var NON_IDEAL_STATE = NS + "-non-ideal-state";
var NON_IDEAL_STATE_VISUAL = NON_IDEAL_STATE + "-visual";
var NUMERIC_INPUT = NS + "-numeric-input";
var OVERFLOW_LIST = NS + "-overflow-list";
var OVERFLOW_LIST_SPACER = OVERFLOW_LIST + "-spacer";
var OVERLAY = NS + "-overlay";
var OVERLAY_BACKDROP = OVERLAY + "-backdrop";
var OVERLAY_CONTENT = OVERLAY + "-content";
var OVERLAY_INLINE = OVERLAY + "-inline";
var OVERLAY_OPEN = OVERLAY + "-open";
var OVERLAY_SCROLL_CONTAINER = OVERLAY + "-scroll-container";
var PANEL_STACK = NS + "-panel-stack";
var PANEL_STACK_HEADER = PANEL_STACK + "-header";
var PANEL_STACK_HEADER_BACK = PANEL_STACK + "-header-back";
var PANEL_STACK_VIEW = PANEL_STACK + "-view";
var POPOVER = NS + "-popover";
var POPOVER_ARROW = POPOVER + "-arrow";
var POPOVER_BACKDROP = POPOVER + "-backdrop";
var POPOVER_CONTENT = POPOVER + "-content";
var POPOVER_CONTENT_SIZING = POPOVER_CONTENT + "-sizing";
var POPOVER_DISMISS = POPOVER + "-dismiss";
var POPOVER_DISMISS_OVERRIDE = POPOVER_DISMISS + "-override";
var POPOVER_OPEN = POPOVER + "-open";
var POPOVER_TARGET = POPOVER + "-target";
var POPOVER_WRAPPER = POPOVER + "-wrapper";
var TRANSITION_CONTAINER = NS + "-transition-container";
var PROGRESS_BAR = NS + "-progress-bar";
var PROGRESS_METER = NS + "-progress-meter";
var PROGRESS_NO_STRIPES = NS + "-no-stripes";
var PROGRESS_NO_ANIMATION = NS + "-no-animation";
var PORTAL = NS + "-portal";
var SKELETON = NS + "-skeleton";
var SLIDER = NS + "-slider";
var SLIDER_AXIS = SLIDER + "-axis";
var SLIDER_HANDLE = SLIDER + "-handle";
var SLIDER_LABEL = SLIDER + "-label";
var SLIDER_TRACK = SLIDER + "-track";
var SLIDER_PROGRESS = SLIDER + "-progress";
var START = NS + "-start";
var END = NS + "-end";
var SPINNER = NS + "-spinner";
var SPINNER_ANIMATION = SPINNER + "-animation";
var SPINNER_HEAD = SPINNER + "-head";
var SPINNER_NO_SPIN = NS + "-no-spin";
var SPINNER_TRACK = SPINNER + "-track";
var TAB = NS + "-tab";
var TAB_INDICATOR = TAB + "-indicator";
var TAB_INDICATOR_WRAPPER = TAB_INDICATOR + "-wrapper";
var TAB_LIST = TAB + "-list";
var TAB_PANEL = TAB + "-panel";
var TABS = TAB + "s";
var TAG = NS + "-tag";
var TAG_REMOVE = TAG + "-remove";
var TAG_INPUT = NS + "-tag-input";
var TAG_INPUT_ICON = TAG_INPUT + "-icon";
var TAG_INPUT_VALUES = TAG_INPUT + "-values";
var TOAST = NS + "-toast";
var TOAST_CONTAINER = TOAST + "-container";
var TOAST_MESSAGE = TOAST + "-message";
var TOOLTIP = NS + "-tooltip";
var TOOLTIP_INDICATOR = TOOLTIP + "-indicator";
var TREE = NS + "-tree";
var TREE_NODE = NS + "-tree-node";
var TREE_NODE_CARET = TREE_NODE + "-caret";
var TREE_NODE_CARET_CLOSED = TREE_NODE_CARET + "-closed";
var TREE_NODE_CARET_NONE = TREE_NODE_CARET + "-none";
var TREE_NODE_CARET_OPEN = TREE_NODE_CARET + "-open";
var TREE_NODE_CONTENT = TREE_NODE + "-content";
var TREE_NODE_EXPANDED = TREE_NODE + "-expanded";
var TREE_NODE_ICON = TREE_NODE + "-icon";
var TREE_NODE_LABEL = TREE_NODE + "-label";
var TREE_NODE_LIST = TREE_NODE + "-list";
var TREE_NODE_SECONDARY_LABEL = TREE_NODE + "-secondary-label";
var TREE_NODE_SELECTED = TREE_NODE + "-selected";
var TREE_ROOT = NS + "-tree-root";
var ICON = NS + "-icon";
var ICON_STANDARD = ICON + "-standard";
var ICON_LARGE = ICON + "-large";
/**
 * Returns the namespace prefix for all Blueprint CSS classes.
 * Customize this namespace at build time with the `process.env.BLUEPRINT_NAMESPACE` environment variable.
 */
function getClassNamespace() {
    return NS;
}
/** Return CSS class for alignment. */
function alignmentClass(alignment) {
    switch (alignment) {
        case _alignment__WEBPACK_IMPORTED_MODULE_0__[/* Alignment */ "a"].LEFT:
            return ALIGN_LEFT;
        case _alignment__WEBPACK_IMPORTED_MODULE_0__[/* Alignment */ "a"].RIGHT:
            return ALIGN_RIGHT;
        default:
            return undefined;
    }
}
function elevationClass(elevation) {
    if (elevation == null) {
        return undefined;
    }
    return NS + "-elevation-" + elevation;
}
/** Returns CSS class for icon name. */
function iconClass(iconName) {
    if (iconName == null) {
        return undefined;
    }
    return iconName.indexOf(NS + "-icon-") === 0 ? iconName : NS + "-icon-" + iconName;
}
/** Return CSS class for intent. */
function intentClass(intent) {
    if (intent == null || intent === _intent__WEBPACK_IMPORTED_MODULE_2__[/* Intent */ "a"].NONE) {
        return undefined;
    }
    return NS + "-intent-" + intent.toLowerCase();
}
//# sourceMappingURL=classes.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNodeEnv; });
/* unused harmony export isFunction */
/* unused harmony export isReactNodeEmpty */
/* unused harmony export ensureElement */
/* unused harmony export getDisplayName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElementOfType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return safeInvoke; });
/* unused harmony export safeInvokeOrValue */
/* unused harmony export elementIsOrContains */
/* unused harmony export arrayLengthCompare */
/* unused harmony export approxEqual */
/* unused harmony export clamp */
/* unused harmony export countDecimalPlaces */
/* unused harmony export throttleEvent */
/* unused harmony export throttleReactEventCallback */
/* unused harmony export throttle */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



/** Returns whether `process.env.NODE_ENV` exists and equals `env`. */
function isNodeEnv(env) {
    return typeof process !== "undefined" && process.env && "production" === env;
}
/** Returns whether the value is a function. Acts as a type guard. */
// tslint:disable-next-line:ban-types
function isFunction(value) {
    return typeof value === "function";
}
/**
 * Returns true if `node` is null/undefined, false, empty string, or an array
 * composed of those. If `node` is an array, only one level of the array is
 * checked, for performance reasons.
 */
function isReactNodeEmpty(node, skipArray) {
    if (skipArray === void 0) { skipArray = false; }
    return (node == null ||
        node === "" ||
        node === false ||
        (!skipArray &&
            Array.isArray(node) &&
            // only recurse one level through arrays, for performance
            (node.length === 0 || node.every(function (n) { return isReactNodeEmpty(n, true); }))));
}
/**
 * Converts a React child to an element: non-empty string or number or
 * `React.Fragment` (React 16.3+) is wrapped in given tag name; empty strings
 * are discarded.
 */
function ensureElement(child, tagName) {
    if (tagName === void 0) { tagName = "span"; }
    if (child == null) {
        return undefined;
    }
    else if (typeof child === "string") {
        // cull whitespace strings
        return child.trim().length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](tagName, {}, child) : undefined;
    }
    else if (typeof child === "number" || typeof child.type === "symbol") {
        // React.Fragment has a symbol type
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](tagName, {}, child);
    }
    else {
        return child;
    }
}
function getDisplayName(ComponentClass) {
    return ComponentClass.displayName || ComponentClass.name || "Unknown";
}
/**
 * Returns true if the given JSX element matches the given component type.
 *
 * NOTE: This function only checks equality of `displayName` for performance and
 * to tolerate multiple minor versions of a component being included in one
 * application bundle.
 * @param element JSX element in question
 * @param ComponentType desired component type of element
 */
function isElementOfType(element, ComponentType) {
    return (element != null &&
        element.type != null &&
        element.type.displayName != null &&
        element.type.displayName === ComponentType.displayName);
}
// tslint:disable-next-line:ban-types
function safeInvoke(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(func)) {
        return func.apply(void 0, args);
    }
    return undefined;
}
// tslint:disable-next-line:ban-types
function safeInvokeOrValue(funcOrValue) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return isFunction(funcOrValue) ? funcOrValue.apply(void 0, args) : funcOrValue;
}
function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
/**
 * Returns the difference in length between two arrays. A `null` argument is
 * considered an empty list. The return value will be positive if `a` is longer
 * than `b`, negative if the opposite is true, and zero if their lengths are
 * equal.
 */
function arrayLengthCompare(a, b) {
    if (a === void 0) { a = []; }
    if (b === void 0) { b = []; }
    return a.length - b.length;
}
/**
 * Returns true if the two numbers are within the given tolerance of each other.
 * This is useful to correct for floating point precision issues, less useful
 * for integers.
 */
function approxEqual(a, b, tolerance) {
    if (tolerance === void 0) { tolerance = 0.00001; }
    return Math.abs(a - b) <= tolerance;
}
/**
 * Clamps the given number between min and max values. Returns value if within
 * range, or closest bound.
 */
function clamp(val, min, max) {
    if (val == null) {
        return val;
    }
    if (max < min) {
        throw new Error(_errors__WEBPACK_IMPORTED_MODULE_1__[/* CLAMP_MIN_MAX */ "a"]);
    }
    return Math.min(Math.max(val, min), max);
}
/** Returns the number of decimal places in the given number. */
function countDecimalPlaces(num) {
    if (typeof num !== "number" || Math.floor(num) === num) {
        return 0;
    }
    return num.toString().split(".")[1].length;
}
/**
 * Throttle an event on an EventTarget by wrapping it in a
 * `requestAnimationFrame` call. Returns the event handler that was bound to
 * given eventName so you can clean up after yourself.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events/scroll
 */
function throttleEvent(target, eventName, newEventName) {
    var throttledFunc = _throttleHelper(function (event) {
        target.dispatchEvent(new CustomEvent(newEventName, event));
    });
    target.addEventListener(eventName, throttledFunc);
    return throttledFunc;
}
/**
 * Throttle a callback by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 * @see https://www.html5rocks.com/en/tutorials/speed/animations/
 */
function throttleReactEventCallback(callback, options) {
    if (options === void 0) { options = {}; }
    var throttledFunc = _throttleHelper(callback, function (event2) {
        if (options.preventDefault) {
            event2.preventDefault();
        }
    }, 
    // prevent React from reclaiming the event object before we reference it
    function (event2) { return event2.persist(); });
    return throttledFunc;
}
/**
 * Throttle a method by wrapping it in a `requestAnimationFrame` call. Returns
 * the throttled function.
 */
// tslint:disable-next-line:ban-types
function throttle(method) {
    return _throttleHelper(method);
}
// tslint:disable-next-line:ban-types
function _throttleHelper(onAnimationFrameRequested, onBeforeIsRunningCheck, onAfterIsRunningCheck) {
    var isRunning = false;
    var func = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // don't use safeInvoke, because we might have more than its max number
        // of typed params
        if (isFunction(onBeforeIsRunningCheck)) {
            onBeforeIsRunningCheck.apply(void 0, args);
        }
        if (isRunning) {
            return;
        }
        isRunning = true;
        if (isFunction(onAfterIsRunningCheck)) {
            onAfterIsRunningCheck.apply(void 0, args);
        }
        requestAnimationFrame(function () {
            onAnimationFrameRequested.apply(void 0, args);
            isRunning = false;
        });
    };
    return func;
}
//# sourceMappingURL=utils.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Elevation; });
/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
// tslint:disable:object-literal-sort-keys
var Elevation = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
};
//# sourceMappingURL=elevation.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intent; });
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
// tslint:disable:object-literal-sort-keys
/**
 * The four basic intents.
 */
var Intent = {
    NONE: "none",
    PRIMARY: "primary",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger",
};
//# sourceMappingURL=intent.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alignment; });
/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
/** Alignment along the horizontal axis. */
var Alignment = {
    CENTER: "center",
    LEFT: "left",
    RIGHT: "right",
};
//# sourceMappingURL=alignment.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arraysEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shallowCompareKeys; });
/* unused harmony export deepCompareKeys */
/* unused harmony export getShallowUnequalKeyValues */
/* unused harmony export getDeepUnequalKeyValues */
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
/**
 * Returns true if the arrays are equal. Elements will be shallowly compared by
 * default, or they will be compared using the custom `compare` function if one
 * is provided.
 */
function arraysEqual(arrA, arrB, compare) {
    if (compare === void 0) { compare = function (a, b) { return a === b; }; }
    // treat `null` and `undefined` as the same
    if (arrA == null && arrB == null) {
        return true;
    }
    else if (arrA == null || arrB == null || arrA.length !== arrB.length) {
        return false;
    }
    else {
        return arrA.every(function (a, i) { return compare(a, arrB[i]); });
    }
}
/**
 * Shallow comparison between objects. If `keys` is provided, just that subset
 * of keys will be compared; otherwise, all keys will be compared.
 */
function shallowCompareKeys(objA, objB, keys) {
    // treat `null` and `undefined` as the same
    if (objA == null && objB == null) {
        return true;
    }
    else if (objA == null || objB == null) {
        return false;
    }
    else if (Array.isArray(objA) || Array.isArray(objB)) {
        return false;
    }
    else if (keys != null) {
        return _shallowCompareKeys(objA, objB, keys);
    }
    else {
        // shallowly compare all keys from both objects
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        return (_shallowCompareKeys(objA, objB, { include: keysA }) && _shallowCompareKeys(objA, objB, { include: keysB }));
    }
}
/**
 * Deep comparison between objects. If `keys` is provided, just that subset of
 * keys will be compared; otherwise, all keys will be compared.
 */
function deepCompareKeys(objA, objB, keys) {
    if (objA === objB) {
        return true;
    }
    else if (objA == null && objB == null) {
        // treat `null` and `undefined` as the same
        return true;
    }
    else if (objA == null || objB == null) {
        return false;
    }
    else if (Array.isArray(objA) || Array.isArray(objB)) {
        return arraysEqual(objA, objB, deepCompareKeys);
    }
    else if (_isSimplePrimitiveType(objA) || _isSimplePrimitiveType(objB)) {
        return objA === objB;
    }
    else if (keys != null) {
        return _deepCompareKeys(objA, objB, keys);
    }
    else if (objA.constructor !== objB.constructor) {
        return false;
    }
    else {
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA == null || keysB == null) {
            return false;
        }
        if (keysA.length === 0 && keysB.length === 0) {
            return true;
        }
        return arraysEqual(keysA, keysB) && _deepCompareKeys(objA, objB, keysA);
    }
}
/**
 * Returns a descriptive object for each key whose values are shallowly unequal
 * between two provided objects. Useful for debugging shouldComponentUpdate.
 */
function getShallowUnequalKeyValues(objA, objB, keys) {
    // default param values let null values pass through, so we have to take
    // this more thorough approach
    var definedObjA = objA == null ? {} : objA;
    var definedObjB = objB == null ? {} : objB;
    var filteredKeys = _filterKeys(definedObjA, definedObjB, keys == null ? { exclude: [] } : keys);
    return _getUnequalKeyValues(definedObjA, definedObjB, filteredKeys, function (a, b, key) {
        return shallowCompareKeys(a, b, { include: [key] });
    });
}
/**
 * Returns a descriptive object for each key whose values are deeply unequal
 * between two provided objects. Useful for debugging shouldComponentUpdate.
 */
function getDeepUnequalKeyValues(objA, objB, keys) {
    if (objA === void 0) { objA = {}; }
    if (objB === void 0) { objB = {}; }
    var filteredKeys = keys == null ? _unionKeys(objA, objB) : keys;
    return _getUnequalKeyValues(objA, objB, filteredKeys, function (a, b, key) {
        return deepCompareKeys(a, b, [key]);
    });
}
// Private helpers
// ===============
/**
 * Partial shallow comparison between objects using the given list of keys.
 */
function _shallowCompareKeys(objA, objB, keys) {
    return _filterKeys(objA, objB, keys).every(function (key) {
        return objA.hasOwnProperty(key) === objB.hasOwnProperty(key) && objA[key] === objB[key];
    });
}
/**
 * Partial deep comparison between objects using the given list of keys.
 */
function _deepCompareKeys(objA, objB, keys) {
    return keys.every(function (key) {
        return objA.hasOwnProperty(key) === objB.hasOwnProperty(key) && deepCompareKeys(objA[key], objB[key]);
    });
}
function _isSimplePrimitiveType(value) {
    return typeof value === "number" || typeof value === "string" || typeof value === "boolean";
}
function _filterKeys(objA, objB, keys) {
    if (_isWhitelist(keys)) {
        return keys.include;
    }
    else {
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        // merge keys from both objects into a big set for quick access
        var keySet_1 = _arrayToObject(keysA.concat(keysB));
        // delete blacklisted keys from the key set
        keys.exclude.forEach(function (key) { return delete keySet_1[key]; });
        // return the remaining keys as an array
        return Object.keys(keySet_1);
    }
}
function _isWhitelist(keys) {
    return keys != null && keys.include != null;
}
function _arrayToObject(arr) {
    return arr.reduce(function (obj, element) {
        obj[element] = true;
        return obj;
    }, {});
}
function _getUnequalKeyValues(objA, objB, keys, compareFn) {
    var unequalKeys = keys.filter(function (key) { return !compareFn(objA, objB, key); });
    var unequalKeyValues = unequalKeys.map(function (key) { return ({
        key: key,
        valueA: objA[key],
        valueB: objB[key],
    }); });
    return unequalKeyValues;
}
function _unionKeys(objA, objB) {
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    var concatKeys = keysA.concat(keysB);
    var keySet = _arrayToObject(concatKeys);
    return Object.keys(keySet);
}
//# sourceMappingURL=compareUtils.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg_default.e2fe9c88.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "uk.bb33a71a.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fr.a084db5e.png";

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLAMP_MIN_MAX; });
/* unused harmony export ALERT_WARN_CANCEL_PROPS */
/* unused harmony export ALERT_WARN_CANCEL_ESCAPE_KEY */
/* unused harmony export ALERT_WARN_CANCEL_OUTSIDE_CLICK */
/* unused harmony export COLLAPSIBLE_LIST_INVALID_CHILD */
/* unused harmony export CONTEXTMENU_WARN_DECORATOR_NO_METHOD */
/* unused harmony export CONTEXTMENU_WARN_DECORATOR_NEEDS_REACT_ELEMENT */
/* unused harmony export HOTKEYS_HOTKEY_CHILDREN */
/* unused harmony export HOTKEYS_WARN_DECORATOR_NO_METHOD */
/* unused harmony export HOTKEYS_WARN_DECORATOR_NEEDS_REACT_ELEMENT */
/* unused harmony export NUMERIC_INPUT_MIN_MAX */
/* unused harmony export NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND */
/* unused harmony export NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND */
/* unused harmony export NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE */
/* unused harmony export NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE */
/* unused harmony export NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE */
/* unused harmony export NUMERIC_INPUT_STEP_SIZE_NULL */
/* unused harmony export OVERFLOW_LIST_OBSERVE_PARENTS_CHANGED */
/* unused harmony export POPOVER_REQUIRES_TARGET */
/* unused harmony export POPOVER_HAS_BACKDROP_INTERACTION */
/* unused harmony export POPOVER_WARN_TOO_MANY_CHILDREN */
/* unused harmony export POPOVER_WARN_DOUBLE_CONTENT */
/* unused harmony export POPOVER_WARN_DOUBLE_TARGET */
/* unused harmony export POPOVER_WARN_EMPTY_CONTENT */
/* unused harmony export POPOVER_WARN_HAS_BACKDROP_INLINE */
/* unused harmony export POPOVER_WARN_UNCONTROLLED_ONINTERACTION */
/* unused harmony export PORTAL_CONTEXT_CLASS_NAME_STRING */
/* unused harmony export RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX */
/* unused harmony export SLIDER_ZERO_STEP */
/* unused harmony export SLIDER_ZERO_LABEL_STEP */
/* unused harmony export RANGESLIDER_NULL_VALUE */
/* unused harmony export MULTISLIDER_INVALID_CHILD */
/* unused harmony export SPINNER_WARN_CLASSES_SIZE */
/* unused harmony export TOASTER_CREATE_NULL */
/* unused harmony export TOASTER_WARN_INLINE */
/* unused harmony export DIALOG_WARN_NO_HEADER_ICON */
/* unused harmony export DIALOG_WARN_NO_HEADER_CLOSE_BUTTON */
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var ns = "[Blueprint]";
var CLAMP_MIN_MAX = ns + " clamp: max cannot be less than min";
var ALERT_WARN_CANCEL_PROPS = ns + " <Alert> cancelButtonText and onCancel should be set together.";
var ALERT_WARN_CANCEL_ESCAPE_KEY = ns + " <Alert> canEscapeKeyCancel enabled without onCancel or onClose handler.";
var ALERT_WARN_CANCEL_OUTSIDE_CLICK = ns + " <Alert> canOutsideClickCancel enbaled without onCancel or onClose handler.";
var COLLAPSIBLE_LIST_INVALID_CHILD = ns + " <CollapsibleList> children must be <MenuItem>s";
var CONTEXTMENU_WARN_DECORATOR_NO_METHOD = ns + " @ContextMenuTarget-decorated class should implement renderContextMenu.";
var CONTEXTMENU_WARN_DECORATOR_NEEDS_REACT_ELEMENT = ns + " \"@ContextMenuTarget-decorated components must return a single JSX.Element or an empty render.";
var HOTKEYS_HOTKEY_CHILDREN = ns + " <Hotkeys> only accepts <Hotkey> children.";
var HOTKEYS_WARN_DECORATOR_NO_METHOD = ns + " @HotkeysTarget-decorated class should implement renderHotkeys.";
var HOTKEYS_WARN_DECORATOR_NEEDS_REACT_ELEMENT = ns + " \"@HotkeysTarget-decorated components must return a single JSX.Element or an empty render.";
var NUMERIC_INPUT_MIN_MAX = ns + " <NumericInput> requires min to be strictly less than max if both are defined.";
var NUMERIC_INPUT_MINOR_STEP_SIZE_BOUND = ns + " <NumericInput> requires minorStepSize to be strictly less than stepSize.";
var NUMERIC_INPUT_MAJOR_STEP_SIZE_BOUND = ns + " <NumericInput> requires majorStepSize to be strictly greater than stepSize.";
var NUMERIC_INPUT_MINOR_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires minorStepSize to be strictly greater than zero.";
var NUMERIC_INPUT_MAJOR_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires majorStepSize to be strictly greater than zero.";
var NUMERIC_INPUT_STEP_SIZE_NON_POSITIVE = ns + " <NumericInput> requires stepSize to be strictly greater than zero.";
var NUMERIC_INPUT_STEP_SIZE_NULL = ns + " <NumericInput> requires stepSize to be defined.";
var OVERFLOW_LIST_OBSERVE_PARENTS_CHANGED = ns + " <OverflowList> does not support changing observeParents after mounting.";
// TODO (clewis): Migrate old Popover validation errors to the component formerly known as Popover2.
// See: https://github.com/palantir/blueprint/issues/1940
var POPOVER_REQUIRES_TARGET = ns + " <Popover> requires target prop or at least one child element.";
var POPOVER_HAS_BACKDROP_INTERACTION = ns + " <Popover hasBackdrop={true}> requires interactionKind={PopoverInteractionKind.CLICK}.";
var POPOVER_WARN_TOO_MANY_CHILDREN = ns +
    " <Popover> supports one or two children; additional children are ignored." +
    " First child is the target, second child is the content. You may instead supply these two as props.";
var POPOVER_WARN_DOUBLE_CONTENT = ns + " <Popover> with two children ignores content prop; use either prop or children.";
var POPOVER_WARN_DOUBLE_TARGET = ns + " <Popover> with children ignores target prop; use either prop or children.";
var POPOVER_WARN_EMPTY_CONTENT = ns + " Disabling <Popover> with empty/whitespace content...";
var POPOVER_WARN_HAS_BACKDROP_INLINE = ns + " <Popover usePortal={false}> ignores hasBackdrop";
var POPOVER_WARN_UNCONTROLLED_ONINTERACTION = ns + " <Popover> onInteraction is ignored when uncontrolled.";
var PORTAL_CONTEXT_CLASS_NAME_STRING = ns + " <Portal> context blueprintPortalClassName must be string";
var RADIOGROUP_WARN_CHILDREN_OPTIONS_MUTEX = ns + " <RadioGroup> children and options prop are mutually exclusive, with options taking priority.";
var SLIDER_ZERO_STEP = ns + " <Slider> stepSize must be greater than zero.";
var SLIDER_ZERO_LABEL_STEP = ns + " <Slider> labelStepSize must be greater than zero.";
var RANGESLIDER_NULL_VALUE = ns + " <RangeSlider> value prop must be an array of two non-null numbers.";
var MULTISLIDER_INVALID_CHILD = ns + " <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s";
var SPINNER_WARN_CLASSES_SIZE = ns + " <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";
var TOASTER_CREATE_NULL = ns +
    " Toaster.create() is not supported inside React lifecycle methods in React 16." +
    " See usage example on the docs site.";
var TOASTER_WARN_INLINE = ns + " Toaster.create() ignores inline prop as it always creates a new element.";
var DIALOG_WARN_NO_HEADER_ICON = ns + " <Dialog> iconName is ignored if title is omitted.";
var DIALOG_WARN_NO_HEADER_CLOSE_BUTTON = ns + " <Dialog> isCloseButtonShown prop is ignored if title is omitted.";
//# sourceMappingURL=errors.js.map

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = {"navItems":[{"text":"PAGE 1","link":"page1"},{"text":"PAGE 2","link":"page 2"},{"text":"PAGE 3","link":"page3"}]};

/***/ }),
/* 16 */
/***/ (function(module) {

module.exports = {"navItems":[{"text":"PAGE 1","link":"page1"},{"text":"PAGE 2","link":"page 2"},{"text":"PAGE 3","link":"page3"}]};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "up.318c6a34.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(20);

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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@blueprintjs/core/lib/css/blueprint.css
var blueprint = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css
var blueprint_icons = __webpack_require__(23);

// EXTERNAL MODULE: ./src/reactive-layout/images/bg/bg_default.jpg
var bg_default = __webpack_require__(11);
var bg_default_default = /*#__PURE__*/__webpack_require__.n(bg_default);

// EXTERNAL MODULE: external {"root":"styled","commonjs2":"styled-components","commonjs":"styled-components","amd":"styled-components"}
var external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_ = __webpack_require__(3);
var external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_);

// EXTERNAL MODULE: ./src/reactive-layout/images/flags/uk.png
var uk = __webpack_require__(12);
var uk_default = /*#__PURE__*/__webpack_require__.n(uk);

// EXTERNAL MODULE: ./src/reactive-layout/images/flags/fr.png
var fr = __webpack_require__(13);
var fr_default = /*#__PURE__*/__webpack_require__.n(fr);

// CONCATENATED MODULE: ./src/reactive-layout/api/theme-utils.js

var isPc = function isPc(arg1, arg2) {
  return function (_ref) {
    var theme = _ref.theme;
    return theme.device === "pc" ? arg1 : arg2;
  };
};

var isPrim = function isPrim(arg1, arg2) {
  return function (_ref2) {
    var theme = _ref2.theme,
        primary = _ref2.primary;
    return primary ? theme[arg1] : theme[arg2];
  };
};

var getTheme = function getTheme(key) {
  return function (_ref3) {
    var theme = _ref3.theme;
    return theme[key];
  };
};

var getTextColor = function getTextColor(_ref4) {
  var theme = _ref4.theme,
      primary = _ref4.primary,
      secondary = _ref4.secondary,
      tertiary = _ref4.tertiary;

  if (primary) return theme.text1;
  if (secondary) return theme.text2;
  if (tertiary) return theme.text3;
  return theme.text;
};

var getBgColor = function getBgColor(_ref5) {
  var theme = _ref5.theme,
      primary = _ref5.primary,
      secondary = _ref5.secondary,
      tertiary = _ref5.tertiary;

  if (primary) return theme.bg4;
  if (secondary) return theme.bg2;
  if (tertiary) return theme.bg3;
  return theme.bg;
};
// CONCATENATED MODULE: ./src/reactive-layout/api/scroll-to.js
var scrollTo = function scrollTo(target) {
  window.scrollTo({
    "behavior": "smooth",
    "left": 0,
    "top": target.offsetTop
  });
};

/* harmony default export */ var scroll_to = (scrollTo);
// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@blueprintjs/core/lib/esm/common/utils.js
var utils = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@blueprintjs/core/lib/esm/common/abstractPureComponent.js
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */



/**
 * An abstract component that Blueprint components can extend
 * in order to add some common functionality like runtime props validation.
 */
var abstractPureComponent_AbstractPureComponent = /** @class */ (function (_super) {
    __extends(AbstractPureComponent, _super);
    function AbstractPureComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Not bothering to remove entries when their timeouts finish because clearing invalid ID is a no-op
        _this.timeoutIds = [];
        /**
         * Clear all known timeouts.
         */
        _this.clearTimeouts = function () {
            if (_this.timeoutIds.length > 0) {
                for (var _i = 0, _a = _this.timeoutIds; _i < _a.length; _i++) {
                    var timeoutId = _a[_i];
                    window.clearTimeout(timeoutId);
                }
                _this.timeoutIds = [];
            }
        };
        if (!Object(utils["b" /* isNodeEnv */])("production")) {
            _this.validateProps(_this.props);
        }
        return _this;
    }
    AbstractPureComponent.prototype.componentWillReceiveProps = function (nextProps) {
        if (!Object(utils["b" /* isNodeEnv */])("production")) {
            this.validateProps(nextProps);
        }
    };
    AbstractPureComponent.prototype.componentWillUnmount = function () {
        this.clearTimeouts();
    };
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    AbstractPureComponent.prototype.setTimeout = function (callback, timeout) {
        var handle = window.setTimeout(callback, timeout);
        this.timeoutIds.push(handle);
        return function () { return window.clearTimeout(handle); };
    };
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * Like propTypes, these runtime checks run only in development mode.
     */
    AbstractPureComponent.prototype.validateProps = function (_) {
        // implement in subclass
    };
    return AbstractPureComponent;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]));

//# sourceMappingURL=abstractPureComponent.js.map
// EXTERNAL MODULE: ./node_modules/@blueprintjs/core/lib/esm/common/classes.js
var common_classes = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@blueprintjs/core/lib/esm/common/keys.js
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
var BACKSPACE = 8;
var TAB = 9;
var ENTER = 13;
var SHIFT = 16;
var ESCAPE = 27;
var SPACE = 32;
var ARROW_LEFT = 37;
var ARROW_UP = 38;
var ARROW_RIGHT = 39;
var ARROW_DOWN = 40;
var DELETE = 46;
//# sourceMappingURL=keys.js.map
// CONCATENATED MODULE: ./node_modules/@blueprintjs/core/lib/esm/common/props.js
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

var DISPLAYNAME_PREFIX = "Blueprint3";
/** A collection of curated prop keys used across our Components which are not valid HTMLElement props. */
var INVALID_PROPS = [
    "active",
    "alignText",
    "containerRef",
    "elementRef",
    "fill",
    "icon",
    "inputRef",
    "intent",
    "inline",
    "large",
    "loading",
    "leftIcon",
    "minimal",
    "onChildrenMount",
    "onRemove",
    "popoverProps",
    "rightElement",
    "rightIcon",
    "round",
    "small",
    "text",
];
/**
 * Typically applied to HTMLElements to filter out blacklisted props. When applied to a Component,
 * can filter props from being passed down to the children. Can also filter by a combined list of
 * supplied prop keys and the blacklist (only appropriate for HTMLElements).
 * @param props The original props object to filter down.
 * @param {string[]} invalidProps If supplied, overwrites the default blacklist.
 * @param {boolean} shouldMerge If true, will merge supplied invalidProps and blacklist together.
 */
function removeNonHTMLProps(props, invalidProps, shouldMerge) {
    if (invalidProps === void 0) { invalidProps = INVALID_PROPS; }
    if (shouldMerge === void 0) { shouldMerge = false; }
    if (shouldMerge) {
        invalidProps = invalidProps.concat(INVALID_PROPS);
    }
    return invalidProps.reduce(function (prev, curr) {
        if (prev.hasOwnProperty(curr)) {
            delete prev[curr];
        }
        return prev;
    }, __assign({}, props));
}
//# sourceMappingURL=props.js.map
// EXTERNAL MODULE: ./node_modules/@blueprintjs/core/lib/esm/common/utils/compareUtils.js
var compareUtils = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@blueprintjs/core/lib/esm/components/tabs/tab.js
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var tab_Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // this component is never rendered directly; see Tabs#renderTabPanel()
    /* istanbul ignore next */
    Tab.prototype.render = function () {
        var _a = this.props, className = _a.className, panel = _a.panel;
        return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", { className: classnames_default()(common_classes["h" /* TAB_PANEL */], className), role: "tablist" }, panel));
    };
    Tab.defaultProps = {
        disabled: false,
        id: undefined,
    };
    Tab.displayName = DISPLAYNAME_PREFIX + ".Tab";
    return Tab;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]));

//# sourceMappingURL=tab.js.map
// CONCATENATED MODULE: ./node_modules/@blueprintjs/core/lib/esm/components/tabs/tabTitle.js
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */





var tabTitle_TabTitle = /** @class */ (function (_super) {
    __extends(TabTitle, _super);
    function TabTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (e) { return _this.props.onClick(_this.props.id, e); };
        return _this;
    }
    TabTitle.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, id = _a.id, parentId = _a.parentId, selected = _a.selected;
        return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", { "aria-controls": generateTabPanelId(parentId, id), "aria-disabled": disabled, "aria-expanded": selected, "aria-selected": selected, className: classnames_default()(common_classes["c" /* TAB */], this.props.className), "data-tab-id": id, id: generateTabTitleId(parentId, id), onClick: disabled ? undefined : this.handleClick, role: "tab", tabIndex: disabled ? undefined : 0 },
            this.props.title,
            this.props.children));
    };
    TabTitle.displayName = DISPLAYNAME_PREFIX + ".TabTitle";
    return TabTitle;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["PureComponent"]));

function generateTabPanelId(parentId, tabId) {
    return common_classes["h" /* TAB_PANEL */] + "_" + parentId + "_" + tabId;
}
function generateTabTitleId(parentId, tabId) {
    return common_classes["c" /* TAB */] + "-title_" + parentId + "_" + tabId;
}
//# sourceMappingURL=tabTitle.js.map
// CONCATENATED MODULE: ./node_modules/@blueprintjs/core/lib/esm/components/tabs/tabs.js
/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */










var Expander = function () { return external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", { className: common_classes["a" /* FLEX_EXPANDER */] }); };
var TAB_SELECTOR = "." + common_classes["c" /* TAB */];
var tabs_Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.refHandlers = {
            tablist: function (tabElement) { return (_this.tablistElement = tabElement); },
        };
        _this.handleKeyDown = function (e) {
            var focusedElement = document.activeElement.closest(TAB_SELECTOR);
            // rest of this is potentially expensive and futile, so bail if no tab is focused
            if (focusedElement == null) {
                return;
            }
            // must rely on DOM state because we have no way of mapping `focusedElement` to a JSX.Element
            var enabledTabElements = _this.getTabElements().filter(function (el) { return el.getAttribute("aria-disabled") === "false"; });
            var focusedIndex = enabledTabElements.indexOf(focusedElement);
            var direction = _this.getKeyCodeDirection(e);
            if (focusedIndex >= 0 && direction !== undefined) {
                e.preventDefault();
                var length_1 = enabledTabElements.length;
                // auto-wrapping at 0 and `length`
                var nextFocusedIndex = (focusedIndex + direction + length_1) % length_1;
                enabledTabElements[nextFocusedIndex].focus();
            }
        };
        _this.handleKeyPress = function (e) {
            var targetTabElement = e.target.closest(TAB_SELECTOR);
            if (targetTabElement != null && isEventKeyCode(e, SPACE, ENTER)) {
                e.preventDefault();
                targetTabElement.click();
            }
        };
        _this.handleTabClick = function (newTabId, event) {
            utils["c" /* safeInvoke */](_this.props.onChange, newTabId, _this.state.selectedTabId, event);
            if (_this.props.selectedTabId === undefined) {
                _this.setState({ selectedTabId: newTabId });
            }
        };
        _this.renderTabPanel = function (tab) {
            var _a = tab.props, className = _a.className, panel = _a.panel, id = _a.id;
            if (panel === undefined) {
                return undefined;
            }
            return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", { "aria-labelledby": generateTabTitleId(_this.props.id, id), "aria-hidden": id !== _this.state.selectedTabId, className: classnames_default()(common_classes["h" /* TAB_PANEL */], className), id: generateTabPanelId(_this.props.id, id), key: id, role: "tabpanel" }, panel));
        };
        _this.renderTabTitle = function (child) {
            if (isTabElement(child)) {
                var id = child.props.id;
                return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"](tabTitle_TabTitle, __assign({}, child.props, { parentId: _this.props.id, onClick: _this.handleTabClick, selected: id === _this.state.selectedTabId })));
            }
            return child;
        };
        var selectedTabId = _this.getInitialSelectedTabId();
        _this.state = { selectedTabId: selectedTabId };
        return _this;
    }
    Tabs.prototype.render = function () {
        var _a = this.state, indicatorWrapperStyle = _a.indicatorWrapperStyle, selectedTabId = _a.selectedTabId;
        var tabTitles = external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].map(this.props.children, this.renderTabTitle);
        var tabPanels = this.getTabChildren()
            .filter(this.props.renderActiveTabPanelOnly ? function (tab) { return tab.props.id === selectedTabId; } : function () { return true; })
            .map(this.renderTabPanel);
        var tabIndicator = this.props.animate ? (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", { className: common_classes["f" /* TAB_INDICATOR_WRAPPER */], style: indicatorWrapperStyle },
            external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", { className: common_classes["e" /* TAB_INDICATOR */] }))) : null;
        var classes = classnames_default()(common_classes["d" /* TABS */], (_b = {}, _b[common_classes["i" /* VERTICAL */]] = this.props.vertical, _b), this.props.className);
        var tabListClasses = classnames_default()(common_classes["g" /* TAB_LIST */], (_c = {},
            _c[common_classes["b" /* LARGE */]] = this.props.large,
            _c));
        return (external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", { className: classes },
            external_root_React_commonjs2_react_commonjs_react_amd_react_["createElement"]("div", { className: tabListClasses, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, ref: this.refHandlers.tablist, role: "tablist" },
                tabIndicator,
                tabTitles),
            tabPanels));
        var _b, _c;
    };
    Tabs.prototype.componentDidMount = function () {
        this.moveSelectionIndicator();
    };
    Tabs.prototype.componentWillReceiveProps = function (_a) {
        var selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            // keep state in sync with controlled prop, so state is canonical source of truth
            this.setState({ selectedTabId: selectedTabId });
        }
    };
    Tabs.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.state.selectedTabId !== prevState.selectedTabId) {
            this.moveSelectionIndicator();
        }
        else if (prevState.selectedTabId != null) {
            // comparing React nodes is difficult to do with simple logic, so
            // shallowly compare just their props as a workaround.
            var didChildrenChange = !compareUtils["a" /* arraysEqual */](this.getTabChildrenProps(prevProps), this.getTabChildrenProps(), compareUtils["b" /* shallowCompareKeys */]);
            if (didChildrenChange) {
                this.moveSelectionIndicator();
            }
        }
    };
    Tabs.prototype.getInitialSelectedTabId = function () {
        // NOTE: providing an unknown ID will hide the selection
        var _a = this.props, defaultSelectedTabId = _a.defaultSelectedTabId, selectedTabId = _a.selectedTabId;
        if (selectedTabId !== undefined) {
            return selectedTabId;
        }
        else if (defaultSelectedTabId !== undefined) {
            return defaultSelectedTabId;
        }
        else {
            // select first tab in absence of user input
            var tabs = this.getTabChildren();
            return tabs.length === 0 ? undefined : tabs[0].props.id;
        }
    };
    Tabs.prototype.getKeyCodeDirection = function (e) {
        if (isEventKeyCode(e, ARROW_LEFT, ARROW_UP)) {
            return -1;
        }
        else if (isEventKeyCode(e, ARROW_RIGHT, ARROW_DOWN)) {
            return 1;
        }
        return undefined;
    };
    Tabs.prototype.getTabChildrenProps = function (props) {
        if (props === void 0) { props = this.props; }
        return this.getTabChildren(props).map(function (child) { return child.props; });
    };
    /** Filters children to only `<Tab>`s */
    Tabs.prototype.getTabChildren = function (props) {
        if (props === void 0) { props = this.props; }
        return external_root_React_commonjs2_react_commonjs_react_amd_react_["Children"].toArray(props.children).filter(isTabElement);
    };
    /** Queries root HTML element for all tabs with optional filter selector */
    Tabs.prototype.getTabElements = function (subselector) {
        if (subselector === void 0) { subselector = ""; }
        if (this.tablistElement == null) {
            return [];
        }
        return Array.from(this.tablistElement.querySelectorAll(TAB_SELECTOR + subselector));
    };
    /**
     * Calculate the new height, width, and position of the tab indicator.
     * Store the CSS values so the transition animation can start.
     */
    Tabs.prototype.moveSelectionIndicator = function () {
        if (this.tablistElement == null || !this.props.animate) {
            return;
        }
        var tabIdSelector = TAB_SELECTOR + "[data-tab-id=\"" + this.state.selectedTabId + "\"]";
        var selectedTabElement = this.tablistElement.querySelector(tabIdSelector);
        var indicatorWrapperStyle = { display: "none" };
        if (selectedTabElement != null) {
            var clientHeight = selectedTabElement.clientHeight, clientWidth = selectedTabElement.clientWidth, offsetLeft = selectedTabElement.offsetLeft, offsetTop = selectedTabElement.offsetTop;
            indicatorWrapperStyle = {
                height: clientHeight,
                transform: "translateX(" + Math.floor(offsetLeft) + "px) translateY(" + Math.floor(offsetTop) + "px)",
                width: clientWidth,
            };
        }
        this.setState({ indicatorWrapperStyle: indicatorWrapperStyle });
    };
    /** Insert a `Tabs.Expander` between any two children to right-align all subsequent children. */
    Tabs.Expander = Expander;
    Tabs.Tab = tab_Tab;
    Tabs.defaultProps = {
        animate: true,
        large: false,
        renderActiveTabPanelOnly: false,
        vertical: false,
    };
    Tabs.displayName = DISPLAYNAME_PREFIX + ".Tabs";
    return Tabs;
}(abstractPureComponent_AbstractPureComponent));

function isEventKeyCode(e) {
    var codes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        codes[_i - 1] = arguments[_i];
    }
    return codes.indexOf(e.which) >= 0;
}
function isTabElement(child) {
    return utils["a" /* isElementOfType */](child, tab_Tab);
}
//# sourceMappingURL=tabs.js.map
// CONCATENATED MODULE: ./src/reactive-layout/components/navigation.template.js
var _templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background-color: ", ";\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  max-width: 1080px;\n  margin: auto;\n"], ["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  height: 45px;\n  max-width: 1080px;\n  margin: auto;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  display: ", ";\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n"], ["\n  display: ", ";\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  text-decoration: none;\n  color: ", ";\n  font-size: 1em;\n  width: 100px;\n  text-align: center;\n"], ["\n  text-decoration: none;\n  color: ", ";\n  font-size: 1em;\n  width: 100px;\n  text-align: center;\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["\n  height: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n"], ["\n  height: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  display: ", ";\n  background-color: transparent;\n  margin-right: 10px;\n  height: 30px;\n  color: white;\n"], ["\n  display: ", ";\n  background-color: transparent;\n  margin-right: 10px;\n  height: 30px;\n  color: white;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }













var MOVE_BORDER_COLOR_DEFAULT = "#9A9A9A";

var FixedWrapper = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.div(_templateObject, function (_ref) {
  var bgColor = _ref.bgColor;
  return bgColor;
});

var Container = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.div(_templateObject2);

var Nav = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.nav(_templateObject3, isPc("flex", "none"));

var NavButton = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.a(_templateObject4, function (_ref2) {
  var textColor = _ref2.textColor;
  return textColor;
});

var NavOption = NavButton.withComponent("option");

var Flag = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.img(_templateObject5);

var Select = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.select(_templateObject6, isPc("none", "inline"));

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
    }, _this.scrollRequest = function (e) {
      e.preventDefault();
      var link = e.currentTarget.dataset.link;
      var target = document.getElementById(link);
      scroll_to(target);
    }, _this.scrollToMob = function (e) {
      e.preventDefault();
      var value = e.currentTarget.value;
      console.log(value);
      var target = document.getElementById(value);
      scroll_to(target);
    }, _this.setLanguage = function (e) {
      return _this.props.setLanguage(e.currentTarget.dataset.lng);
    }, _this.handleTabChange = function (newId, prevId, e) {
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
        bgColor = _props.bgColor,
        handleTabChange = _props.handleTabChange,
        selectedId = _props.selectedId;

    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      FixedWrapper,
      { bgColor: bgColor },
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
        Container,
        null,
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          "div",
          null,
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Flag, {
            src: uk_default.a,
            "data-lng": "en",
            onClick: this.setLanguage,
            alt: "uk flag"
          }),
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Flag, {
            src: fr_default.a,
            "data-lng": "fr",
            onClick: this.setLanguage,
            alt: "fr flag"
          })
        ),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          tabs_Tabs,
          {
            id: "navigation",
            onChange: handleTabChange,
            selectedTabId: selectedId
          },
          navItems.map(function (item, index) {
            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              tab_Tab,
              {
                "data-tabIndex": index,
                key: "navItem" + index,
                id: index.toString(),
                onClick: _this2.scroll
              },
              item.text
            );
          })
        ),
        external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          Select,
          { onChange: this.scrollToMob },
          navItems.map(function (item, index) {
            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              NavOption,
              {
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

navigation_template_Navigation.defaultProps = {
  bgColor: "none",
  textColor: "white",
  borderColor: MOVE_BORDER_COLOR_DEFAULT
};

navigation_template_Navigation.propTypes = {
  navItems: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    link: prop_types_default.a.string.isRequired,
    text: prop_types_default.a.string.isRequired
  })).isRequired,
  setLanguage: prop_types_default.a.func.isRequired,
  bgColor: prop_types_default.a.string,
  textColor: prop_types_default.a.string
};

/* harmony default export */ var navigation_template = (navigation_template_Navigation);
// EXTERNAL MODULE: ./src/reactive-layout/data/texts-fr.json
var texts_fr = __webpack_require__(15);

// EXTERNAL MODULE: ./src/reactive-layout/data/texts-en.json
var texts_en = __webpack_require__(16);

// CONCATENATED MODULE: ./src/reactive-layout/services/with-data.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function with_data_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function with_data_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function with_data_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var textsDefault = {
  fr: texts_fr,
  en: texts_en
};

var with_data_withData = function withData(data) {
  return function (Wrapped) {
    var _class, _temp, _initialiseProps;

    var Result = (_temp = _class = function (_Component) {
      with_data_inherits(Result, _Component);

      function Result(_ref) {
        var defaultLanguage = _ref.defaultLanguage;

        with_data_classCallCheck(this, Result);

        var _this = with_data_possibleConstructorReturn(this, _Component.call(this));

        _initialiseProps.call(_this);

        data = data || {};
        _this.allTexts = data.texts || textsDefault;
        var lng = data.lng || defaultLanguage;
        _this.state = { texts: _this.allTexts[lng], lng: lng };
        return _this;
      }

      Result.prototype.componentDidMount = function componentDidMount() {};

      Result.prototype.render = function render() {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Wrapped, _extends({}, this.props, {
          setLanguage: this.setLanguage,
          texts: this.state.texts,
          components: data.components,
          bgs: data.bgs
        }));
      };

      return Result;
    }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]), _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.setLanguage = function (lng) {
        _this2.setState({ texts: _this2.allTexts[lng] });
      };
    }, _temp);


    Result.propType = {
      defaultLanguage: prop_types_default.a.string
    };

    Result.defaultProps = {
      defaultLanguage: "fr"
    };

    return Result;
  };
};

/* harmony default export */ var with_data = (with_data_withData);
// CONCATENATED MODULE: ./src/reactive-layout/api/compute-options.js
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
    "device": x < 1080 || isMobile ? "mobile" : "pc",
    "screen-height": y,
    "screen-width": x
  };

  return opt;
};

/* harmony default export */ var compute_options = (computeOptions);
// CONCATENATED MODULE: ./src/reactive-layout/api/theme.js

var colors = {
  main: "",
  bg: "#FFFFFF",
  bg2: "#281D24",
  bg3: '#C6C3C5',
  bg4: "#170F12",
  nav: "rgba(1,0,1,0)",
  text: "#FFFFFF",
  text2: "#F1E9F2",
  text3: "#C5B7B8",
  border: '#9A9A9A'
};
// CONCATENATED MODULE: ./src/reactive-layout/services/with-theme.js
var with_theme_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function with_theme_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function with_theme_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function with_theme_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var with_theme_withTheme = function withTheme() {
  return function (Wrapped) {
    var Result = function (_Component) {
      with_theme_inherits(Result, _Component);

      function Result(props) {
        with_theme_classCallCheck(this, Result);

        var _this = with_theme_possibleConstructorReturn(this, _Component.call(this));

        _this.computeStyles = function () {
          _this.setState({
            theme: with_theme_extends({}, colors, compute_options())
          });
        };

        _this.state = {
          theme: with_theme_extends({}, colors, compute_options())
        };
        return _this;
      }

      Result.prototype.componentDidMount = function componentDidMount() {
        window.addEventListener('resize', this.computeStyles);
      };

      Result.prototype.render = function render() {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_["ThemeProvider"],
          { theme: this.state.theme },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(Wrapped, with_theme_extends({}, this.props, {
            theme: this.state.theme }))
        );
      };

      return Result;
    }(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

    return Result;
  };
};

/* harmony default export */ var with_theme = (with_theme_withTheme);
// EXTERNAL MODULE: ./src/reactive-layout/components/scroll-top/up.png
var up = __webpack_require__(17);
var up_default = /*#__PURE__*/__webpack_require__.n(up);

// CONCATENATED MODULE: ./src/reactive-layout/components/scroll-top/nav-buttons.component.js
var nav_buttons_component_templateObject = nav_buttons_component_taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  padding-bottom: 20px;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  padding-bottom: 20px;\n  width: 100%;\n"]),
    nav_buttons_component_templateObject2 = nav_buttons_component_taggedTemplateLiteralLoose(["\n  background: url(", ");\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  margin: 0px 5px 0px 5px;\n"], ["\n  background: url(", ");\n  width: 48px;\n  height: 48px;\n  cursor: pointer;\n  margin: 0px 5px 0px 5px;\n"]),
    nav_buttons_component_templateObject3 = nav_buttons_component_taggedTemplateLiteralLoose(["\n  transform: rotate(180deg);\n"], ["\n  transform: rotate(180deg);\n"]);

function nav_buttons_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function nav_buttons_component_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function nav_buttons_component_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function nav_buttons_component_taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }







var nav_buttons_component_Container = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.div(nav_buttons_component_templateObject);

var ArrowUp = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.div(nav_buttons_component_templateObject2, up_default.a);

var ArrowDown = ArrowUp.extend(nav_buttons_component_templateObject3);

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
      nav_buttons_component_Container,
      null,
      !isFirst && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(ArrowUp, { onClick: this.props.scrollPrev }),
      !isLast && external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(ArrowDown, { onClick: this.props.scrollNext })
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
var screen_layout_templateObject = screen_layout_taggedTemplateLiteralLoose(["\n  font-family: \"Play\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  background-image: ", ";\n  background-size: cover;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n"], ["\n  font-family: \"Play\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ", ";\n  background-image: ", ";\n  background-size: cover;\n  width: ", ";\n  height: ", ";\n  overflow: hidden;\n"]),
    screen_layout_templateObject2 = screen_layout_taggedTemplateLiteralLoose(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

function screen_layout_taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }








var screen_layout_Container = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.section.attrs({
  id: function id(props) {
    return props.id;
  }
})(screen_layout_templateObject, getBgColor, function (props) {
  return props.bg ? "url(" + props.bg + ")" : "none";
}, function (_ref) {
  var theme = _ref.theme;
  return theme["screen-width"] + "px";
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme["screen-height"] + "px";
});

var ChildBox = external_root_styled_commonjs2_styled_components_commonjs_styled_components_amd_styled_components_default.a.div(screen_layout_templateObject2);

screen_layout_Container.defaultProps = {
  theme: {
    "screen-width": "100%",
    "screen-height": "100%"
  }
};

var screen_layout_Screen = function Screen(_ref3) {
  var index = _ref3.index,
      title = _ref3.title,
      noNav = _ref3.noNav,
      bg = _ref3.bg,
      children = _ref3.children,
      scrollNext = _ref3.scrollNext,
      scrollPrev = _ref3.scrollPrev,
      _ref3$primary = _ref3.primary,
      primary = _ref3$primary === undefined ? false : _ref3$primary,
      _ref3$secondary = _ref3.secondary,
      secondary = _ref3$secondary === undefined ? false : _ref3$secondary,
      _ref3$tertiary = _ref3.tertiary,
      tertiary = _ref3$tertiary === undefined ? false : _ref3$tertiary,
      id = _ref3.id;

  return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
    screen_layout_Container,
    {
      bg: bg || false,
      primary: primary,
      secondary: secondary,
      tertiary: tertiary
    },
    external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      ChildBox,
      null,
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
  bg: prop_types_default.a.string,
  primary: prop_types_default.a.bool,
  secondary: prop_types_default.a.bool,
  tertiary: prop_types_default.a.bool,
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
      console.log(_this.state.selectedId);
      var selectedId = parseInt(_this.state.selectedId);
      var newId = selectedId + 1;
      _this.setState({
        selectedId: newId.toString()
      });
      console.log(newId);
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
        setLanguage = _props.setLanguage,
        texts = _props.texts,
        theme = _props.theme,
        components = _props.components,
        bgs = _props.bgs;

    return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
      external_root_React_commonjs2_react_commonjs_react_amd_react_["Fragment"],
      null,
      external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(navigation_template, {
        setLanguage: setLanguage,
        navItems: texts.navItems,
        selectedId: this.state.selectedId,
        handleTabChange: this.handleTabChange,
        bgColor: theme.nav,
        textColor: theme.text3
      }),
      texts.navItems.map(function (navItem, index) {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
          screen_layout,
          {
            id: _this2.props.id,
            index: index,
            bg: bgs ? bgs[index] : bg_default_default.a,
            scrollNext: _this2.scrollNext,
            scrollPrev: _this2.scrollPrev
          },
          external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(components[index], texts, null)
        );
      })
    );
  };

  return ReactiveLayout;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_["Component"]);

reactive_layout_component_ReactiveLayout.defaultProps = {
  id: "recative-layout"
};

reactive_layout_component_ReactiveLayout.propTypes = {
  infos: prop_types_default.a.any,
  experiences: prop_types_default.a.any,
  formations: prop_types_default.a.any,
  skills: prop_types_default.a.any,
  texts: prop_types_default.a.object.isRequired,
  setLanguage: prop_types_default.a.func,
  theme: prop_types_default.a.object.isRequired
};

var WithTheme = with_theme()(reactive_layout_component_ReactiveLayout);

/* harmony default export */ var reactive_layout_component = (WithTheme);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withData", function() { return src_withData; });
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./exemple/exemple";

// ReactDOM.render(<App defaultLanguage="fr" />, document.getElementById("root"));




var src_ReactiveLayout = reactive_layout_component;
/* harmony default export */ var src = __webpack_exports__["default"] = (src_ReactiveLayout);
var src_withData = with_data;

/***/ })
/******/ ])["default"];
});