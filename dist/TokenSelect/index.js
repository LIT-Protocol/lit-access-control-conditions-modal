"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

var _react = _interopRequireWildcard(require("react"));

var _reactWindowedSelect = require("react-windowed-select");

var _creatable = _interopRequireDefault(require("react-select/creatable"));

var _material = require("@mui/material");

const _excluded = ["children", "data"],
      _excluded2 = ["onMouseMove", "onMouseOver"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const styles = ".topButton {\n  padding-top: 0.8rem !important;\n  padding-bottom: 0.8rem !important;\n}\n\n.modal .modalInner {\n  padding: 25px 38px;\n  width: 400px;\n}\n.modal .modalInner label {\n  color: #2C0C72;\n  text-transform: uppercase;\n  font-family: \"Space Grotesk\";\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 26px;\n}\n.modal .modalInner .topTokens {\n  display: flex;\n}\n.modal .modalInner .topTokens > div {\n  padding: 0 5px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  border: 1.25px solid #2C0C72;\n  border-radius: 5px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.modal .modalInner .topTokens > div .logo {\n  width: 22px;\n  height: 22px;\n  border-radius: 100%;\n  background-color: #ccc;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-right: 3px;\n}\n.modal .modalInner .topTokens > div .symbol {\n  font-size: 18px;\n  line-height: 150%;\n  color: #2C0C72;\n}\n.modal .modalInner .topTokens .selected {\n  border-width: 2px;\n}\n.modal .modalInner .topTokens .notSelected {\n  margin: 1px 9px 1px 1px;\n}\n.modal .modalInner .search {\n  margin-top: 25px;\n}\n.modal .modalInner .button {\n  display: block;\n  margin-left: auto;\n  margin-top: 35px;\n}\n\n.option {\n  display: flex;\n  align-items: center;\n  height: 63px;\n}\n.option .logo {\n  width: 36px;\n  height: 36px;\n  border-radius: 100%;\n  background-color: #ccc;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.option .label {\n  font-size: 16px;\n  line-height: 150%;\n  color: black;\n}\n.option .symbol {\n  font-size: 14px;\n  line-height: 150%;\n  color: rgba(0, 5, 51, 0.6);\n}\n.option:hover {\n  background-color: rgba(0, 66, 105, 0.05);\n}";

// import Modal from '../Modal'
const Option = _ref => {
  let {
    children,
    data: {
      label,
      logo,
      symbol
    }
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const _props$innerProps = props.innerProps,
        {
    onMouseMove,
    onMouseOver
  } = _props$innerProps,
        rest = _objectWithoutProperties(_props$innerProps, _excluded2);

  const newProps = Object.assign(props, {
    innerProps: rest
  });
  return /*#__PURE__*/_react.default.createElement(_reactWindowedSelect.components.Option, _extends({}, newProps, {
    style: {
      padding: 0,
      zIndex: 105
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.option
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.logo,
    style: {
      backgroundImage: logo ? "url(".concat(logo, ")") : undefined
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.label
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.symbol
  }, symbol))));
};

const TOP_LIST = [{
  label: "Ethereum",
  value: "ethereum",
  symbol: "ETH",
  logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
}, {
  label: "Lit Genesis Gate",
  logo: "https://litgateway.com/favicon.png",
  value: "0xA3D109E28589D2AbC15991B57Ce5ca461Ad8e026",
  symbol: "LITGATE",
  standard: "ERC721"
}, {
  label: "Art Blocks",
  logo: "https://lh3.googleusercontent.com/sdPql8yt3eT5qmQfbCoU8a1I6aMNsqQEj6D1fMTuw101XKILNmzp7QVsdkGff2T39MgcHT-Aha18cWBqjCdhzRWzBw=s120",
  value: "0x059edd72cd353df5106d2b9cc5ab83a52287ac3a",
  symbol: "BLOCKS",
  standard: "ERC721"
}];

const TokenSelect = props => {
  const {
    tokenList,
    onSelect
  } = props;
  const [modalIsOpen, setModalIsOpen] = (0, _react.useState)(false);
  const [selectedToken, setSelectedToken] = (0, _react.useState)(null);
  const tokenSelectBoxRows = (0, _react.useMemo)(() => {
    return [{
      label: "Ethereum",
      value: "ethereum",
      symbol: "ETH",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
    }, ...tokenList.map(t => ({
      label: t.name,
      value: t.address,
      standard: t.standard,
      logo: t.logoURI,
      symbol: t.symbol
    }))];
  }, [tokenList]);

  const handleSelect = () => {
    onSelect(selectedToken);
    setModalIsOpen(false);
  };

  console.log("DOCU", document.body);

  const checkForSelected = token => {
    if (token && token["symbol"] && selectedToken && token["symbol"] === selectedToken["symbol"]) {
      return styles.selected;
    } else {
      return styles.notSelected;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    size: "large",
    className: styles.topButton,
    variant: "outlined",
    onClick: () => setModalIsOpen(true)
  }, "Search for a token/NFT"), /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    className: styles.modal,
    open: modalIsOpen,
    title: "Select a token",
    onClose: () => setModalIsOpen(false),
    maxWidth: "lg"
  }, /*#__PURE__*/_react.default.createElement(_material.DialogContent, {
    className: styles.modalInner
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", null, "Top Tokens/NFTS"), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.topTokens
  }, TOP_LIST.map((t, i) => /*#__PURE__*/_react.default.createElement("div", {
    className: checkForSelected(t),
    key: t.symbol,
    onClick: e => {
      setSelectedToken(t);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.logo,
    style: {
      backgroundImage: t.logo ? "url(".concat(t.logo, ")") : undefined
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.symbol
  }, t.symbol))))), /*#__PURE__*/_react.default.createElement("div", {
    className: styles.search
  }, /*#__PURE__*/_react.default.createElement("label", null, "Search"), /*#__PURE__*/_react.default.createElement(_creatable.default, {
    filterOption: (0, _reactWindowedSelect.createFilter)({
      ignoreAccents: false
    }),
    classNamePrefix: "react-select",
    components: {
      Option,
      MenuList: _reactWindowedSelect.WindowedMenuList
    },
    isClearable: true,
    isSearchable: true,
    defaultValue: "",
    options: tokenSelectBoxRows,
    styles: {
      menuPortal: base => _objectSpread(_objectSpread({}, base), {}, {
        zIndex: 9999
      })
    },
    menuPortalTarget: document.body,
    onChange: setSelectedToken
  })), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variation: "contained",
    className: styles.button,
    size: "large",
    disabled: !selectedToken,
    onClick: handleSelect
  }, "Select"))));
};

var _default = TokenSelect;
exports.default = _default;