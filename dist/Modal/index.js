"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _modalModule = _interopRequireDefault(require("./modal.module.scss"));

var _material = require("@mui/material");

var _UnsavedPopup = _interopRequireDefault(require("./UnsavedPopup"));

var _iconsMaterial = require("@mui/icons-material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ModalComponent = props => {
  const {
    isOpen,
    children,
    title,
    darkMode,
    withCloseButton = true,
    unsavedPopup = false,
    onClose = () => false
  } = props;
  const [showUnsavedPopup, setShowUnsavedPopup] = (0, _react.useState)(false);

  const passedProps = _objectSpread({}, props);

  delete passedProps.children;
  delete passedProps.isOpen;
  delete passedProps.withCloseButton;
  delete passedProps.onClose;
  delete passedProps.unsavedPopup;
  delete passedProps.title;

  const handleClose = () => {
    if (!unsavedPopup) {
      onClose();
    } else {
      setShowUnsavedPopup(true);
    }
  };

  if (!isOpen) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.modalContainer
  }, /*#__PURE__*/_react.default.createElement(_UnsavedPopup.default, {
    open: showUnsavedPopup,
    onClose: onClose,
    onCancel: () => setShowUnsavedPopup(false)
  }), /*#__PURE__*/_react.default.createElement(_material.Modal, _extends({
    open: isOpen
  }, passedProps, {
    className: (0, _classnames.default)(passedProps.className, _modalModule.default.modal && _modalModule.default.dark),
    hideBackdrop: true
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: _modalModule.default.modal
  }, withCloseButton ? /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.closeButton
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    className: _modalModule.default.icon,
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Close, null))) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.inner
  }, title ? /*#__PURE__*/_react.default.createElement("div", {
    className: _modalModule.default.title
  }, title) : null, children))));
};

var _default = ModalComponent;
exports.default = _default;