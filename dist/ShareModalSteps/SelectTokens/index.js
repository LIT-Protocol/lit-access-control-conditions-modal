"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _ethers = require("ethers");

var _litJsSdk = _interopRequireDefault(require("lit-js-sdk"));

var _IconClose = require("@consta/uikit/IconClose");

var _Button = require("@consta/uikit/Button");

var _selectTokensModule = _interopRequireDefault(require("./select-tokens.module.scss"));

var _InputWrapper = _interopRequireDefault(require("../../InputWrapper/InputWrapper"));

var _ChainSelector = _interopRequireDefault(require("../../ChainSelector/ChainSelector"));

var _Navigation = _interopRequireDefault(require("../../Navigation"));

var _TokenSelect = _interopRequireDefault(require("../../TokenSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SelectTokens = _ref => {
  var _ref2;

  let {
    setActiveStep,
    onAccessControlConditionsSelected,
    tokenList
  } = _ref;
  const [amount, setAmount] = (0, _react.useState)("");
  const [selectedToken, setSelectedToken] = (0, _react.useState)(null);
  const [contractAddress, setContractAddress] = (0, _react.useState)("");
  const [chain, setChain] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    console.log('CONTRACT ADDRESS', contractAddress);
  }, [contractAddress]);

  const handleSubmit = async () => {
    console.log("handleSubmit and selectedToken is", selectedToken);

    if (selectedToken.value === "ethereum") {
      // ethereum
      const amountInWei = _ethers.ethers.utils.parseEther(amount);

      const accessControlConditions = [{
        contractAddress: "",
        standardContractType: "",
        chain: chain.value,
        method: "eth_getBalance",
        parameters: [":userAddress", "latest"],
        returnValueTest: {
          comparator: ">=",
          value: amountInWei.toString()
        }
      }];
      onAccessControlConditionsSelected(accessControlConditions);
    } else {
      var _selectedToken$standa;

      console.log("selectedToken", selectedToken);
      let tokenType;

      if (((_selectedToken$standa = selectedToken.standard) === null || _selectedToken$standa === void 0 ? void 0 : _selectedToken$standa.toLowerCase()) === "erc721") {
        tokenType = "erc721";
      } else if (selectedToken.decimals) {
        tokenType = "erc20";
      } else {
        // if we don't already know the type, try and get decimal places.  if we get back 0 or the request fails then it's probably erc721.
        let decimals = 0;

        try {
          decimals = await _litJsSdk.default.decimalPlaces({
            contractAddress: selectedToken.value
          });
        } catch (e) {
          console.log(e);
        }

        if (decimals == 0) {
          tokenType = "erc721";
        } else {
          tokenType = "erc20";
        }
      }

      console.log("tokenType is", tokenType);

      if (tokenType == "erc721") {
        // erc721
        const accessControlConditions = [{
          contractAddress: selectedToken.value,
          standardContractType: "ERC721",
          chain: chain.value,
          method: "balanceOf",
          parameters: [":userAddress"],
          returnValueTest: {
            comparator: ">=",
            value: amount.toString()
          }
        }];
        onAccessControlConditionsSelected(accessControlConditions);
      } else {
        // erc20 token
        let amountInBaseUnit;

        if (selectedToken.decimals) {
          amountInBaseUnit = _ethers.ethers.utils.parseUnits(amount, selectedToken.decimals);
        } else {
          // need to check the contract for decimals
          // this will auto switch the chain to the selected one in metamask
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
          contractAddress: selectedToken.value,
          standardContractType: "ERC20",
          chain: chain.value,
          method: "balanceOf",
          parameters: [":userAddress"],
          returnValueTest: {
            comparator: ">=",
            value: amountInBaseUnit.toString()
          }
        }];
        onAccessControlConditionsSelected(accessControlConditions);
      }
    }

    setActiveStep("accessCreated");
  }; // const formatOptionLabel = (option, extra) => {
  //   const { name, logoURI, value } = option
  //   const { inputValue } = extra
  //   // console.log('option', option)
  //   // console.log('extra', extra)
  //   if (inputValue) {
  //     return inputValue
  //   }
  //   if (value) {
  //     return value
  //   }
  //   return (
  //     <div style={{ display: "flex" }}>
  //       {logoURI ?
  //         <img className={styles.selectIcon} src={logoURI} alt="img" />
  //         : null
  //       }
  //       <div>{name}</div>
  //     </div>
  //   )
  // };


  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.title
  }, "Which wallet should be able to access this file?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.inputMaxWidth
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.select
  }, /*#__PURE__*/_react.default.createElement("label", null, "Select blockchain to check requirements against:"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.select
  }, /*#__PURE__*/_react.default.createElement("label", null, "Select token/NFT or enter contract address: "), /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.tokenOrContractAddress
  }, (!contractAddress || !contractAddress.length) && /*#__PURE__*/_react.default.createElement(_TokenSelect.default, {
    className: _selectTokensModule.default.tokenSelect,
    tokenList: tokenList,
    onSelect: setSelectedToken
  }), (!contractAddress || !contractAddress.length) && !selectedToken && /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.separator
  }, "OR"), !selectedToken && /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    placeholder: "ERC20 or ERC721 address",
    value: contractAddress,
    className: _selectTokensModule.default.input,
    id: "amount",
    autoFocus: true,
    size: "m",
    handleChange: setContractAddress
  }), !selectedToken && contractAddress && contractAddress.length && /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: _selectTokensModule.default.clearButton,
    iconRight: _IconClose.IconClose,
    onlyIcon: true,
    size: 's',
    onClick: () => setContractAddress('')
  }), !!selectedToken && !contractAddress && !contractAddress.length && /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.selectedTokenContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.logo,
    style: {
      backgroundImage: (_ref2 = "url(".concat(selectedToken.logo, ")")) !== null && _ref2 !== void 0 ? _ref2 : undefined
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.symbol
  }, selectedToken.symbol), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: _selectTokensModule.default.clearButton,
    iconRight: _IconClose.IconClose,
    onlyIcon: true,
    size: 'xs',
    onClick: () => setSelectedToken(null)
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: _selectTokensModule.default.inputMaxWidth
  }, /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: amount,
    className: _selectTokensModule.default.input,
    label: "How many tokens does the wallet need to own?",
    id: "amount",
    autoFocus: true,
    size: "m",
    handleChange: value => setAmount(value)
  }))), /*#__PURE__*/_react.default.createElement(_Navigation.default, {
    backward: {
      onClick: () => setActiveStep("ableToAccess")
    },
    forward: {
      label: "Create Requirement",
      onClick: handleSubmit,
      withoutIcon: true,
      disabled: !amount || !(selectedToken || contractAddress) || !chain
    }
  }));
};

var _default = SelectTokens;
exports.default = _default;