"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const styles = ".titles h3 {\n  color: var(--color-typo-primary);\n  font-size: 1.5em;\n  margin: 0 0 var(--space-s);\n}\n@media (max-width: 600px) {\n  .titles h3 {\n    font-size: 1.2em;\n    margin: 0 0 10px;\n  }\n}\n@media (max-width: 450px) {\n  .titles h3 {\n    font-size: 1em;\n    margin: 0 0 10px;\n  }\n}\n\n.types {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n@media (max-width: 400px) {\n  .types {\n    flex-direction: column;\n  }\n}\n\n.type {\n  margin-top: 0.5rem;\n  padding: 0.75rem;\n  width: 100%;\n  border: 1px solid #2c0c72;\n  cursor: pointer;\n  border-radius: 4px;\n}\n@media (max-width: 600px) {\n  .type {\n    flex: 0 1 150px;\n    margin: 10px;\n  }\n}\n.type h4 {\n  font-size: 1.2em;\n  text-align: center;\n  margin: 0 0 var(--space-m);\n  color: var(--color-typo-primary);\n}\n@media (max-width: 600px) {\n  .type h4 {\n    font-size: 1em;\n  }\n}\n.type .btnBock {\n  border-radius: 4px;\n  border: 1px solid var(--color-bg-brand);\n  padding: var(--space-xl);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  transition: all 0.3s;\n}\n.type .btnBock .lockIcon {\n  background-image: url(\"../../assets/lock.png\");\n  margin: 24px 20px;\n}\n.type .btnBock .linkIcon {\n  background-image: url(\"../../assets/link.png\");\n  margin: 20px;\n}\n.type .btnBock .lockIcon,\n.type .btnBock .linkIcon {\n  filter: grayscale(1);\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 60px;\n  height: 60px;\n}\n.type .btnBock svg path {\n  fill: var(--color-bg-brand);\n}\n.type .btnBock h5 {\n  text-align: center;\n  margin: 0;\n  color: var(--color-typo-primary);\n}";

const WhatToDo = _ref => {
  let {
    setActiveStep,
    sharingItems,
    onlyAllowCopySharingLink,
    copyToClipboard,
    copyLinkText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "What would you like to do?")), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.types
  }, !onlyAllowCopySharingLink ? /*#__PURE__*/_react.default.createElement("div", {
    className: styles.type,
    onClick: () => setActiveStep("ableToAccess")
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Create Requirement"), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.btnBock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.lockIcon
  }), /*#__PURE__*/_react.default.createElement("h5", null, "Lock this content with an existing token, NFT, or contract"))) : null, sharingItems.length === 1 && (sharingItems[0].accessControlConditions || onlyAllowCopySharingLink) ? /*#__PURE__*/_react.default.createElement("div", {
    className: styles.type,
    onClick: () => copyToClipboard()
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Share"), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.btnBock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.linkIcon
  }), /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("a", {
    className: styles.link
  }, "Click to copy link."), " ", /*#__PURE__*/_react.default.createElement("br", null), copyLinkText || "Only authorized wallets can open the file"))) : null));
};

var _default = WhatToDo;
exports.default = _default;