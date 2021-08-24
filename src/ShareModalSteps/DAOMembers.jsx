import React, { useState } from 'react'

import styles from '../share-modal.module.scss'

import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/uikit/IconBackward"

import InputWrapper from '../InputWrapper/InputWrapper'
import ChainSelector from '../ChainSelector/ChainSelector'

const DAOMembers = ({ setActiveStep, awaitingUpload, onAccessControlConditionsSelected }) => {
  const [DAOAddress, setDAOAddress] = useState('')
  const [chain, setChain] = useState(null)

  const handleSubmit = () => {
    const accessControlConditions = [
      {
        contractAddress: DAOAddress,
        standardContractType: 'MolochDAOv2.1',
        chain: chain.value,
        method: 'members',
        parameters: [
          ':userAddress',
        ],
        returnValueTest: {
          comparator: '==',
          value: 'true'
        }
      }
    ]
    onAccessControlConditionsSelected(accessControlConditions)
    if (awaitingUpload) {
      setActiveStep('uploading')
    } else {
      setActiveStep('accessCreated')
    }
  }

  return (
    <div>
      <div className={styles.back} onClick={() => setActiveStep('ableToAccess')}>
        <IconBackward view="link" className={styles.icon} /> Back
      </div>
      <div className={styles.titles}>
        <h3>Which DAO’s members should be able to access this file?</h3>
      </div>
      <div className={styles.form}>
        <div className={styles.select}>
          <span className={styles.label}>Select blockchain</span>
          <ChainSelector chain={chain} setChain={setChain} />
        </div>
        <InputWrapper
          value={DAOAddress}
          className={styles.input}
          label="Add DAO contract address"
          id="DAOAddress"
          autoFocus
          size="m"
          handleChange={(value) => setDAOAddress(value)}
        />
        <p>Lit Gateway currently supports DAOs using the MolochDAOv2.1 contract (includes DAOhaus) </p>
        <Button label="Create  Requirment" className={styles.btn} size="l" onClick={handleSubmit} disabled={!DAOAddress || !chain} />
      </div>
    </div>
  )
}

export default DAOMembers