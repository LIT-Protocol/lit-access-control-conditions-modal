"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _litJsSdk = _interopRequireDefault(require("lit-js-sdk"));

var _ShareModalSteps = require("./ShareModalSteps");

var _UnsavedPopup = _interopRequireDefault(require("./Modal/UnsavedPopup"));

var _iconsMaterial = require("@mui/icons-material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const styles = ".shareModalAnchor {\n  width: 664px;\n  max-width: none !important;\n}\n\n.shareModalTitle {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  align-items: center;\n}\n.shareModalTitle h4 {\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n}\n\n.fileModal {\n  padding: 28px 32px 30px 32px;\n  height: min-content;\n}\n@media (max-width: 1180px) {\n  .fileModal {\n    box-sizing: border-box;\n  }\n}\n.top {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid var(--color-control-bg-border-default-hover);\n  padding-bottom: var(--space-2xl);\n  justify-content: space-between;\n}\n@media (max-width: 450px) {\n  .top {\n    padding-bottom: var(--space-xl);\n  }\n}\n.top .close {\n  cursor: pointer;\n  margin-left: 15px;\n}\n.top > div {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 450px) {\n  .top > div {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .top > div .icon {\n    margin-bottom: 10px;\n  }\n}\n.top .icon {\n  width: 3.5em;\n  height: 3.5em;\n  padding-right: var(--space-xl);\n}\n.top h3 {\n  color: var(--color-typo-primary);\n  font-size: 1.5em;\n  margin: 0 0 var(--space-s);\n}\n.top a {\n  font-size: 1.2em;\n}\n@media (max-width: 600px) {\n  .top h3 {\n    font-size: 1.2em;\n    margin: 0 0 10px;\n  }\n}\n@media (max-width: 450px) {\n  .top h3 {\n    font-size: 1em;\n    margin: 0 0 10px;\n  }\n}\n\n.link {\n  color: #0645AD;\n  margin-top: 15px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.link:hover {\n  color: var(--color-typo-link-hover);\n}\n\n.body {\n  max-width: 654px;\n  width: 654px;\n}\n.body .back {\n  margin: 0 0 var(--space-xl);\n  display: flex;\n  align-items: center;\n  color: #0645AD;\n  font-size: 1.1em;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.body .back:hover {\n  color: var(--color-typo-link-hover);\n}\n.body .back .icon {\n  margin-right: var(--space-s);\n}\n.body .titles {\n  margin: 0 0 var(--space-xl);\n}\n.body .titles h3 {\n  color: var(--color-typo-primary);\n  font-size: 1.5em;\n  margin: 0 0 var(--space-s);\n}\n@media (max-width: 600px) {\n  .body .titles h3 {\n    font-size: 1.2em;\n    margin: 0 0 10px;\n  }\n}\n@media (max-width: 450px) {\n  .body .titles h3 {\n    font-size: 1em;\n    margin: 0 0 10px;\n  }\n}\n.body .titles p {\n  color: var(--color-typo-primary);\n  margin: 0 auto;\n  text-align: center;\n  width: 60%;\n}\n.body .confirmationLogo {\n  margin-left: calc(50% - 32px);\n  height: 78px;\n  width: 65px;\n  text-align: center;\n}\n.body .link {\n  color: #0645AD;\n  margin-top: 15px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.body .link:hover {\n  color: var(--color-typo-link-hover);\n}\n.body .types {\n  margin-top: var(--space-m);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n@media (max-width: 400px) {\n  .body .types {\n    flex-direction: column;\n  }\n}\n.body .type {\n  margin: var(--space-s);\n  width: 100%;\n}\n@media (max-width: 600px) {\n  .body .type {\n    flex: 0 1 150px;\n    margin: 10px;\n  }\n}\n.body .type h4 {\n  font-size: 1.2em;\n  text-align: center;\n  margin: 0 0 var(--space-m);\n  color: var(--color-typo-primary);\n}\n@media (max-width: 600px) {\n  .body .type h4 {\n    font-size: 1em;\n  }\n}\n.body .type .btnBock {\n  border-radius: 4px;\n  border: 1px solid var(--color-bg-brand);\n  padding: var(--space-xl);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n@media (max-width: 600px) {\n  .body .type .btnBock {\n    padding: 10px;\n  }\n  .body .type .btnBock svg {\n    height: 100px;\n  }\n  .body .type .btnBock .lockIcon,\n.body .type .btnBock .linkIcon {\n    width: 30px;\n    height: 30px;\n    top: 48%;\n    left: 34%;\n  }\n}\n.body .type .btnBock:hover {\n  background: var(--color-bg-brand);\n}\n.body .type .btnBock:hover svg path {\n  fill: white;\n}\n.body .type .btnBock:hover h5 {\n  color: white;\n}\n.body .type .btnBock:hover .link {\n  color: white;\n}\n.body .type .btnBock:hover .lockIcon {\n  background-image: url(\"./assets/lock.png\");\n}\n.body .type .btnBock:hover .linkIcon {\n  background-image: url(\"./assets/link.png\");\n}\n.body .type .btnBock:hover .daoIcon {\n  background-image: url(\"./assets/dao-hover.png\");\n}\n.body .type .btnBock:hover .tokenIcon {\n  background-image: url(\"./assets/token-hover.png\");\n}\n.body .type .btnBock:hover .walletIcon {\n  background-image: url(\"./assets/wallet-hover.png\");\n}\n.body .type .btnBock:hover .poapIcon {\n  background-image: url(\"./assets/poap-logo.svg\");\n}\n.body .type .btnBock .img {\n  margin-bottom: 20px;\n  position: relative;\n}\n.body .type .btnBock svg path {\n  fill: var(--color-bg-brand);\n}\n.body .type .btnBock h5 {\n  text-align: center;\n  margin: 0;\n  color: var(--color-typo-primary);\n}\n\n.title {\n  font-size: 3em;\n  color: var(--color-typo-primary);\n  border-bottom: 1px solid var(--color-typo-ghost);\n  padding-bottom: var(--space-xl);\n  margin-bottom: var(--space-3xl);\n}\n@media (max-width: 640px) {\n  .title {\n    font-size: 40px;\n  }\n}\n\n.form {\n  margin-top: 1rem;\n}\n@media (max-width: 800px) {\n  .form {\n    margin-top: 30px;\n  }\n}\n.form .input {\n  margin-bottom: var(--space-m);\n}\n.form .btn {\n  margin-top: var(--space-2xl);\n}\n@media (max-width: 800px) {\n  .form .btn {\n    margin-top: var(--space-xl);\n  }\n}\n.form p {\n  color: var(--color-typo-link-minor);\n}\n@media (max-width: 800px) {\n  .form p {\n    font-size: 16px;\n  }\n}\n@media (max-width: 450px) {\n  .form p {\n    font-size: 14px;\n  }\n}\n\n.lockIcon {\n  background-image: url(\"./assets/lock-hover.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 44%;\n  left: 27%;\n  transition: all 0.3s;\n}\n\n.linkIcon {\n  background-image: url(\"./assets/link-hover.png\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 44%;\n  left: 27%;\n  transition: all 0.3s;\n}\n\n.imgIcon {\n  height: 100px;\n  width: 100px;\n  position: relative;\n  margin-bottom: var(--space-m);\n}\n\n.daoIcon,\n.tokenIcon,\n.walletIcon,\n.poapIcon {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n  height: 80px;\n  width: 80px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: all 0.3s;\n}\n\n.daoIcon {\n  background-image: url(\"./assets/DAO.png\");\n}\n\n.tokenIcon {\n  background-image: url(\"./assets/token.png\");\n}\n\n.walletIcon {\n  background-image: url(\"./assets/wallet.png\");\n}\n\n.poapIcon {\n  background-image: url(\"./assets/poap-logo.svg\");\n}\n\n.selectIcon {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n  object-fit: contain;\n}\n\n.select {\n  margin-bottom: var(--space-xl);\n}\n.select .label {\n  font-size: 18px;\n  line-height: 150%;\n  margin-bottom: 8px;\n  color: var(--color-typo-secondary);\n  display: inline-block;\n}\n@media (max-width: 700px) {\n  .select .label {\n    font-size: 16px;\n    line-height: 150%;\n  }\n}\n@media (max-width: 450px) {\n  .select .label {\n    font-size: 14px;\n    line-height: 150%;\n  }\n}\n@media (max-width: 450px) {\n  .select {\n    margin-bottom: var(--space-s);\n  }\n}\n\n.table {\n  margin-top: var(--space-3xl);\n}\n\n.snackbar {\n  margin-left: var(--space-s);\n  margin-right: var(--space-s);\n}";
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
  const [openErrorSnackbar, setOpenErrorSnackbar] = (0, _react.useState)(null);
  const [showUnsavedPopup, setShowUnsavedPopup] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const go = async () => {
      // get token list and cache it
      const tokens = await _litJsSdk.default.getTokenList();
      setTokenList(tokens);
    };

    go();
  }, []); // useEffect(() => {
  //   if (activeStep !== "accessCreated") {
  //     setShowUnsavedPopup(true);
  //   }
  // }, [activeStep])

  (0, _react.useEffect)(() => {
    setOpenErrorSnackbar(true);
  }, [error]); // console.log('accessControlConditions', accessControlConditions)

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


  let title = "";

  if (sharingItems.length > 0) {
    var _ref;

    title = sharingItems.length > 1 ? "".concat(sharingItems.length, " Files") : (_ref = "".concat(sharingItems.length, " File")) !== null && _ref !== void 0 ? _ref : "";
  }

  const handleClose = () => {
    console.log('HANDLE CLOSE', activeStep);

    if (activeStep !== "accessCreated") {
      setShowUnsavedPopup(true);
    } else {
      onClose();
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    open: true,
    onClose: onClose,
    maxWidth: 'l'
  }, /*#__PURE__*/_react.default.createElement(_material.DialogTitle, {
    className: styles.shareModalTitle
  }, /*#__PURE__*/_react.default.createElement("span", null, title), /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    className: styles.icon,
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Close, null))), /*#__PURE__*/_react.default.createElement(_material.DialogContent, {
    id: styles.shareModalContainer
  }, error ? /*#__PURE__*/_react.default.createElement("div", {
    className: styles.error
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/_react.default.createElement(_material.Snackbar, {
    open: openErrorSnackbar,
    autoHideDuration: 5000
  }, /*#__PURE__*/_react.default.createElement(_material.Alert, {
    severity: 'error'
  }, error.title, " - ", error.details))) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: styles.body
  }, /*#__PURE__*/_react.default.createElement(ModalComponent, {
    type: activeStep,
    setActiveStep: setActiveStep
  }), /*#__PURE__*/_react.default.createElement(_material.Snackbar, {
    open: showingSnackbar,
    autoHideDuration: 3000,
    message: 'Copied!'
  })), /*#__PURE__*/_react.default.createElement(_UnsavedPopup.default, {
    open: showUnsavedPopup,
    onClose: onClose,
    onCancel: () => setShowUnsavedPopup(false)
  }))));
};

var _default = ShareModal;
exports.default = _default;