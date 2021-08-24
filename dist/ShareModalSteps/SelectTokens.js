"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _creatable = _interopRequireDefault(require("react-select/creatable"));

var _ethers = require("ethers");

var _litJsSdk = _interopRequireDefault(require("lit-js-sdk"));

var _shareModalModule = _interopRequireDefault(require("../share-modal.module.scss"));

var _tokens = _interopRequireDefault(require("../tokens.json"));

var _Button = require("@consta/uikit/Button");

var _IconBackward = require("@consta/uikit/IconBackward");

var _InputWrapper = _interopRequireDefault(require("../InputWrapper/InputWrapper"));

var _ChainSelector = _interopRequireDefault(require("../ChainSelector/ChainSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SelectTokens = _ref => {
  let {
    setActiveStep,
    onAccessControlConditionsSelected
  } = _ref;
  const [amount, setAmount] = (0, _react.useState)('');
  const [selectedToken, setSelectedToken] = (0, _react.useState)(null);
  const [chain, setChain] = (0, _react.useState)(null);

  const handleSubmit = async () => {
    console.log('handleSubmit and selectedToken is', selectedToken);

    if (selectedToken.value === 'ethereum') {
      // ethereum
      const amountInWei = _ethers.ethers.utils.parseEther(amount);

      const accessControlConditions = [{
        contractAddress: '',
        standardContractType: '',
        chain: chain.value,
        method: 'eth_getBalance',
        parameters: [':userAddress', 'latest'],
        returnValueTest: {
          comparator: '>=',
          value: amountInWei.toString()
        }
      }];
      onAccessControlConditionsSelected(accessControlConditions);
    } else {
      // erc20 token
      console.log('selectedToken', selectedToken);
      let amountInBaseUnit;

      if (selectedToken.decimals) {
        amountInBaseUnit = _ethers.ethers.utils.parseUnits(amount, selectedToken.decimals);
      } else {
        // need to check the contract for decimals
        // this will auto switch the chain to the selected one in metamask
        const authSig = await _litJsSdk.default.checkAndSignAuthMessage({
          chain: chain.value
        });
        let decimals = 0;

        try {
          decimals = await _litJsSdk.default.decimalPlaces({
            contractAddress: selectedToken.value
          });
        } catch (e) {
          console.log(e);
        }

        console.log("decimals in ".concat(selectedToken.value), decimals);
        amountInBaseUnit = _ethers.ethers.utils.parseUnits(amount, decimals);
      }

      const accessControlConditions = [{
        contractAddress: selectedToken.address,
        standardContractType: 'ERC20',
        chain,
        method: 'balanceOf',
        parameters: [':userAddress'],
        returnValueTest: {
          comparator: '>=',
          value: amountInBaseUnit.toString()
        }
      }];
      onAccessControlConditionsSelected(accessControlConditions);
    }

    setActiveStep('accessCreated');
  };

  const formatOptionLabel = (option, extra) => {
    const {
      name,
      logoURI,
      value
    } = option;
    const {
      inputValue
    } = extra; // console.log('option', option)
    // console.log('extra', extra)

    if (inputValue) {
      return inputValue;
    }

    if (value) {
      return value;
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: "flex"
      }
    }, logoURI ? /*#__PURE__*/_react.default.createElement("img", {
      className: _shareModalModule.default.selectIcon,
      src: logoURI,
      alt: "img"
    }) : null, /*#__PURE__*/_react.default.createElement("div", null, name));
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.back,
    onClick: () => setActiveStep('ableToAccess')
  }, /*#__PURE__*/_react.default.createElement(_IconBackward.IconBackward, {
    view: "link",
    className: _shareModalModule.default.icon
  }), " Back"), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Which wallets should be able to access this file?")), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.select
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _shareModalModule.default.label
  }, "Select blockchain"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.select
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _shareModalModule.default.label
  }, "Select token"), /*#__PURE__*/_react.default.createElement(_creatable.default, {
    isClearable: true,
    defaultValue: '',
    formatOptionLabel: formatOptionLabel,
    getOptionValue: option => option.address,
    options: [{
      name: 'Ethereum',
      logoURI: null,
      address: 'ethereum'
    }, ..._tokens.default.tokens],
    value: selectedToken // getNewOptionData={inputValue => ({ name: inputValue })}
    ,
    onChange: value => setSelectedToken(value)
  })), /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: amount,
    className: _shareModalModule.default.input,
    label: "How many tokens does the wallet need to own?",
    id: "amount",
    autoFocus: true,
    size: "m",
    handleChange: value => setAmount(value)
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: "Create Requirement",
    className: _shareModalModule.default.btn,
    size: "l",
    onClick: handleSubmit,
    disabled: !amount || !selectedToken || !chain
  })));
};

var _default = SelectTokens;
exports.default = _default;