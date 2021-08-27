"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _litJsSdk = _interopRequireDefault(require("lit-js-sdk"));

var _shareModalModule = _interopRequireDefault(require("../share-modal.module.scss"));

var _Table = require("@consta/uikit/Table");

var _IconBackward = require("@consta/uikit/IconBackward");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CurrentRequirements = _ref => {
  let {
    setActiveStep,
    sharingItems,
    tokenList
  } = _ref;
  const [rows, setRows] = (0, _react.useState)([]);
  const accessControlConditions = sharingItems[0].accessControlConditions;
  (0, _react.useEffect)(() => {
    const go = async () => {
      const humanizedMainCondition = (await _litJsSdk.default.humanizeAccessControlConditions({
        accessControlConditions,
        tokenList
      })).join(' and '); // sharingItems[0].additionalAccessControlConditions is an array objects
      // and each object contains an accessControlCondition array

      let humanizedAdditionalConditions = [];

      if (sharingItems[0].additionalAccessControlConditions) {
        const justConditions = sharingItems[0].additionalAccessControlConditions.map(a => a.accessControlConditions);
        humanizedAdditionalConditions = await Promise.all(justConditions.map(async c => {
          return (await _litJsSdk.default.humanizeAccessControlConditions({
            accessControlConditions: c,
            tokenList
          })).join(' and ');
        }));
      }

      const regularAndAdditional = [humanizedMainCondition, ...humanizedAdditionalConditions];
      setRows(regularAndAdditional.map(h => ({
        requirement: h
      })));
    };

    go();
  }, [sharingItems]);
  const columns = [{
    title: 'Requirement',
    accessor: 'requirement',
    width: 600
  } // {
  //   title: 'Date Added',
  //   accessor: 'date',
  // },
  ];
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.back,
    onClick: () => setActiveStep('ableToAccess')
  }, /*#__PURE__*/_react.default.createElement(_IconBackward.IconBackward, {
    view: "link",
    className: _shareModalModule.default.icon
  }), " Back"), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.titles
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Wallets that meet one of these requirements can access this file")), /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.table
  }, /*#__PURE__*/_react.default.createElement(_Table.Table, {
    borderBetweenRows: true,
    columns: columns,
    rows: rows,
    emptyRowsPlaceholder: "No requirements yet."
  })));
};

var _default = CurrentRequirements;
exports.default = _default;