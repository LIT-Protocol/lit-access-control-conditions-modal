"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _unsavedPopupModule = _interopRequireDefault(require("./unsaved-popup.module.scss"));

var _Button = require("@consta/uikit/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UnsavedPopup = props => {
  const {
    onClose,
    onCancel
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _unsavedPopupModule.default.unsavedPopupWrapper
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _unsavedPopupModule.default.unsavedPopup
  }, "You have unsaved changes. Are you sure you want to exit?", /*#__PURE__*/_react.default.createElement("div", {
    className: _unsavedPopupModule.default.buttons
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    size: "m",
    label: "No, keep editing",
    onClick: onCancel
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    size: "m",
    label: "Yes, exit.",
    view: "ghost",
    onClick: onClose
  }))));
};

var _default = UnsavedPopup;
exports.default = _default;