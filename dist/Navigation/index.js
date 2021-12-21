"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _navigationModule = _interopRequireDefault(require("./navigation.module.scss"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Navigation = props => {
  var _backward$label, _forward$label;

  const {
    backward,
    forward
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _navigationModule.default.navigation
  }, backward ? /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: 'outlined',
    onClick: backward.onClick,
    size: 'large',
    startIcon: /*#__PURE__*/_react.default.createElement(_iconsMaterial.ArrowBack, null)
  }, (_backward$label = backward === null || backward === void 0 ? void 0 : backward.label) !== null && _backward$label !== void 0 ? _backward$label : 'Back') : null, forward ? /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: forward.onClick,
    variant: 'contained',
    size: 'large',
    disabled: forward.disabled,
    endIcon: /*#__PURE__*/_react.default.createElement(_iconsMaterial.ArrowForward, null)
  }, (_forward$label = forward.label) !== null && _forward$label !== void 0 ? _forward$label : 'Next') : null);
};

var _default = Navigation;
exports.default = _default;