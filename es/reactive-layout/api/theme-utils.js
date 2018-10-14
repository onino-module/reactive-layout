
export var isPc = function isPc(arg1, arg2) {
  return function (_ref) {
    var theme = _ref.theme;
    return theme.device === "pc" ? arg1 : arg2;
  };
};

export var isPrim = function isPrim(arg1, arg2) {
  return function (_ref2) {
    var theme = _ref2.theme,
        primary = _ref2.primary;
    return primary ? theme[arg1] : theme[arg2];
  };
};

export var getTheme = function getTheme(key) {
  return function (_ref3) {
    var theme = _ref3.theme;
    return theme[key];
  };
};

export var getTextColor = function getTextColor(_ref4) {
  var theme = _ref4.theme,
      primary = _ref4.primary,
      secondary = _ref4.secondary,
      tertiary = _ref4.tertiary;

  if (primary) return theme.text1;
  if (secondary) return theme.text2;
  if (tertiary) return theme.text3;
  return theme.text;
};

export var getBgColor = function getBgColor(_ref5) {
  var theme = _ref5.theme,
      primary = _ref5.primary,
      secondary = _ref5.secondary,
      tertiary = _ref5.tertiary;

  if (primary) return theme.bg4;
  if (secondary) return theme.bg2;
  if (tertiary) return theme.bg3;
  return theme.bg;
};