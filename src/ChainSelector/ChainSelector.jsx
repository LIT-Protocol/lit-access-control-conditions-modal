import React, { useMemo, useEffect } from "react";
import Select from "react-select";
import LitJsSdk from "lit-js-sdk";

const ChainSelector = ({ chain, setChain }) => {
  // default is eth
  useEffect(
    () =>
      setChain({
        label: "Ethereum",
        id: "ethereum",
        value: "ethereum",
      }),
    []
  );

  const chainOptions = useMemo(
    () =>
      Object.keys(LitJsSdk.LIT_CHAINS).map((item) => {
        return {
          label: LitJsSdk.LIT_CHAINS[item].name,
          id: item,
          value: item,
        };
      }),
    [LitJsSdk.LIT_CHAINS]
  );

  return (
    <Select
      classNamePrefix="react-select"
      placeholder="Select a blockchain"
      isClearable
      options={chainOptions}
      value={chain}
      // menuPortalTarget={document.body}
      onChange={(value) => setChain(value)}
    />
  );
};

export default ChainSelector;
