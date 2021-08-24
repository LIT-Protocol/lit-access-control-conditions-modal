import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import LitJsSdk from 'lit-js-sdk'

const ChainSelector = ({ chain, setChain }) => {

  const chainOptions = useMemo(() =>
    Object.keys(LitJsSdk.LIT_CHAINS).map(item => {
      return {
        label: LitJsSdk.LIT_CHAINS[item].name,
        id: item,
        value: item
      };
    }), [LitJsSdk.LIT_CHAINS])

  return (
    <Select
      isClearable
      defaultValue={''}
      options={chainOptions}
      value={chain}
      onChange={value => setChain(value)}
    />

  )
}

export default ChainSelector