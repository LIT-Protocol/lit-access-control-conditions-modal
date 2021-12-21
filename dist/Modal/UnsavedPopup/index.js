"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _unsavedPopupModule = _interopRequireDefault(require("./unsaved-popup.module.scss"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UnsavedPopup = props => {
  const {
    onClose,
    onCancel,
    open
  } = props;
  return /*#__PURE__*/_react.default.createElement(_material.Modal, {
    open: open,
    className: _unsavedPopupModule.default.unsavedPopupWrapper,
    hideBackdrop: true
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: _unsavedPopupModule.default.unsavedPopup
  }, "You have unsaved changes. Are you sure you want to exit?", /*#__PURE__*/_react.default.createElement("div", {
    className: _unsavedPopupModule.default.buttons
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: 'contained',
    onClick: onCancel
  }, "No, keep editing"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: 'contained',
    color: 'grey',
    onClick: onClose
  }, "Yes, exit"))));
};

var _default = UnsavedPopup;
exports.default = _default;