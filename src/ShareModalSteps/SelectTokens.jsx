import React, { useState, useMemo } from 'react'
import CreatableSelect from 'react-select/creatable'
import { ethers } from 'ethers'
import LitJsSdk from 'lit-js-sdk'

import styles from '../share-modal.module.scss'
import tokens from '../tokens.json'

import { Button } from "@consta/uikit/Button"
import { IconBackward } from "@consta/uikit/IconBackward"

import InputWrapper from '../InputWrapper/InputWrapper'
import ChainSelector from '../ChainSelector/ChainSelector'


const SelectTokens = ({ setActiveStep, onAccessControlConditionsSelected }) => {
  const [amount, setAmount] = useState('')
  const [selectedToken, setSelectedToken] = useState(null)
  const [chain, setChain] = useState(null)

  const handleSubmit = async () => {
    console.log('handleSubmit and selectedToken is', selectedToken)

    if (selectedToken.address === 'ethereum') {
      // ethereum
      const amountInWei = ethers.utils.parseEther(amount)
      const accessControlConditions = [
        {
          contractAddress: '',
          standardContractType: '',
          chain: chain.value,
          method: 'eth_getBalance',
          parameters: [
            ':userAddress',
            'latest'
          ],
          returnValueTest: {
            comparator: '>=',
            value: amountInWei.toString()
          }
        }
      ]
      onAccessControlConditionsSelected(accessControlConditions)
    } else {
      // erc20 token
      console.log('selectedToken', selectedToken)
      let amountInBaseUnit
      if (selectedToken.decimals) {
        amountInBaseUnit = ethers.utils.parseUnits(amount, selectedToken.decimals)
      } else {
        // need to check the contract for decimals
        // this will auto switch the chain to the selected one in metamask
        const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: chain.value })
        let decimals = 0
        try {
          decimals = await LitJsSdk.decimalPlaces({ contractAddress: selectedToken.value })
        } catch (e) {
          console.log(e)
        }
        console.log(`decimals in ${selectedToken.value}`, decimals)
        amountInBaseUnit = ethers.utils.parseUnits(amount, decimals)
      }
      const accessControlConditions = [
        {
          contractAddress: selectedToken.address,
          standardContractType: 'ERC20',
          chain,
          method: 'balanceOf',
          parameters: [
            ':userAddress'
          ],
          returnValueTest: {
            comparator: '>=',
            value: amountInBaseUnit.toString()
          }
        }
      ]
      onAccessControlConditionsSelected(accessControlConditions)
    }
    setActiveStep('accessCreated')

  }

  const formatOptionLabel = (option, extra) => {
    const { name, logoURI, value } = option
    const { inputValue } = extra

    // console.log('option', option)
    // console.log('extra', extra)

    if (inputValue) {
      return inputValue
    }

    if (value) {
      return value
    }

    return (
      <div style={{ display: "flex" }}>
        {logoURI ?
          <img className={styles.selectIcon} src={logoURI} alt="img" />
          : null
        }
        <div>{name}</div>
      </div>
    )
  };

  return (
    <div>
      <div className={styles.back} onClick={() => setActiveStep('ableToAccess')}>
        <IconBackward view="link" className={styles.icon} /> Back
      </div>
      <div className={styles.titles}>
        <h3>Which wallets should be able to access this file?</h3>
      </div>
      <div className={styles.form}>
        <div className={styles.select}>
          <span className={styles.label}>Select blockchain</span>
          <ChainSelector chain={chain} setChain={setChain} />
        </div>
        <div className={styles.select}>
          <span className={styles.label}>Select token</span>
          <CreatableSelect
            isClearable
            defaultValue={''}
            formatOptionLabel={formatOptionLabel}
            getOptionValue={(option) => option.address}
            options={[
              {
                name: 'Ethereum',
                logoURI: null,
                address: 'ethereum'
              },
              ...tokens.tokens
            ]}
            value={selectedToken}
            // getNewOptionData={inputValue => ({ name: inputValue })}
            onChange={value => setSelectedToken(value)}
          />
        </div>
        <InputWrapper
          value={amount}
          className={styles.input}
          label="How many tokens does the wallet need to own?"
          id="amount"
          autoFocus
          size="m"
          handleChange={(value) => setAmount(value)}
        />
        <Button label="Create Requirement" className={styles.btn} size="l" onClick={handleSubmit} disabled={!amount || !selectedToken || !chain} />
      </div>
    </div>
  )
}

export default SelectTokens