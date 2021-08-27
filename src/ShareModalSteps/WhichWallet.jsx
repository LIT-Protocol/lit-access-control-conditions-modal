import React, { useState } from 'react'
import LitJsSdk from 'lit-js-sdk'
import styles from '../share-modal.module.scss'

import { Button } from "@consta/uikit/Button"
import { IconBackward } from "@consta/uikit/IconBackward"

import InputWrapper from '../InputWrapper/InputWrapper'
import ChainSelector from '../ChainSelector/ChainSelector'

const WhichWallet = ({ setActiveStep, onAccessControlConditionsSelected }) => {
  const [walletAddress, setWalletAddress] = useState('')
  const [chain, setChain] = useState(null)

  const handleSubmit = async () => {
    let resolvedAddress = walletAddress
    if (walletAddress.includes(".")) {
      // do domain name lookup
      resolvedAddress = await LitJsSdk.lookupNameServiceAddress({ chain: chain.value, name: walletAddress })
    }
    const accessControlConditions = [
      {
        contractAddress: '',
        standardContractType: '',
        chain: chain.value,
        method: '',
        parameters: [
          ':userAddress',
        ],
        returnValueTest: {
          comparator: '=',
          value: resolvedAddress
        }
      }
    ]
    onAccessControlConditionsSelected(accessControlConditions)
    setActiveStep('accessCreated')
  }

  return (
    <div>
      <div className={styles.back} onClick={() => setActiveStep('ableToAccess')}>
        <IconBackward view="link" className={styles.icon} /> Back
      </div>
      <div className={styles.titles}>
        <h3>Which wallet should be able to access this file?</h3>
        <a className={styles.link} onClick={() => setActiveStep('assetWallet')}>Grant Access on NFT Ownership</a>
      </div>
      <div className={styles.form}>
        <div className={styles.select}>
          <span className={styles.label}>Select blockchain</span>
          <ChainSelector chain={chain} setChain={setChain} />
        </div>
        <InputWrapper
          value={walletAddress}
          className={styles.input}
          label="Add Wallet Address or Blockchain Domain (e.g. ENS, UNS) here:"
          id="walletAddress"
          autoFocus
          size="m"
          handleChange={(value) => setWalletAddress(value)}
        />
        <Button label="Create Requirement" className={styles.btn} size="l" onClick={handleSubmit} disabled={!walletAddress || !chain} />
      </div>
    </div>
  )
}

export default WhichWallet