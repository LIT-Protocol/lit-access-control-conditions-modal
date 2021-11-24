import React, { useState, useMemo } from "react";
import { Creatable } from "react-select-virtualized";
import styles from "../share-modal.module.scss";

import { Button } from "@consta/uikit/Button";

import InputWrapper from "../InputWrapper/InputWrapper";
import ChainSelector from "../ChainSelector/ChainSelector";
import Navigation from "../Navigation";

const AssetWallet = ({
  setActiveStep,
  onAccessControlConditionsSelected,
  tokenList,
}) => {
  const [tokenId, setTokenId] = useState("");
  const [chain, setChain] = useState(null);
  const [selectedToken, setSelectedToken] = useState(null);

  const tokenSelectBoxRows = useMemo(() => {
    return tokenList
      .filter((t) => t.standard?.toLowerCase() === "erc721")
      .map((t) => ({
        label: t.name,
        value: t.address,
      }));
  }, [tokenList]);

  const handleSubmit = () => {
    const accessControlConditions = [
      {
        contractAddress: selectedToken.value,
        standardContractType: "ERC721",
        chain: chain.value,
        method: "ownerOf",
        parameters: [tokenId],
        returnValueTest: {
          comparator: "=",
          value: ":userAddress",
        },
      },
    ];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep("accessCreated");
  };

  return (
    <div>
      <div className={styles.titles}>
        <h3>Which asset does a wallet need to own to access this?</h3>
        <a className={styles.link} onClick={() => setActiveStep("assetWallet")}>
          Grant Access to Wallet or Blockchain Domain
        </a>
      </div>
      <div className={styles.form}>
        <div className={styles.select}>
          <span className={styles.label}>Select blockchain</span>
          <ChainSelector chain={chain} setChain={setChain} />
        </div>
        <div className={styles.select}>
          <span className={styles.label}>
            Select token or enter contract address
          </span>
          <Creatable
            isClearable
            isSearchable
            defaultValue={""}
            options={tokenSelectBoxRows}
            onChange={(value) => setSelectedToken(value)}
          />
        </div>
        <InputWrapper
          value={tokenId}
          className={styles.input}
          label="Add Token ID"
          id="tokenId"
          size="m"
          handleChange={(value) => setTokenId(value)}
        />
        <Button
          label="Create Requirement"
          className={styles.btn}
          onClick={handleSubmit}
          size="l"
          disabled={!selectedToken || !tokenId || !chain}
        />
      </div>
      <Navigation
        backward={{ onClick: () => setActiveStep("ableToAccess") }}
        forward={{
          label: "Create Requirement",
          onClick: handleSubmit,
          withoutIcon: true,
          disabled: !tokenId || !chain,
        }}
      />
    </div>
  );
};

export default AssetWallet;
