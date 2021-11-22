"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _daoMembersModule = _interopRequireDefault(require("./dao-members.module.scss"));

var _InputWrapper = _interopRequireDefault(require("../../InputWrapper/InputWrapper"));

var _ChainSelector = _interopRequireDefault(require("../../ChainSelector/ChainSelector"));

var _Navigation = _interopRequireDefault(require("../../Navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    className: _daoMembersModule.default.title
  }, "Which DAO\u2019s members should be able to access this file?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _daoMembersModule.default.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _daoMembersModule.default.select
  }, /*#__PURE__*/_react.default.createElement("label", null, "Select blockchain to check requirements against:"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _daoMembersModule.default.input
  }, /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: DAOAddress,
    className: _daoMembersModule.default.input,
    label: "Add DAO contract address",
    id: "DAOAddress",
    autoFocus: true,
    size: "m",
    handleChange: value => setDAOAddress(value)
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: _daoMembersModule.default.info
  }, "Lit Gateway currently supports DAOs using the MolochDAOv2.1 contract (includes DAOhaus)", " "), /*#__PURE__*/_react.default.createElement(_Navigation.default, {
    backward: {
      onClick: () => setActiveStep("ableToAccess")
    },
    forward: {
      label: "Create Requirment",
      onClick: handleSubmit,
      withoutIcon: true,
      disabled: !DAOAddress || !chain
    }
  }));
};

var _default = DAOMembers;
exports.default = _default;