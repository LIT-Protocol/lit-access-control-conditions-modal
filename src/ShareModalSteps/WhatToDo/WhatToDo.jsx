import React, { useState } from "react";

import styles from "./what-to-do.module.scss";



const WhatToDo = ({
  setActiveStep,
  sharingItems,
  onlyAllowCopySharingLink,
  copyToClipboard,
  copyLinkText,
}) => {
  return (
    <div>
      <div className={styles.titles}>
        <h3>What would you like to do?</h3>
        {/* <a className={styles.link} onClick={() => setActiveStep('recentRequirement')}>Use a recent requirement</a> */}
      </div>
      <div className={styles.types}>
        {!onlyAllowCopySharingLink ? (
          <div
            className={styles.type}
            onClick={() => setActiveStep("ableToAccess")}
          >
            <h4>Create Requirement</h4>
            <div className={styles.btnBock}>
              <div className={styles.lockIcon}></div>
              <h5>
                Lock this content with an existing token, NFT, or contract
              </h5>
            </div>
          </div>
        ) : null}

        {sharingItems.length === 1 &&
        (sharingItems[0].accessControlConditions ||
          onlyAllowCopySharingLink) ? (
          <div className={styles.type} onClick={() => copyToClipboard()}>
            <h4>Share</h4>
            <div className={styles.btnBock}>
              <div className={styles.linkIcon}></div>
              <h5>
                <a className={styles.link}>Click to copy link.</a> <br />
                {copyLinkText || "Only authorized wallets can open the file"}
              </h5>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WhatToDo;
