"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = ".error {\n  color: var(--color-typo-alert);\n  font-size: 14px;\n  line-height: 100%;\n  padding-left: 10px;\n  margin-top: 4px;\n}\n\n.clearable {\n  position: absolute;\n  right: 10px;\n  bottom: 31%;\n  z-index: 2;\n  color: var(--color-control-typo-placeholder);\n  cursor: pointer;\n}\n\n.input {\n  display: flex;\n  flex-direction: column;\n}\n.input > div {\n  width: 100%;\n  position: relative;\n}\n.input > div > div {\n  width: 100%;\n  border-color: rgba(0, 66, 105, 0.28);\n}\n\n.employeeMainInput {\n  flex: 1 1 auto;\n}\n\n.employeeMainInput {\n  flex: 1 1 auto;\n}";

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
    className: (0, _classnames.default)(styles.input, className)
  }, label && /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/_react.default.createElement("div", null, clearable && /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    size: "s",
    className: styles.clearable,
    onClick: onClear
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Close, null)), /*#__PURE__*/_react.default.createElement(_material.TextField, {
    readOnly: readOnly,
    type: type,
    id: id,
    state: getState(),
    value: value,
    onChange: event => handleChange(event.target.value),
    autoFocus: autoFocus,
    placeholder: placeholder,
    size: size
  })), error && /*#__PURE__*/_react.default.createElement("span", {
    className: styles.error
  }, error));
};

var _default = InputWrapper;
exports.default = _default;