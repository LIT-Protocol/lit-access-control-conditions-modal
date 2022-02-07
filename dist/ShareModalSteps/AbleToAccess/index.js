"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ableToAccessModule = _interopRequireDefault(require("./able-to-access.module.scss"));

var _Navigation = _interopRequireDefault(require("../../Navigation"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TypeButton = props => {
  const {
    type,
    icon,
    title,
    onClick: _onClick
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.type,
    onClick: () => _onClick(type)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_ableToAccessModule.default.icon, _ableToAccessModule.default["".concat(icon, "Icon")])
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.typeTitle
  }, title));
};

const ITEMS = [{
  type: "whichWallet",
  icon: "wallet",
  title: "An Individual Wallet"
}, {
  type: "selectTokens",
  icon: "token",
  title: "A Group of Token or NFT Owners"
}, {
  type: "DAOMembers",
  icon: "dao",
  title: "DAO Members"
}, {
  type: "choosePOAP",
  icon: "poap",
  title: "POAP Collectors"
}];

const AbleToAccess = props => {
  const {
    setActiveStep,
    onMainBack
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.ableToAccess
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.title
  }, "Who should be able to access this asset?"), /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.types
  }, ITEMS.map((item, i) => /*#__PURE__*/_react.default.createElement(TypeButton, _extends({
    key: i
  }, item, {
    onClick: setActiveStep
  })))), /*#__PURE__*/_react.default.createElement(_Navigation.default, {
    backward: {
      onClick: onMainBack
    }
  }));
};

var _default = AbleToAccess;
exports.default = _default;