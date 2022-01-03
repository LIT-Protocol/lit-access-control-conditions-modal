"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _whatToDoModule = _interopRequireDefault(require("./what-to-do.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WhatToDo = _ref => {
  let {
    setActiveStep,
    sharingItems,
    onlyAllowCopySharingLink,
    copyToClipboard,
    copyLinkText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _whatToDoModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "What would you like to do?")), /*#__PURE__*/_react.default.createElement("div", {
    className: _whatToDoModule.default.types
  }, !onlyAllowCopySharingLink ? /*#__PURE__*/_react.default.createElement("div", {
    className: _whatToDoModule.default.type,
    onClick: () => setActiveStep("ableToAccess")
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Create Requirement"), /*#__PURE__*/_react.default.createElement("div", {
    className: _whatToDoModule.default.btnBock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _whatToDoModule.default.lockIcon
  }), /*#__PURE__*/_react.default.createElement("h5", null, "Lock this content with an existing token, NFT, or contract"))) : null, sharingItems.length === 1 && (sharingItems[0].accessControlConditions || onlyAllowCopySharingLink) ? /*#__PURE__*/_react.default.createElement("div", {
    className: _whatToDoModule.default.type,
    onClick: () => copyToClipboard()
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Share"), /*#__PURE__*/_react.default.createElement("div", {
    className: _whatToDoModule.default.btnBock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _whatToDoModule.default.linkIcon
  }), /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("a", {
    className: _whatToDoModule.default.link
  }, "Click to copy link."), " ", /*#__PURE__*/_react.default.createElement("br", null), copyLinkText || "Only authorized wallets can open the file"))) : null));
};

var _default = WhatToDo;
exports.default = _default;