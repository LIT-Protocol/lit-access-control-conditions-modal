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

var _reactSelect = _interopRequireDefault(require("react-select"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper/InputWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const matchConditionOptions = [{
  label: "Equals POAP Name exactly",
  id: "equals",
  value: "="
}, {
  label: "Contains POAP Name",
  id: "contains",
  value: "contains"
}];

const DAOMembers = _ref => {
  let {
    setActiveStep,
    onAccessControlConditionsSelected
  } = _ref;
  const [POAPName, setPOAPName] = (0, _react.useState)("");
  const [matchCondition, setMatchCondition] = (0, _react.useState)(null);

  const handleSubmit = () => {
    const chain = "xdai";
    const accessControlConditions = [{
      contractAddress: "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
      standardContractType: "ERC721",
      chain,
      method: "balanceOf",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: ">",
        value: "0"
      }
    }, {
      contractAddress: "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
      standardContractType: "POAP",
      chain,
      method: "tokenURI",
      parameters: [],
      returnValueTest: {
        comparator: matchCondition.value,
        value: POAPName
      }
    }];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep("accessCreated");
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.back,
    onClick: () => setActiveStep("ableToAccess")
  }, /*#__PURE__*/_react.default.createElement(_IconBackward.IconBackward, {
    view: "link",
    className: _shareModalModule.default.icon
  }), " Back"), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Which POAP holders should be able to access this?")), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.form
  }, /*#__PURE__*/_react.default.createElement(_InputWrapper.default, {
    value: POAPName,
    className: _shareModalModule.default.input,
    label: "POAP Name",
    id: "POAPName",
    autoFocus: true,
    size: "m",
    handleChange: value => setPOAPName(value)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.select
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _shareModalModule.default.label
  }, "Match Conditions"), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    isClearable: true,
    options: matchConditionOptions,
    value: matchCondition,
    onChange: value => setMatchCondition(value)
  })), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: "Create  Requirment",
    className: _shareModalModule.default.btn,
    size: "l",
    onClick: handleSubmit,
    disabled: !POAPName || !matchCondition
  })));
};

var _default = DAOMembers;
exports.default = _default;