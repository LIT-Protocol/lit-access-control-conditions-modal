"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _inputWrapperModule = _interopRequireDefault(require("./input-wrapper.module.scss"));

var _TextField = require("@consta/uikit/TextField");

var _IconClose = require("@consta/uikit/IconClose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InputWrapper = _ref => {
  let {
    type = 'text',
    className,
    id,
    label,
    error,
    value,
    handleChange = () => false,
    readOnly = false,
    autoFocus = false,
    placeholder,
    rightSide,
    size,
    leftSide,
    clearable = false,
    onClear = () => false
  } = _ref;

  const getState = () => {
    if (error) {
      return 'alert';
    }

    return undefined;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_inputWrapperModule.default.input, className)
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/_react.default.createElement("div", null, clearable && /*#__PURE__*/_react.default.createElement(_IconClose.IconClose, {
    size: "s",
    className: _inputWrapperModule.default.clearable,
    onClick: onClear
  }), /*#__PURE__*/_react.default.createElement(_TextField.TextField, {
    readOnly: readOnly,
    type: type,
    id: id,
    state: getState(),
    value: value,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return handleChange(value);
    },
    autoFocus: autoFocus,
    placeholder: placeholder,
    rightSide: rightSide,
    size: size,
    leftSide: leftSide
  })), error && /*#__PURE__*/_react.default.createElement("span", {
    className: _inputWrapperModule.default.error
  }, error));
};

var _default = InputWrapper;
exports.default = _default;