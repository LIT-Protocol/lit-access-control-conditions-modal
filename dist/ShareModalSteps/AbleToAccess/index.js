"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ableToAccessModule = _interopRequireDefault(require("./able-to-access.module.scss"));

var _Button = require("@consta/uikit/Button");

var _IconBackward = require("@consta/uikit/IconBackward");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import { IconForward } from "@consta/uikit/IconForward";
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
  type: 'whichWallet',
  icon: 'wallet',
  title: 'An Individual Wallet'
}, {
  type: 'selectTokens',
  icon: 'token',
  title: 'A Group of Token or NFT Owners'
}, {
  type: 'DAOMembers',
  icon: 'dao',
  title: 'DAO Members'
}, {
  type: 'choosePOAP',
  icon: 'poap',
  title: 'POAP Owners'
}];

const AbleToAccess = _ref => {
  let {
    setActiveStep
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.ableToAccess
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.title
  }, "Who should be able to access this file??"), /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.types
  }, ITEMS.map(item => /*#__PURE__*/_react.default.createElement(TypeButton, _extends({}, item, {
    onClick: setActiveStep
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: _ableToAccessModule.default.navigation
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: "Back",
    size: "l",
    view: "secondary",
    iconLeft: _IconBackward.IconBackward,
    onClick: () => setActiveStep("whatToDo")
  })));
};

var _default = AbleToAccess;
exports.default = _default;