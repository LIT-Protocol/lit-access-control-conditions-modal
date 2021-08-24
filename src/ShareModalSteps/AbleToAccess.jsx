import React, { useState } from 'react'

import styles from '../share-modal.module.scss'

import { IconBackward } from "@consta/uikit/IconBackward"

const AbleToAccess = ({setActiveStep}) => {
  return (
    <div className={styles.ableToAccess}>
      <div className={styles.back} onClick={() => setActiveStep('whatToDo')}>
        <IconBackward view="link" className={styles.icon}/> Back
      </div>
      <div className={styles.titles}>
        <h3>Who should be able to access this file?</h3>
      </div>
      <div className={styles.types}>
        <div className={styles.type} onClick={() => setActiveStep('whichWallet')}>
          <div className={styles.btnBock}>
            <div className={styles.imgIcon}>
              <div className={styles.walletIcon}></div>
            </div>
            <h5>An Individual Wallet</h5>
          </div>
        </div>
        <div className={styles.type} onClick={() => setActiveStep('selectTokens')}>
          <div className={styles.btnBock}>
            <div className={styles.imgIcon}>
              <div className={styles.tokenIcon}></div>
            </div>
            <h5>A Group of Token or NFT Owners</h5>
          </div>
        </div>
        <div className={styles.type} onClick={() => setActiveStep('DAOMembers')}>
          <div className={styles.btnBock}>
            <div className={styles.imgIcon}>
              <div className={styles.daoIcon}></div>
            </div>
            <h5>DAO Members</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AbleToAccess