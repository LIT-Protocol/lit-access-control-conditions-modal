"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactSelect = _interopRequireDefault(require("react-select"));

var _litJsSdk = _interopRequireDefault(require("lit-js-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChainSelector = _ref => {
  let {
    chain,
    setChain
  } = _ref;
  // default is eth
  (0, _react.useEffect)(() => setChain({
    label: 'Ethereum',
    id: 'ethereum',
    value: 'ethereum'
  }), []);
  const chainOptions = (0, _react.useMemo)(() => Object.keys(_litJsSdk.default.LIT_CHAINS).map(item => {
    return {
      label: _litJsSdk.default.LIT_CHAINS[item].name,
      id: item,
      value: item
    };
  }), [_litJsSdk.default.LIT_CHAINS]);
  return /*#__PURE__*/React.createElement(_reactSelect.default, {
    classNamePrefix: "react-select",
    placeholder: "Select a blockchain",
    isClearable: true,
    options: chainOptions,
    value: chain,
    menuPortalTarget: document.body,
    onChange: value => setChain(value)
  });
};

var _default = ChainSelector;
exports.default = _default;