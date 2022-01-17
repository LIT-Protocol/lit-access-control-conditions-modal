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

var _InputWrapper = _interopRequireDefault(require("../../InputWrapper/InputWrapper"));

var _ChainSelector = _interopRequireDefault(require("../../ChainSelector/ChainSelector"));

var _Navigation = _interopRequireDefault(require("../../Navigation"));

var _TokenSelect = _interopRequireDefault(require("../../TokenSelect"));

var _iconsMaterial = require("@mui/icons-material");

var _material = require("@mui/material");

var _Switch = _interopRequireDefault(require("@mui/material/Switch"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _Stack = _interopRequireDefault(require("@mui/material/Stack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const styles = ".title {\n  font-size: 18px;\n  line-height: 150%;\n  color: rgba(0, 5, 51, 0.6);\n}\n\nlabel {\n  display: block;\n  color: rgba(0, 5, 51, 0.6);\n  font-size: 16px;\n  line-height: 150%;\n  margin-bottom: 8px;\n}\n@media (max-width: 700px) {\n  label {\n    font-size: 16px;\n    line-height: 150%;\n  }\n}\n@media (max-width: 450px) {\n  label {\n    font-size: 14px;\n    line-height: 150%;\n  }\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.tokenTypeHolder {\n  margin-top: 24px;\n}\n\n.form {\n  margin-top: 1rem;\n}\n.form .select {\n  margin-top: 1rem;\n}\n.form .input {\n  margin-top: 1rem;\n}\n.form .tokenOrContractAddress {\n  display: flex;\n  align-items: center;\n  transition-duration: 0.2s;\n}\n.form .tokenOrContractAddress .leftSelect {\n  display: flex;\n  align-items: center;\n}\n.form .tokenOrContractAddress .tokenSelect {\n  animation-name: fadein;\n  animation-duration: 0.25s;\n}\n.form .tokenOrContractAddress .separator {\n  margin: 0 14px;\n  color: rgba(0, 5, 51, 0.6);\n  font-size: 14px;\n}\n.form .tokenOrContractAddress .input {\n  margin-top: 0;\n  width: 250px;\n  animation-name: fadein;\n  animation-duration: 0.25s;\n}\n.form .tokenOrContractAddress .clearButton {\n  transition-duration: 0.2s;\n  margin-left: 1rem;\n  border-radius: 100%;\n  animation-name: fadein;\n  animation-duration: 0.25s;\n}\n.form .tokenOrContractAddress .selectedTokenContainer {\n  padding: 0 5px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  border: 1.25px solid #2c0c72;\n  border-radius: 5px;\n  margin: 0.57rem 8px 0.58rem 0;\n  cursor: pointer;\n  animation-name: fadein;\n  animation-duration: 0.25s;\n}\n.form .tokenOrContractAddress .selectedTokenContainer .logo {\n  width: 22px;\n  height: 22px;\n  border-radius: 100%;\n  background-color: #ccc;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-right: 3px;\n}\n.form .tokenOrContractAddress .selectedTokenContainer .symbol {\n  font-size: 18px;\n  line-height: 150%;\n  color: #2c0c72;\n}";

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
  const [contractType, setContractType] = (0, _react.useState)("ERC721"); // useEffect(() => {
  //   console.log('CHECK SELECTED', selectedToken)
  //   console.log('CONTRACT ADDRESS', contractAddress)
  // }, [selectedToken, contractAddress])

  const handleSubmit = async () => {
    console.log("handleSubmit and selectedToken is", selectedToken);

    if (contractAddress && contractAddress.length) {
      const accessControlConditions = [{
        contractAddress: contractAddress,
        standardContractType: contractType,
        chain: chain.value,
        method: "balanceOf",
        parameters: [":userAddress"],
        returnValueTest: {
          comparator: ">=",
          value: amount.toString()
        }
      }];
      console.log("accessControlConditions contract", accessControlConditions);
      onAccessControlConditionsSelected(accessControlConditions);
    } else if (selectedToken && selectedToken.value === "ethereum") {
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
      console.log("accessControlConditions token", accessControlConditions);
      onAccessControlConditionsSelected(accessControlConditions);
    } else {
      var _selectedToken$standa;

      console.log("selectedToken", selectedToken);
      let tokenType;

      if (selectedToken && ((_selectedToken$standa = selectedToken.standard) === null || _selectedToken$standa === void 0 ? void 0 : _selectedToken$standa.toLowerCase()) === "erc721") {
        tokenType = "erc721";
      } else if (selectedToken && selectedToken.decimals) {
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
        console.log("accessControlConditions typeerc721", accessControlConditions);
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
        console.log("accessControlConditions else", accessControlConditions);
        onAccessControlConditionsSelected(accessControlConditions);
      }
    }

    setActiveStep("accessCreated");
  };

  const handleChangeContractType = event => {
    setContractType(event.target.checked ? "ERC721" : "ERC20");
  };

  console.log("chain", chain);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.title
  }, "Which wallet should be able to access this asset?"), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.inputMaxWidth
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.select
  }, /*#__PURE__*/_react.default.createElement("label", null, "Select blockchain to check requirements against:"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.select
  }, /*#__PURE__*/_react.default.createElement("label", null, "Select token/NFT or enter contract address: "), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.tokenOrContractAddress
  }, (!contractAddress || !contractAddress.length) && !selectedToken && /*#__PURE__*/_react.default.createElement("span", {
    className: styles.leftSelect
  }, /*#__PURE__*/_react.default.createElement(_TokenSelect.default, {
    className: styles.tokenSelect,
    tokenList: tokenList,
    onSelect: setSelectedToken
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.separator
  }, "OR")), !selectedToken && /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    placeholder: "ERC20 or ERC721 address",
    value: contractAddress,
    className: styles.input,
    id: "amount",
    autoFocus: true,
    size: "m",
    handleChange: v => setContractAddress(v)
  }), !selectedToken && !!contractAddress && contractAddress.length && /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    className: styles.clearButton,
    size: "small",
    onClick: () => setContractAddress("")
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Close, null)), !!selectedToken && !contractAddress && !contractAddress.length && /*#__PURE__*/_react.default.createElement("div", {
    className: styles.selectedTokenContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.logo,
    style: {
      backgroundImage: (_ref2 = "url(".concat(selectedToken.logo, ")")) !== null && _ref2 !== void 0 ? _ref2 : undefined
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.symbol
  }, selectedToken.symbol), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    className: styles.clearButton,
    size: "small",
    onClick: () => setSelectedToken(null)
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Close, null))))), !selectedToken && !!contractAddress && contractAddress.length && /*#__PURE__*/_react.default.createElement("div", {
    className: styles.tokenTypeHolder
  }, /*#__PURE__*/_react.default.createElement("label", null, "Token contract type"), /*#__PURE__*/_react.default.createElement(_Stack.default, {
    direction: "row",
    spacing: 1,
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, "ERC20"), /*#__PURE__*/_react.default.createElement(_Switch.default, {
    checked: contractType === "ERC721",
    onChange: handleChangeContractType
  }), /*#__PURE__*/_react.default.createElement(_Typography.default, null, "ERC721 (NFT)"))), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.inputMaxWidth
  }, /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: amount,
    className: styles.input,
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