import React, { useState, useMemo } from 'react'
import { Creatable } from 'react-select-virtualized'
import { ethers } from 'ethers'
import LitJsSdk from 'lit-js-sdk'

import styles from '../share-modal.module.scss'

import { Button } from "@consta/uikit/Button"
import { IconBackward } from "@consta/uikit/IconBackward"

import InputWrapper from '../InputWrapper/InputWrapper'
import ChainSelector from '../ChainSelector/ChainSelector'


const SelectTokens = ({ setActiveStep, onAccessControlConditionsSelected, tokenList }) => {
  const [amount, setAmount] = useState('')
  const [selectedToken, setSelectedToken] = useState(null)
  const [chain, setChain] = useState(null)

  const tokenSelectBoxRows = useMemo(() => {
    return [
      {
        label: 'Ethereum',
        value: 'ethereum'
      },
      ...tokenList.map(t => ({
        label: t.name,
        value: t.address,
        standard: t.standard
      }))
    ]
  }, [tokenList])

  const handleSubmit = async () => {
    console.log('handleSubmit and selectedToken is', selectedToken)

    if (selectedToken.value === 'ethereum') {
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
      console.log('selectedToken', selectedToken)

      let tokenType
      if (selectedToken.standard?.toLowerCase() === 'erc721') {
        tokenType = 'erc721'
      } else if (selectedToken.decimals) {
        tokenType = 'erc20'
      } else {
        // if we don't already know the type, try and get decimal places.  if we get back 0 or the request fails then it's probably erc721.
        const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: chain.value })
        let decimals = 0
        try {
          decimals = await LitJsSdk.decimalPlaces({ contractAddress: selectedToken.value })
        } catch (e) {
          console.log(e)
        }
        if (decimals == 0) {
          tokenType = 'erc721'
        } else {
          tokenType = 'erc20'
        }
      }

      console.log('tokenType is', tokenType)

      if (tokenType == 'erc721') {
        // erc721
        const accessControlConditions = [
          {
            contractAddress: selectedToken.value,
            standardContractType: 'ERC721',
            chain: chain.value,
            method: 'balanceOf',
            parameters: [
              ':userAddress'
            ],
            returnValueTest: {
              comparator: '>',
              value: '0'
            }
          }
        ]
        onAccessControlConditionsSelected(accessControlConditions)
      } else {
        // erc20 token
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
            contractAddress: selectedToken.value,
            standardContractType: 'ERC20',
            chain: chain.value,
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
    }
    setActiveStep('accessCreated')

  }

  // const formatOptionLabel = (option, extra) => {
  //   const { name, logoURI, value } = option
  //   const { inputValue } = extra

  //   // console.log('option', option)
  //   // console.log('extra', extra)

  //   if (inputValue) {
  //     return inputValue
  //   }

  //   if (value) {
  //     return value
  //   }

  //   return (
  //     <div style={{ display: "flex" }}>
  //       {logoURI ?
  //         <img className={styles.selectIcon} src={logoURI} alt="img" />
  //         : null
  //       }
  //       <div>{name}</div>
  //     </div>
  //   )
  // };

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
          <span className={styles.label}>Select token or enter contract address.  Supports erc20 and erc721.</span>
          <Creatable
            isClearable
            isSearchable
            defaultValue={''}
            options={tokenSelectBoxRows}
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