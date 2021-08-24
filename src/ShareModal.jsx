import React, { useState } from 'react'

import styles from './share-modal.module.scss'

import { IconDocFilled } from '@consta/uikit/IconDocFilled'
import { Modal } from '@consta/uikit/Modal'
import { IconClose } from "@consta/uikit/IconClose"
import { SnackBar } from '@consta/uikit/SnackBar';

import { WhatToDo, AbleToAccess, WhichWallet, AssetWallet, DAOMembers, AccessCreated, SelectTokens, RecentRequirement, CurrentRequirements } from './ShareModalSteps'


const ModalComponents = {
  whatToDo: WhatToDo,
  ableToAccess: AbleToAccess,
  whichWallet: WhichWallet,
  assetWallet: AssetWallet,
  DAOMembers: DAOMembers,
  accessCreated: AccessCreated,
  selectTokens: SelectTokens,
  recentRequirement: RecentRequirement,
  currentRequirements: CurrentRequirements
}

const ShareModal = (props) => {
  const {
    onClose,
    sharingItems,
    showStep,
    onAccessControlConditionsSelected,
    getSharingLink,
  } = props

  console.log('rendering ShareModal and sharingItems is', sharingItems)

  const [showingSnackbar, setShowingSnackbar] = useState(false)
  const [activeStep, setActiveStep] = useState(showStep || 'whatToDo')

  // console.log('accessControlConditions', accessControlConditions)

  const copyToClipboard = async () => {
    const fileUrl = getSharingLink(sharingItems[0])
    await navigator.clipboard.writeText(fileUrl)
    setShowingSnackbar(true)
    setTimeout(() => setShowingSnackbar(false), 5000)
  }


  const ModalComponent = (props) => {
    const { type } = props;

    let Component = ModalComponents[type]

    return (<Component
      {...props}
      sharingItems={sharingItems}
      copyToClipboard={copyToClipboard}
      onAccessControlConditionsSelected={onAccessControlConditionsSelected}
    />)
  }

  return (
    <Modal className={styles.modal} isOpen={true} hasOverlay>
      <div className={styles.fileModal}>
        <div className={styles.top}>
          <div>
            <IconDocFilled className={styles.icon} view="brand" />
            <div className={styles.fileName}>
              <h3>
                {sharingItems.length > 1
                  ? `${sharingItems.length} files`
                  : sharingItems[0].name}
              </h3>
              {sharingItems.length === 1 && sharingItems[0].accessControlConditions
                ? <a className={styles.link} onClick={() => setActiveStep('currentRequirements')}>{sharingItems[0].accessControlConditions.length} access requirement{sharingItems[0].accessControlConditions.length > 1 ? 's' : ''}</a>
                : null}
            </div>
          </div>
          <IconClose className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.body}>
          <ModalComponent type={activeStep} setActiveStep={setActiveStep} />
          {showingSnackbar ? <SnackBar styles={styles.snackbar} items={[{ key: 1, message: 'Copied!' }]} /> : null}
        </div>
      </div>

    </Modal>
  )
}

export default ShareModal

