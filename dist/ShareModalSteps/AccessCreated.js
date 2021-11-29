"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _shareModalModule = _interopRequireDefault(require("../share-modal.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AccessCreated = _ref => {
  let {
    setActiveStep,
    copyToClipboard,
    setRequirementCreated,
    copyLinkText
  } = _ref;
  (0, _react.useEffect)(() => {
    setRequirementCreated(true);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("p", null, "Your requirements have been successfully added to the Lit Protocol!")), /*#__PURE__*/_react.default.createElement("svg", {
    className: _shareModalModule.default.confirmationLogo,
    width: "66",
    height: "78",
    viewBox: "0 0 66 78",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    opacity: "0.39",
    d: "M61.8301 32.63C59.5735 28.1404 58.4281 23.1745 58.4901 18.15C58.5928 16.4298 59.2408 14.7871 60.3401 13.46C60.3401 13.46 59.8501 13.52 59.1201 13.66C57.4501 13.98 54.4801 14.66 53.0301 15.95C51.1787 17.4881 49.779 19.4995 48.9801 21.77C47.9142 19.1659 46.6051 16.6682 45.0701 14.31C43.1846 12.0384 41.0664 9.97043 38.7501 8.13999C39.5329 11.0722 39.8467 14.1097 39.6801 17.14C39.4003 19.8487 38.8748 22.5264 38.1101 25.14C36.4401 23.3337 35.1762 21.1908 34.4034 18.8553C33.6307 16.5198 33.367 14.0459 33.6301 11.6C34.5201 4.6 40.2301 0.379995 40.6301 0.119995C40.1401 0.219995 32.3101 1.97 27.5801 8.78C23.6201 14.42 23.1701 20.26 25.0201 28C26.6501 34.84 24.4101 38.81 24.4101 38.81C24.4101 38.81 17.4101 40.3 14.6101 35.9C11.8101 31.5 12.9101 24 12.9101 24C12.9101 24 0.120117 33.76 0.120117 46.61C0.120117 60.1 10.8501 77.51 32.4101 77.51C57.2101 77.51 64.5001 56.35 64.9301 49.89C65.3001 44.33 65.1501 39.52 61.8301 32.63ZM45.1401 32.56C45.1401 32.56 45.4701 33.04 45.9901 33.74C46.4013 34.3217 46.7562 34.9411 47.0501 35.59C47.0501 35.59 47.2101 24 51.2901 18.89C53.3823 16.4857 56.0785 14.6837 59.1001 13.67C55.0001 15.76 52.5301 18.14 51.8701 23.15C51.3401 27.2 52.6701 34.92 52.1301 39.77C51.6901 43.77 49.5801 46.77 47.8801 47.65C46.1801 48.53 45.1101 47.86 45.0501 46.55C44.9701 45.03 46.0501 42.37 45.9201 40.23C45.6808 38.1779 45.0816 36.1841 44.1501 34.34L45.1401 32.56ZM33.1501 71C8.74012 70.76 6.87012 48 8.93012 42.79C8.93012 42.79 10.5001 54.97 24.2301 51.86C37.9601 48.75 30.9601 28.2 30.7401 27.54C32.5309 29.2681 34.124 31.1899 35.4901 33.27C37.6501 36.57 38.2601 42.17 37.5501 47.07C36.8401 51.97 37.3001 58.65 46.0701 56.17C56.9801 53.08 56.0701 36.04 56.0701 36.04C61.0301 41.79 61.4601 71.19 33.1501 71Z",
    fill: "#C4C4C4"
  }), /*#__PURE__*/_react.default.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M31.1613 56.3029L24.1901 50.4535L22.8892 52.0039L31.4093 59.1531L43.108 45.2111L41.559 43.9114L31.1613 56.3029Z",
    fill: "#42974A"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.types
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.type,
    onClick: copyToClipboard
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.btnBock
  }, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("a", {
    className: _shareModalModule.default.link
  }, "Click to copy link."), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", copyLinkText || "Only authorized users will be able to access")))));
};

var _default = AccessCreated;
exports.default = _default;