'use strict';

exports.__esModule = true;

var _styles = require('@material-ui/core/styles');

var _indigo = require('@material-ui/core/colors/indigo');

var _indigo2 = _interopRequireDefault(_indigo);

var _pink = require('@material-ui/core/colors/pink');

var _pink2 = _interopRequireDefault(_pink);

var _red = require('@material-ui/core/colors/red');

var _red2 = _interopRequireDefault(_red);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// All the following keys are optional.
// We try our best to provide a great default value.
var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: _indigo2.default,
    secondary: _pink2.default,
    error: _red2.default,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

exports.default = theme;
module.exports = exports['default'];