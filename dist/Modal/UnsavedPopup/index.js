"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = ".unsavedPopupWrapper {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.48);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n}\n.unsavedPopupWrapper .unsavedPopup {\n  background: #fff;\n  margin: 0 auto;\n  width: 275px;\n  font-size: 14px;\n  padding: 14px 8px 20px 8px;\n  text-align: center;\n  border-radius: 4px;\n}\n.unsavedPopupWrapper .unsavedPopup .buttons {\n  margin-top: 18px;\n  display: flex;\n  justify-content: space-between;\n}";

const UnsavedPopup = props => {
  const {
    onClose,
    onCancel,
    open
  } = props;
  return /*#__PURE__*/_react.default.createElement(_material.Modal, {
    open: open,
    className: styles.unsavedPopupWrapper,
    hideBackdrop: true
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: styles.unsavedPopup
  }, "You have unsaved changes. Are you sure you want to exit?", /*#__PURE__*/_react.default.createElement("div", {
    className: styles.buttons
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