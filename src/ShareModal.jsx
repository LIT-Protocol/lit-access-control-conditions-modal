import React, { useState, useEffect } from "react";

import styles from "./share-modal.module.scss";

import { Dialog, DialogTitle, Snackbar, Alert, IconButton, DialogContent } from '@mui/material';

// import Modal from "./Modal";

import LitJsSdk from "lit-js-sdk";

import {
  WhatToDo,
  AbleToAccess,
  WhichWallet,
  AssetWallet,
  DAOMembers,
  AccessCreated,
  SelectTokens,
  RecentRequirement,
  CurrentRequirements,
  ChoosePOAP,
} from "./ShareModalSteps";
import UnsavedPopup from "./Modal/UnsavedPopup";
import { Close } from "@mui/icons-material";

const ModalComponents = {
  whatToDo: WhatToDo,
  ableToAccess: AbleToAccess,
  whichWallet: WhichWallet,
  assetWallet: AssetWallet,
  DAOMembers: DAOMembers,
  accessCreated: AccessCreated,
  selectTokens: SelectTokens,
  recentRequirement: RecentRequirement,
  currentRequirements: CurrentRequirements,
  choosePOAP: ChoosePOAP,
};

const ShareModal = (props) => {
  const {
    onClose = () => false,
    onBack = () => false,
    sharingItems = [],
    showStep,
    onAccessControlConditionsSelected,
    getSharingLink,
    onlyAllowCopySharingLink,
    copyLinkText,
    myWalletAddress,
  } = props;

  //console.log("rendering ShareModal and sharingItems is", sharingItems);

  const [showingSnackbar, setShowingSnackbar] = useState(false);
  const [activeStep, setActiveStep] = useState(showStep || "whatToDo");
  const [tokenList, setTokenList] = useState([]);
  const [requirementCreated, setRequirementCreated] = useState(false);
  const [error, setError] = useState(null);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(null);
  const [showUnsavedPopup, setShowUnsavedPopup] = useState(false);

  useEffect(() => {
    const go = async () => {
      // get token list and cache it
      const tokens = await LitJsSdk.getTokenList();
      setTokenList(tokens);
    };
    go();
  }, []);

  // useEffect(() => {
  //   if (activeStep !== "accessCreated") {
  //     setShowUnsavedPopup(true);
  //   }
  // }, [activeStep])

  useEffect(() => {
    setOpenErrorSnackbar(true)
  }, [error])

  // console.log('accessControlConditions', accessControlConditions)

  const copyToClipboard = async () => {
    const fileUrl = getSharingLink(sharingItems[0]);
    await navigator.clipboard.writeText(fileUrl);
    setShowingSnackbar(true);
    setTimeout(() => setShowingSnackbar(false), 5000);
  };

  let totalAccessControlConditions = 1;
  if (sharingItems.length === 1) {
    if (sharingItems[0].additionalAccessControlConditions) {
      totalAccessControlConditions +=
        sharingItems[0].additionalAccessControlConditions.length;
    }
  }

  const ModalComponent = (props) => {
    const { type } = props;

    let Component = ModalComponents[type];

    return (
      <Component
        {...props}
        onMainBack={onBack}
        sharingItems={sharingItems}
        copyToClipboard={copyToClipboard}
        onAccessControlConditionsSelected={onAccessControlConditionsSelected}
        tokenList={tokenList}
        onlyAllowCopySharingLink={onlyAllowCopySharingLink}
        copyLinkText={copyLinkText}
        setRequirementCreated={setRequirementCreated}
        requirementCreated={requirementCreated}
        setError={setError}
        myWalletAddress={myWalletAddress}
      />
    );
  };

  // const title = sharingItems.length > 1 ? `${sharingItems.length} Files` : sharingItems?.[0]?.name ?? '';
  let title = "";
  if (sharingItems.length > 0) {
    title =
      sharingItems.length > 1
        ? `${sharingItems.length} Files`
        : `${sharingItems.length} File` ?? "";
  }

  const handleClose = () => {
    console.log('HANDLE CLOSE', activeStep)
    if (activeStep !== "accessCreated") {
      setShowUnsavedPopup(true)
    } else {
      onClose()
    }
  }

  return (
    <div>
      <Dialog open={true}
              onClose={onClose}
              class={styles.shareModalAnchor}
              maxWidth={'l'}
      >
        <DialogTitle>
          <span>{title}
            <IconButton className={styles.icon} onClick={handleClose} >
              <Close/>
            </IconButton>
          </span>
        </DialogTitle>
        <DialogContent id={styles.shareModalContainer}>
          {error ? (
            <div className={styles.error}>
              <div style={{ height: 24 }} />
              <Snackbar open={openErrorSnackbar}
                        autoHideDuration={5000}
              >
                <Alert severity={'error'}>
                  {error.title} - {error.details}
                </Alert>
              </Snackbar>
            </div>
          ) : null}
          <div className={styles.body}>
            <ModalComponent type={activeStep} setActiveStep={setActiveStep} />
            <Snackbar
              open={showingSnackbar}
              autoHideDuration={3000}
              message={'Copied!'}
            />
          </div>
          <UnsavedPopup
            open={showUnsavedPopup}
            onClose={onClose}
            onCancel={() => setShowUnsavedPopup(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShareModal;

// {/*  <Modal*/}
// {/*  id={styles.shareModalContainer}*/}
// {/*  open={true}*/}
// {/*  onClose={onClose}>*/}
// {/*    <div>*/}
// {/*      MODAL YO*/}
// {/*    </div>*/}
// {/*  </Modal>*/}
// {/*</div>*/}
//
// {/*// <Modal*/}
// {/*//   className={styles.modal}*/}
// {/*//   isOpen={true}*/}
// {/*//   title={title}*/}
// {/*//   unsavedPopup={activeStep !== "accessCreated"}*/}
// {/*//   onClose={onClose}*/}
// {/*// >*/}
// {/*<div className={styles.shareModalContainer}>*/}
// {/*  <div className={styles.shareModal}>*/}
// {/*  <div className={styles.fileModal}>*/}
//     {/*<UnsavedPopup*/}
//     {/*  open={showUnsavedPopup}*/}
//     {/*  onClose={() => setShowUnsavedPopup(false)}*/}
//     {/*  onCancel={() => setShowUnsavedPopup(false)}*/}
//     {/*/>*/}
//     {/* <div className={styles.top}>
//       <div>
//         <IconDocFilled className={styles.icon} view="brand" />
//         <div className={styles.fileName}>
//           <h3>
//             {sharingItems.length > 1
//               ? `${sharingItems.length} files`
//               : sharingItems[0].name}
//           </h3>
//           {sharingItems.length === 1 &&
//           sharingItems[0].accessControlConditions ? (
//             <a
//               className={styles.link}
//               onClick={() => setActiveStep("currentRequirements")}
//             >
//               {totalAccessControlConditions} access requirement
//               {totalAccessControlConditions > 1 ? "s" : ""}
//             </a>
//           ) : null}
//         </div>
//       </div>
//       <IconClose className={styles.close} onClick={onClose} />
//     </div> */}
