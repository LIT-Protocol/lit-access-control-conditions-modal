"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactSelectVirtualized = require("react-select-virtualized");

var _assetWalletModule = _interopRequireDefault(require("./asset-wallet.module.scss"));

var _InputWrapper = _interopRequireDefault(require("../../InputWrapper/InputWrapper"));

var _ChainSelector = _interopRequireDefault(require("../../ChainSelector/ChainSelector"));

var _Navigation = _interopRequireDefault(require("../../Navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import styles from "../../share-modal.module.scss";
const AssetWallet = _ref => {
  let {
    setActiveStep,
    onAccessControlConditionsSelected,
    tokenList
  } = _ref;
  const [tokenId, setTokenId] = (0, _react.useState)("");
  const [chain, setChain] = (0, _react.useState)(null);
  const [selectedToken, setSelectedToken] = (0, _react.useState)(null);
  const tokenSelectBoxRows = (0, _react.useMemo)(() => {
    return tokenList.filter(t => {
      var _t$standard;

      return ((_t$standard = t.standard) === null || _t$standard === void 0 ? void 0 : _t$standard.toLowerCase()) === "erc721";
    }).map(t => ({
      label: t.name,
      value: t.address
    }));
  }, [tokenList]);

  const handleSubmit = () => {
    const accessControlConditions = [{
      contractAddress: selectedToken.value,
      standardContractType: "ERC721",
      chain: chain.value,
      method: "ownerOf",
      parameters: [tokenId],
      returnValueTest: {
        comparator: "=",
        value: ":userAddress"
      }
    }];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep("accessCreated");
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _assetWalletModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Which asset does a wallet need to own to access this?"), /*#__PURE__*/_react.default.createElement("a", {
    className: _assetWalletModule.default.link,
    onClick: () => setActiveStep("whichWallet")
  }, "Grant Access to Wallet or Blockchain Domain")), /*#__PURE__*/_react.default.createElement("div", {
    className: _assetWalletModule.default.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _assetWalletModule.default.select
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: _assetWalletModule.default.label
  }, "Select blockchain"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _assetWalletModule.default.select
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: _assetWalletModule.default.label
  }, "Select token or enter contract address"), /*#__PURE__*/_react.default.createElement(_reactSelectVirtualized.Creatable, {
    isClearable: true,
    isSearchable: true,
    defaultValue: "",
    options: tokenSelectBoxRows,
    onChange: value => setSelectedToken(value)
  })), /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: tokenId,
    className: _assetWalletModule.default.input,
    label: "Add Token ID",
    id: "tokenId",
    size: "m",
    handleChange: value => setTokenId(value)
  })), /*#__PURE__*/_react.default.createElement(_Navigation.default, {
    backward: {
      onClick: () => setActiveStep("ableToAccess")
    },
    forward: {
      label: "Create Requirement",
      onClick: handleSubmit,
      withoutIcon: true,
      disabled: !tokenId || !chain
    }
  }));
};

var _default = AssetWallet;
exports.default = _default;