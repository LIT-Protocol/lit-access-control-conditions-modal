import React, { useState } from "react";
import LitJsSdk from "lit-js-sdk";
import styles from "./which-wallet.module.scss";

import InputWrapper from "../../InputWrapper/InputWrapper";
import ChainSelector from "../../ChainSelector/ChainSelector";
import FileDropper from "../../FileDropper";
import Navigation from "../../Navigation";

const WhichWallet = ({
  setActiveStep,
  onAccessControlConditionsSelected,
  setError,
}) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [chain, setChain] = useState(null);
  const [nftOwnership, setNftOwnership] = useState(null);

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
      <div className={styles.title}>
        Which wallet should be able to access this?
      </div>
      <div className={styles.form}>
        <div className={styles.select}>
          <label>Select blockchain</label>
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

        <FileDropper
          className={styles.filedropper}
          onFilesSelected={setNftOwnership}
        />
      </div>

      <Navigation
        backward={{ onClick: () => setActiveStep("ableToAccess") }}
        forward={{
          label: "Create Requirment",
          onClick: handleSubmit,
          withoutIcon: true,
          disabled: !walletAddress || !chain,
        }}
      />
    </div>
  );
};

export default WhichWallet;
