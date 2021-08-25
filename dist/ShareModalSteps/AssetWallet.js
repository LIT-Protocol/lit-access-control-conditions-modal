"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _shareModalModule = _interopRequireDefault(require("../share-modal.module.scss"));

var _Button = require("@consta/uikit/Button");

var _IconBackward = require("@consta/uikit/IconBackward");

var _InputWrapper = _interopRequireDefault(require("../InputWrapper/InputWrapper"));

var _ChainSelector = _interopRequireDefault(require("../ChainSelector/ChainSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AssetWallet = _ref => {
  let {
    setActiveStep,
    onAccessControlConditionsSelected
  } = _ref;
  const [contractAddress, setContractAddress] = (0, _react.useState)('');
  const [tokenId, setTokenId] = (0, _react.useState)('');
  const [chain, setChain] = (0, _react.useState)(null);

  const handleSubmit = () => {
    const accessControlConditions = [{
      contractAddress: contractAddress,
      standardContractType: 'ERC721',
      chain: chain.value,
      method: 'ownerOf',
      parameters: [tokenId],
      returnValueTest: {
        comparator: '=',
        value: ':userAddress'
      }
    }];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep('accessCreated');
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.back,
    onClick: () => setActiveStep('whichWallet')
  }, /*#__PURE__*/_react.default.createElement(_IconBackward.IconBackward, {
    view: "link",
    className: _shareModalModule.default.icon
  }), " Back"), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Which asset does a wallet need to own to access this file?")), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.select
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _shareModalModule.default.label
  }, "Select blockchain"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  })), /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: contractAddress,
    className: _shareModalModule.default.input,
    label: "Add Contract Address",
    id: "contractAddress",
    autoFocus: true,
    size: "m",
    handleChange: value => setContractAddress(value)
  }), /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: tokenId,
    className: _shareModalModule.default.input,
    label: "Add Token ID",
    id: "tokenId",
    size: "m",
    handleChange: value => setTokenId(value)
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: "Create Requirement",
    className: _shareModalModule.default.btn,
    onClick: handleSubmit,
    size: "l",
    disabled: !contractAddress || !tokenId || !chain
  })));
};

var _default = AssetWallet;
exports.default = _default;