"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navigation = require("./components/navigation.template");

var _navigation2 = _interopRequireDefault(_navigation);

var _screen = require("./components/screen.layout");

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactiveLayout = function (_Component) {
  _inherits(ReactiveLayout, _Component);

  function ReactiveLayout() {
    _classCallCheck(this, ReactiveLayout);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

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

    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_navigation2.default, {
        id: this.props.id,
        navItems: navItems,
        selectedId: this.state.selectedId,
        handleTabChange: this.handleTabChange
      }),
      navItems.map(function (navItem, index) {
        return _react2.default.createElement(
          _screen2.default,
          {
            key: _this2.props.id + index,
            id: _this2.props.id,
            index: index,
            scrollNext: _this2.scrollNext,
            scrollPrev: _this2.scrollPrev
          },
          _react2.default.createElement(components[index])
        );
      })
    );
  };

  return ReactiveLayout;
}(_react.Component);

ReactiveLayout.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes2.default.string.isRequired,
  navItems: _propTypes2.default.array.isRequired,
  components: _propTypes2.default.array.isRequired
} : {};

exports.default = ReactiveLayout;
module.exports = exports["default"];