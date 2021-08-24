import React, { useState, useEffect } from 'react'
import LitJsSdk from 'lit-js-sdk'

import styles from '../share-modal.module.scss'

import { Table } from "@consta/uikit/Table"
import { IconBackward } from "@consta/uikit/IconBackward"

const CurrentRequirements = ({ setActiveStep, sharingItems }) => {
  const [rows, setRows] = useState([])
  const accessControlConditions = sharingItems[0].accessControlConditions

  useEffect(() => {
    const go = async () => {
      const humanized = await LitJsSdk.humanizeAccessControlConditions({ accessControlConditions })
      setRows(humanized.map(h => ({ requirement: h })))
    }

    go()
  }, [sharingItems])

  const columns = [
    {
      title: 'Requirement',
      accessor: 'requirement',
      width: 600
    },
    // {
    //   title: 'Date Added',
    //   accessor: 'date',
    // },
  ];


  return (
    <div>
      <div className={styles.back} onClick={() => setActiveStep('ableToAccess')}>
        <IconBackward view="link" className={styles.icon} /> Back
      </div>
      <div className={styles.titles}>
        <h3>Wallets that meet one of these requirements can access this file</h3>
      </div>
      <div className={styles.table}>
        <Table borderBetweenRows columns={columns} rows={rows} emptyRowsPlaceholder='No requirements yet.' />
      </div>
    </div>
  )
}

export default CurrentRequirements