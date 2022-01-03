import React, { useState } from "react";
import LitJsSdk from "lit-js-sdk";
import styles from "./which-wallet.module.scss";
// import styles from "../../share-modal.module.scss";

import InputWrapper from "../../InputWrapper/InputWrapper";
import ChainSelector from "../../ChainSelector/ChainSelector";
import Navigation from "../../Navigation";
import { Button } from "@mui/material";

const WhichWallet = ({
  setActiveStep,
  onAccessControlConditionsSelected,
  setError,
}) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [chain, setChain] = useState(null);

  const handleSubmit = async () => {
    let resolvedAddress = walletAddress;
    if (walletAddress.includes(".")) {
      // do domain name lookup
      resolvedAddress = await LitJsSdk.lookupNameServiceAddress({
        chain: chain.value,
        name: walletAddress,
      });
      if (!resolvedAddress) {
        console.log("failed to resolve ENS address");
        setError({
          title: "Could not resolve ENS address",
          details: "Try another wallet address",
        });
        return;
      }
    }
    const accessControlConditions = [
      {
        contractAddress: "",
        standardContractType: "",
        chain: chain.value,
        method: "",
        parameters: [":userAddress"],
        returnValueTest: {
          comparator: "=",
          value: resolvedAddress,
        },
      },
    ];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep("accessCreated");
  };

  return (
    <div>
      <div className={styles.titles}>
        <h4>Which wallet should be able to access this asset?</h4>
        <a className={styles.link} onClick={() => setActiveStep("assetWallet")}>
          Grant Access on NFT Ownership
        </a>
      </div>
      <div className={styles.form}>
        <div className={styles.select}>
          <label className={styles.label}>Select blockchain</label>
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
      </div>

      <Navigation
        backward={{ onClick: () => setActiveStep("ableToAccess") }}
        forward={{
          label: "Create Requirement",
          onClick: handleSubmit,
          withoutIcon: true,
          disabled: !walletAddress || !chain,
        }}
      />
    </div>
  );
};

export default WhichWallet;
