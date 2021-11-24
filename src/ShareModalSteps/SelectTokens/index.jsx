import React, { useState } from "react";
import { ethers } from "ethers";
import LitJsSdk from "lit-js-sdk";

import styles from "./select-tokens.module.scss";

import InputWrapper from "../../InputWrapper/InputWrapper";
import ChainSelector from "../../ChainSelector/ChainSelector";
import Navigation from "../../Navigation";
import TokenSelect from "../../TokenSelect";

const SelectTokens = ({
  setActiveStep,
  onAccessControlConditionsSelected,
  tokenList,
}) => {
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState(null);
  const [contractAddress, setContractAddress] = useState("");
  const [chain, setChain] = useState(null);

  const handleSubmit = async () => {
    console.log("handleSubmit and selectedToken is", selectedToken);

    if (selectedToken.value === "ethereum") {
      // ethereum
      const amountInWei = ethers.utils.parseEther(amount);
      const accessControlConditions = [
        {
          contractAddress: "",
          standardContractType: "",
          chain: chain.value,
          method: "eth_getBalance",
          parameters: [":userAddress", "latest"],
          returnValueTest: {
            comparator: ">=",
            value: amountInWei.toString(),
          },
        },
      ];
      onAccessControlConditionsSelected(accessControlConditions);
    } else {
      console.log("selectedToken", selectedToken);

      let tokenType;
      if (selectedToken.standard?.toLowerCase() === "erc721") {
        tokenType = "erc721";
      } else if (selectedToken.decimals) {
        tokenType = "erc20";
      } else {
        // if we don't already know the type, try and get decimal places.  if we get back 0 or the request fails then it's probably erc721.
        let decimals = 0;
        try {
          decimals = await LitJsSdk.decimalPlaces({
            contractAddress: selectedToken.value,
          });
        } catch (e) {
          console.log(e);
        }
        if (decimals == 0) {
          tokenType = "erc721";
        } else {
          tokenType = "erc20";
        }
      }

      console.log("tokenType is", tokenType);

      if (tokenType == "erc721") {
        // erc721
        const accessControlConditions = [
          {
            contractAddress: selectedToken.value,
            standardContractType: "ERC721",
            chain: chain.value,
            method: "balanceOf",
            parameters: [":userAddress"],
            returnValueTest: {
              comparator: ">=",
              value: amount.toString(),
            },
          },
        ];
        onAccessControlConditionsSelected(accessControlConditions);
      } else {
        // erc20 token
        let amountInBaseUnit;
        if (selectedToken.decimals) {
          amountInBaseUnit = ethers.utils.parseUnits(
            amount,
            selectedToken.decimals
          );
        } else {
          // need to check the contract for decimals
          // this will auto switch the chain to the selected one in metamask
          let decimals = 0;
          try {
            decimals = await LitJsSdk.decimalPlaces({
              contractAddress: selectedToken.value,
            });
          } catch (e) {
            console.log(e);
          }
          console.log(`decimals in ${selectedToken.value}`, decimals);
          amountInBaseUnit = ethers.utils.parseUnits(amount, decimals);
        }
        const accessControlConditions = [
          {
            contractAddress: selectedToken.value,
            standardContractType: "ERC20",
            chain: chain.value,
            method: "balanceOf",
            parameters: [":userAddress"],
            returnValueTest: {
              comparator: ">=",
              value: amountInBaseUnit.toString(),
            },
          },
        ];
        onAccessControlConditionsSelected(accessControlConditions);
      }
    }
    setActiveStep("accessCreated");
  };

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
      <div className={styles.title}>
        Which wallet should be able to access this file?
      </div>
      <div className={styles.form}>
        <div className={styles.inputMaxWidth}>
          <div className={styles.select}>
            <label>Select blockchain to check requirements against:</label>
            <ChainSelector chain={chain} setChain={setChain} />
          </div>
        </div>
        <div className={styles.select}>
          <label>Select token/NFT or enter contract address: </label>
          <div className={styles.tokenOrContractAddress}>
            <TokenSelect tokenList={tokenList} onSelect={setSelectedToken} />
            <div className={styles.separator}>OR</div>
            <InputWrapper
              placeholder="ERC20 or ERC721 address"
              value={contractAddress}
              className={styles.input}
              id="amount"
              autoFocus
              size="m"
              handleChange={setContractAddress}
            />
          </div>
        </div>
        <div className={styles.inputMaxWidth}>
          <InputWrapper
            value={amount}
            className={styles.input}
            label="How many tokens does the wallet need to own?"
            id="amount"
            autoFocus
            size="m"
            handleChange={(value) => setAmount(value)}
          />
        </div>
      </div>

      <Navigation
        backward={{ onClick: () => setActiveStep("ableToAccess") }}
        forward={{
          label: "Create Requirement",
          onClick: handleSubmit,
          withoutIcon: true,
          disabled: !amount || !(selectedToken || contractAddress) || !chain,
        }}
      />
    </div>
  );
};

export default SelectTokens;
