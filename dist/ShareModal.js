"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _shareModalModule = _interopRequireDefault(require("./share-modal.module.scss"));

var _IconDocFilled = require("@consta/uikit/IconDocFilled");

var _SnackBar = require("@consta/uikit/SnackBar");

var _Informer = require("@consta/uikit/Informer");

var _Modal = _interopRequireDefault(require("./Modal"));

var _litJsSdk = _interopRequireDefault(require("lit-js-sdk"));

var _ShareModalSteps = require("./ShareModalSteps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ModalComponents = {
  whatToDo: _ShareModalSteps.WhatToDo,
  ableToAccess: _ShareModalSteps.AbleToAccess,
  whichWallet: _ShareModalSteps.WhichWallet,
  assetWallet: _ShareModalSteps.AssetWallet,
  DAOMembers: _ShareModalSteps.DAOMembers,
  accessCreated: _ShareModalSteps.AccessCreated,
  selectTokens: _ShareModalSteps.SelectTokens,
  recentRequirement: _ShareModalSteps.RecentRequirement,
  currentRequirements: _ShareModalSteps.CurrentRequirements,
  choosePOAP: _ShareModalSteps.ChoosePOAP
};

const ShareModal = props => {
  var _ref;

  const {
    onClose = () => false,
    onBack = () => false,
    sharingItems = [],
    showStep,
    onAccessControlConditionsSelected,
    getSharingLink,
    onlyAllowCopySharingLink,
    copyLinkText,
    myWalletAddress
  } = props; //console.log("rendering ShareModal and sharingItems is", sharingItems);

  const [showingSnackbar, setShowingSnackbar] = (0, _react.useState)(false);
  const [activeStep, setActiveStep] = (0, _react.useState)(showStep || "whatToDo");
  const [tokenList, setTokenList] = (0, _react.useState)([]);
  const [requirementCreated, setRequirementCreated] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    const go = async () => {
      // get token list and cache it
      const tokens = await _litJsSdk.default.getTokenList();
      setTokenList(tokens);
    };

    go();
  }, []); // console.log('accessControlConditions', accessControlConditions)

  const copyToClipboard = async () => {
    const fileUrl = getSharingLink(sharingItems[0]);
    await navigator.clipboard.writeText(fileUrl);
    setShowingSnackbar(true);
    setTimeout(() => setShowingSnackbar(false), 5000);
  };

  let totalAccessControlConditions = 1;

  if (sharingItems.length === 1) {
    if (sharingItems[0].additionalAccessControlConditions) {
      totalAccessControlConditions += sharingItems[0].additionalAccessControlConditions.length;
    }
  }

  const ModalComponent = props => {
    const {
      type
    } = props;
    let Component = ModalComponents[type];
    return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
      onMainBack: onBack,
      sharingItems: sharingItems,
      copyToClipboard: copyToClipboard,
      onAccessControlConditionsSelected: onAccessControlConditionsSelected,
      tokenList: tokenList,
      onlyAllowCopySharingLink: onlyAllowCopySharingLink,
      copyLinkText: copyLinkText,
      setRequirementCreated: setRequirementCreated,
      requirementCreated: requirementCreated,
      setError: setError,
      myWalletAddress: myWalletAddress
    }));
  }; // const title = sharingItems.length > 1 ? `${sharingItems.length} Files` : sharingItems?.[0]?.name ?? '';


  const title = sharingItems.length > 1 ? "".concat(sharingItems.length, " Files") : (_ref = "".concat(sharingItems.length, " File")) !== null && _ref !== void 0 ? _ref : '';
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    className: _shareModalModule.default.modal,
    isOpen: true,
    hasOverlay: true,
    title: title,
    unsavedPopup: activeStep !== 'accessCreated',
    onClose: onClose
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.fileModal
  }, error ? /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.error
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/_react.default.createElement(_Informer.Informer, {
    status: "alert",
    view: "filled",
    title: error.title,
    label: error.details
  })) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: _shareModalModule.default.body
  }, /*#__PURE__*/_react.default.createElement(ModalComponent, {
    type: activeStep,
    setActiveStep: setActiveStep
  }), showingSnackbar ? /*#__PURE__*/_react.default.createElement(_SnackBar.SnackBar, {
    styles: _shareModalModule.default.snackbar,
    items: [{
      key: 1,
      message: "Copied!"
    }]
  }) : null)));
};

var _default = ShareModal;
exports.default = _default;