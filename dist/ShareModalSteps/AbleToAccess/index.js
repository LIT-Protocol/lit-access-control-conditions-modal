"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Navigation = _interopRequireDefault(require("../../Navigation"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const styles = ".title {\n  font-size: 18px;\n  line-height: 150%;\n  color: rgba(0, 5, 51, 0.6);\n}\n\nlabel {\n  display: block;\n  color: rgba(0, 5, 51, 0.6);\n  font-size: 16px;\n  line-height: 150%;\n  margin-bottom: 8px;\n}\n@media (max-width: 700px) {\n  label {\n    font-size: 16px;\n    line-height: 150%;\n  }\n}\n@media (max-width: 450px) {\n  label {\n    font-size: 14px;\n    line-height: 150%;\n  }\n}\n\n.lockIcon {\n  background-image: url(\"../assets/lock.png\");\n}\n\n.linkIcon {\n  background-image: url(\"../assets/link.png\");\n}\n\n.daoIcon {\n  background-image: url(\"../assets/dao.svg\");\n}\n\n.tokenIcon {\n  background-image: url(\"../assets/token.svg\");\n}\n\n.walletIcon {\n  background-image: url(\"../assets/wallet.svg\");\n}\n\n.poapIcon {\n  background-image: url(\"../assets/poap.svg\");\n}\n\n.ableToAccess .types {\n  margin-top: 28px;\n  display: grid;\n  grid-template-columns: 180px 180px;\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  justify-content: center;\n}\n.ableToAccess .types .type {\n  display: flex;\n  flex-direction: column;\n  width: 180px;\n  height: 148px;\n  border: 1px solid #2C0C72;\n  box-sizing: border-box;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.ableToAccess .types .type .icon {\n  flex-grow: 1;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.ableToAccess .types .type .typeTitle {\n  font-size: 16px;\n  line-height: 150%;\n  color: black;\n  width: 100%;\n  margin-bottom: 7px;\n  text-align: center;\n}";

const TypeButton = props => {
  const {
    type,
    icon,
    title,
    onClick: _onClick
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styles.type,
    onClick: () => _onClick(type)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(styles.icon, styles["".concat(icon, "Icon")])
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.typeTitle
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
  title: "POAP Owners"
}];

const AbleToAccess = props => {
  const {
    setActiveStep,
    onMainBack
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styles.ableToAccess
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.title
  }, "Who should be able to access this asset?"), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.types
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