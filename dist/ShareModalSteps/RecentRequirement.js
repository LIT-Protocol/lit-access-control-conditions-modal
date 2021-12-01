"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _shareModalModule = _interopRequireDefault(require("../share-modal.module.scss"));

var _Table = require("@consta/uikit/Table");

var _IconBackward = require("@consta/uikit/IconBackward");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RecentRequirement = _ref => {
  let {
    setActiveStep
  } = _ref;
  const columns = [{
    title: "Requirement",
    accessor: "requiment",
    width: 600
  }, {
    title: "Date Added",
    accessor: "date"
  }];
  const rows = [{
    date: "01/01/2021",
    requiment: "Owns at least 2 CrpytoPunk"
  }, {
    date: "01/01/2021",
    requiment: "Owners Sneider.eth"
  }, {
    date: "01/01/2021",
    requiment: "Is a Member of CityDAO"
  }];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.back,
    onClick: () => setActiveStep("ableToAccess")
  }, /*#__PURE__*/_react.default.createElement(_IconBackward.IconBackward, {
    view: "link",
    className: _shareModalModule.default.icon
  }), " Back"), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Wallets that Meet One of These Requiments can Access this")), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.table
  }, /*#__PURE__*/_react.default.createElement(_Table.Table, {
    borderBetweenRows: true,
    columns: columns,
    rows: rows,
    emptyRowsPlaceholder: "No requiments yet."
  })));
};

var _default = RecentRequirement;
exports.default = _default;