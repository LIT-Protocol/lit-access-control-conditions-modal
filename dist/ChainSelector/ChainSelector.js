"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _litJsSdk = _interopRequireDefault(require("lit-js-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ChainSelector = _ref => {
  let {
    chain,
    setChain
  } = _ref;
  // default is eth
  (0, _react.useEffect)(() => setChain({
    label: "Ethereum",
    id: "ethereum",
    value: "ethereum"
  }), []);
  const chainOptions = (0, _react.useMemo)(() => Object.keys(_litJsSdk.default.LIT_CHAINS).map(item => {
    return {
      label: _litJsSdk.default.LIT_CHAINS[item].name,
      id: item,
      value: item
    };
  }), [_litJsSdk.default.LIT_CHAINS]);
  return /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    classNamePrefix: "react-select",
    placeholder: "Select a blockchain",
    isClearable: true,
    options: chainOptions,
    value: chain // menuPortalTarget={document.body}
    ,
    onChange: value => setChain(value)
  });
};

var _default = ChainSelector;
exports.default = _default;