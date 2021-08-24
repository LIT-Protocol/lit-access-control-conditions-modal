import React, { useState } from 'react'

import styles from '../share-modal.module.scss'

import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/uikit/IconBackward"

import InputWrapper from '../InputWrapper/InputWrapper'

const AssetWallet = ({ setActiveStep }) => {
  const [contactAdress, setContactAdress] = useState('')
  const [tokenId, setTokenId] = useState('')

  const handleSubmit = () => {
    setActiveStep('accessCreated')
  }

  return (
    <div>
      <div className={styles.back} onClick={() => setActiveStep('whichWallet')}>
        <IconBackward view="link" className={styles.icon} /> Back
      </div>
      <div className={styles.titles}>
        <h3>Which asset does a wallet need to own to access this file?</h3>
      </div>
      <div className={styles.form}>
        <InputWrapper
          value={contactAdress}
          className={styles.input}
          label="Add Contract Address"
          id="contactAdress"
          autoFocus
          size="m"
          handleChange={(value) => setContactAdress(value)}
        />
        <InputWrapper
          value={tokenId}
          className={styles.input}
          label="Add Token ID"
          id="tokenId"
          size="m"
          handleChange={(value) => setTokenId(value)}
        />
        <Button label="Create Requirement" className={styles.btn} onClick={handleSubmit} size="l" disabled={!contactAdress || !tokenId} />
      </div>
    </div>
  )
}

export default AssetWallet