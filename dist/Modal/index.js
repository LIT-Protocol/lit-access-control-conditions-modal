"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _modalModule = _interopRequireDefault(require("./modal.module.scss"));

var _Modal = require("@consta/uikit/Modal");

var _IconClose = require("@consta/uikit/IconClose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ModalComponent = props => {
  const {
    isOpen,
    children,
    title,
    withCloseButton = true,
    unsavedPopup = false,
    onClose = () => false
  } = props;

  const passedProps = _objectSpread({}, props);

  delete passedProps.children;
  delete passedProps.withCloseButton;
  delete passedProps.onClose;
  delete passedProps.unsavedPopup;
  delete passedProps.title;

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_Modal.Modal, _extends({}, passedProps, {
    onOverlayClick: handleClose,
    className: (0, _classnames.default)(passedProps.className, _modalModule.default.modal)
  }), withCloseButton ? /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.closeButton
  }, /*#__PURE__*/_react.default.createElement(_IconClose.IconClose, {
    className: _modalModule.default.icon,
    onClick: handleClose
  })) : null, /*#__PURE__*/_react.default.createElement("div", null, title ? /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.title
  }, title) : null, children));
};

var _default = ModalComponent;
exports.default = _default;