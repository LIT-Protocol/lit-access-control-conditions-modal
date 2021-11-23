"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _litJsSdk = _interopRequireDefault(require("lit-js-sdk"));

var _whichWalletModule = _interopRequireDefault(require("./which-wallet.module.scss"));

var _InputWrapper = _interopRequireDefault(require("../../InputWrapper/InputWrapper"));

var _ChainSelector = _interopRequireDefault(require("../../ChainSelector/ChainSelector"));

var _FileDropper = _interopRequireDefault(require("../../FileDropper"));

var _Navigation = _interopRequireDefault(require("../../Navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WhichWallet = _ref => {
  let {
    setActiveStep,
    onAccessControlConditionsSelected,
    setError
  } = _ref;
  const [walletAddress, setWalletAddress] = (0, _react.useState)("");
  const [chain, setChain] = (0, _react.useState)(null);
  const [nftOwnership, setNftOwnership] = (0, _react.useState)(null);

  const handleSubmit = async () => {
    let resolvedAddress = walletAddress;

    if (walletAddress.includes(".")) {
      // do domain name lookup
      resolvedAddress = await _litJsSdk.default.lookupNameServiceAddress({
        chain: chain.value,
        name: walletAddress
      });

      if (!resolvedAddress) {
        console.log("failed to resolve ENS address");
        setError({
          title: "Could not resolve ENS address",
          details: "Try another wallet address"
        });
        return;
      }
    }

    const accessControlConditions = [{
      contractAddress: "",
      standardContractType: "",
      chain: chain.value,
      method: "",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: "=",
        value: resolvedAddress
      }
    }];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep("accessCreated");
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _whichWalletModule.default.title
  }, "Which wallet should be able to access this?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _whichWalletModule.default.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _whichWalletModule.default.select
  }, /*#__PURE__*/_react.default.createElement("label", null, "Select blockchain"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  })), /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: walletAddress,
    className: _whichWalletModule.default.input,
    label: "Add Wallet Address or Blockchain Domain (e.g. ENS, UNS) here:",
    id: "walletAddress",
    autoFocus: true,
    size: "m",
    handleChange: value => setWalletAddress(value)
  }), /*#__PURE__*/_react.default.createElement(_FileDropper.default, {
    className: _whichWalletModule.default.filedropper,
    onFilesSelected: setNftOwnership
  })), /*#__PURE__*/_react.default.createElement(_Navigation.default, {
    backward: {
      onClick: () => setActiveStep("ableToAccess")
    },
    forward: {
      label: "Create Requirment",
      onClick: handleSubmit,
      withoutIcon: true,
      disabled: !walletAddress || !chain
    }
  }));
};

var _default = WhichWallet;
exports.default = _default;