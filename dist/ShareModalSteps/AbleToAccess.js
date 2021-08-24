"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _shareModalModule = _interopRequireDefault(require("../share-modal.module.scss"));

var _IconBackward = require("@consta/uikit/IconBackward");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AbleToAccess = _ref => {
  let {
    setActiveStep
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.ableToAccess
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.back,
    onClick: () => setActiveStep('whatToDo')
  }, /*#__PURE__*/_react.default.createElement(_IconBackward.IconBackward, {
    view: "link",
    className: _shareModalModule.default.icon
  }), " Back"), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Who should be able to access this file?")), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.types
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.type,
    onClick: () => setActiveStep('whichWallet')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.btnBock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.imgIcon
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.walletIcon
  })), /*#__PURE__*/_react.default.createElement("h5", null, "An Individual Wallet"))), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.type,
    onClick: () => setActiveStep('selectTokens')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.btnBock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.imgIcon
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.tokenIcon
  })), /*#__PURE__*/_react.default.createElement("h5", null, "A Group of Token or NFT Owners"))), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.type,
    onClick: () => setActiveStep('DAOMembers')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.btnBock
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.imgIcon
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.daoIcon
  })), /*#__PURE__*/_react.default.createElement("h5", null, "DAO Members")))));
};

var _default = AbleToAccess;
exports.default = _default;