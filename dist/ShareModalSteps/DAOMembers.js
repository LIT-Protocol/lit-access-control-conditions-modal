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

const DAOMembers = _ref => {
  let {
    setActiveStep,
    awaitingUpload,
    onAccessControlConditionsSelected
  } = _ref;
  const [DAOAddress, setDAOAddress] = (0, _react.useState)('');
  const [chain, setChain] = (0, _react.useState)(null);

  const handleSubmit = () => {
    const accessControlConditions = [{
      contractAddress: DAOAddress,
      standardContractType: 'MolochDAOv2.1',
      chain: chain.value,
      method: 'members',
      parameters: [':userAddress'],
      returnValueTest: {
        comparator: '==',
        value: 'true'
      }
    }];
    onAccessControlConditionsSelected(accessControlConditions);

    if (awaitingUpload) {
      setActiveStep('uploading');
    } else {
      setActiveStep('accessCreated');
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.back,
    onClick: () => setActiveStep('ableToAccess')
  }, /*#__PURE__*/_react.default.createElement(_IconBackward.IconBackward, {
    view: "link",
    className: _shareModalModule.default.icon
  }), " Back"), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Which DAO\u2019s members should be able to access this file?")), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.form
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.select
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _shareModalModule.default.label
  }, "Select blockchain"), /*#__PURE__*/_react.default.createElement(_ChainSelector.default, {
    chain: chain,
    setChain: setChain
  })), /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: DAOAddress,
    className: _shareModalModule.default.input,
    label: "Add DAO contract address",
    id: "DAOAddress",
    autoFocus: true,
    size: "m",
    handleChange: value => setDAOAddress(value)
  }), /*#__PURE__*/_react.default.createElement("p", null, "Lit Gateway currently supports DAOs using the MolochDAOv2.1 contract (includes DAOhaus) "), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: "Create  Requirment",
    className: _shareModalModule.default.btn,
    size: "l",
    onClick: handleSubmit,
    disabled: !DAOAddress || !chain
  })));
};

var _default = DAOMembers;
exports.default = _default;