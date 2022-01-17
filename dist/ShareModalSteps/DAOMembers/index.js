"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _InputWrapper = _interopRequireDefault(require("../../InputWrapper/InputWrapper"));

var _ChainSelector = _interopRequireDefault(require("../../ChainSelector/ChainSelector"));

var _Navigation = _interopRequireDefault(require("../../Navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const styles = ".title {\n  font-size: 18px;\n  line-height: 150%;\n  color: rgba(0, 5, 51, 0.6);\n}\n\nlabel {\n  display: block;\n  color: rgba(0, 5, 51, 0.6);\n  font-size: 16px;\n  line-height: 150%;\n  margin-bottom: 8px;\n}\n@media (max-width: 700px) {\n  label {\n    font-size: 16px;\n    line-height: 150%;\n  }\n}\n@media (max-width: 450px) {\n  label {\n    font-size: 14px;\n    line-height: 150%;\n  }\n}\n\n.form {\n  margin-top: 1rem;\n}\n.form .select {\n  margin-top: 1rem;\n}\n.form .input {\n  margin-top: 1rem;\n}\n\n.info {\n  margin-top: 1.7rem;\n  margin-bottom: 0;\n  font-size: 14px;\n  line-height: 150%;\n  color: rgba(0, 5, 51, 0.6);\n}";

const DAOMembers = _ref => {
  let {
    setActiveStep,
    onAccessControlConditionsSelected
  } = _ref;
  const [DAOAddress, setDAOAddress] = (0, _react.useState)("");
  const [chain, setChain] = (0, _react.useState)(null);

  const handleSubmit = () => {
    const accessControlConditions = [{
      contractAddress: DAOAddress,
      standardContractType: "MolochDAOv2.1",
      chain: chain.value,
      method: "members",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: "=",
        value: "true"
      }
    }];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep("accessCreated");
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.title
  }, "Which DAO\u2019s members should be able to access this asset?"), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.select
  }, /*#__PURE__*/_react.default.createElement("label", null, "Select blockchain to check requirements against:"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.input
  }, /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: DAOAddress,
    className: styles.input,
    label: "Add DAO contract address",
    id: "DAOAddress",
    autoFocus: true,
    size: "m",
    handleChange: value => setDAOAddress(value)
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: styles.info
  }, "Lit Gateway currently supports DAOs using the MolochDAOv2.1 contract (includes DAOhaus)", " "), /*#__PURE__*/_react.default.createElement(_Navigation.default, {
    backward: {
      onClick: () => setActiveStep("ableToAccess")
    },
    forward: {
      label: "Create Requirement",
      onClick: handleSubmit,
      withoutIcon: true,
      disabled: !DAOAddress || !chain
    }
  }));
};

var _default = DAOMembers;
exports.default = _default;