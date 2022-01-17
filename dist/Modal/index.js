"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

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

const styles = ".modalContainer {\n  position: relative;\n}\n.modalContainer .modal {\n  border-radius: 10px;\n  border: 1px solid #333;\n  display: flex;\n  justify-content: space-between;\n}\n.modalContainer .modal .title {\n  width: 100%;\n  background-color: rgba(158, 119, 243, 0.1);\n  padding: 19px 25px;\n  font-family: \"Space Grotesk\";\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 26px;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(0, 5, 51, 0.6);\n  box-sizing: border-box;\n}\n.modalContainer .modal .closeButton {\n  position: absolute;\n  top: 20px;\n  right: 25px;\n}\n.modalContainer .modal .closeButton .icon {\n  cursor: pointer;\n}\n.modalContainer .modal.dark {\n  background-color: #ece3ff;\n  border: 2px solid #5E36B7;\n}\n.modalContainer .modal.dark .title {\n  color: #BFA1FF;\n  background-color: #5E36B7;\n  box-shadow: 0px 4px 4px rgba(94, 54, 183, 0.5);\n}\n.modalContainer .modal.dark .closeButton .icon {\n  color: #BFA1FF;\n}";

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
    className: styles.modalContainer
  }, /*#__PURE__*/_react.default.createElement(_UnsavedPopup.default, {
    open: showUnsavedPopup,
    onClose: onClose,
    onCancel: () => setShowUnsavedPopup(false)
  }), /*#__PURE__*/_react.default.createElement(_material.Modal, _extends({
    open: isOpen
  }, passedProps, {
    className: (0, _classnames.default)(passedProps.className, styles.modal && styles.dark),
    hideBackdrop: true
  }), /*#__PURE__*/_react.default.createElement(_material.Box, {
    className: styles.modal
  }, withCloseButton ? /*#__PURE__*/_react.default.createElement("div", {
    className: styles.closeButton
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    className: styles.icon,
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Close, null))) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.inner
  }, title ? /*#__PURE__*/_react.default.createElement("div", {
    className: styles.title
  }, title) : null, children))));
};

var _default = ModalComponent;
exports.default = _default;