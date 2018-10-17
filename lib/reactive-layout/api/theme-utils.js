"use strict";

exports.__esModule = true;
var isPc = exports.isPc = function isPc(arg1, arg2) {
  return function (_ref) {
    var theme = _ref.theme;
    return theme.device === "pc" ? arg1 : arg2;
  };
};

var isPrim = exports.isPrim = function isPrim(arg1, arg2) {
  return function (_ref2) {
    var theme = _ref2.theme,
        primary = _ref2.primary;
    return primary ? theme[arg1] : theme[arg2];
  };
};

var getTheme = exports.getTheme = function getTheme(key) {
  return function (_ref3) {
    var theme = _ref3.theme;
    return theme[key];
  };
};

var getTextColor = exports.getTextColor = function getTextColor(_ref4) {
  var theme = _ref4.theme,
      primary = _ref4.primary,
      secondary = _ref4.secondary,
      tertiary = _ref4.tertiary;

  if (primary) return theme.colors.text1;
  if (secondary) return theme.colors.text2;
  if (tertiary) return theme.colors.text3;
  return theme.text;
};

var getBgColor = exports.getBgColor = function getBgColor(_ref5) {
  var theme = _ref5.theme,
      primary = _ref5.primary,
      secondary = _ref5.secondary,
      tertiary = _ref5.tertiary;

  if (primary) return theme.colors.bg4;
  if (secondary) return theme.colors.bg2;
  if (tertiary) return theme.colors.bg3;
  return theme.colors.bg;
};