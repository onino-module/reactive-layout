"use strict";

exports.__esModule = true;
exports.withData = undefined;

var _reactiveLayout = require("./reactive-layout/reactive-layout.component");

var _reactiveLayout2 = _interopRequireDefault(_reactiveLayout);

var _withData = require("./reactive-layout/services/with-data");

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./exemple/exemple";

// ReactDOM.render(<App defaultLanguage="fr" />, document.getElementById("root"));

var ReactiveLayout = _reactiveLayout2.default;
exports.default = ReactiveLayout;
var withData = exports.withData = _withData2.default;