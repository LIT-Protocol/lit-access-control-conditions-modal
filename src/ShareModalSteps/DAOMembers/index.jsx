import React, { useState } from "react";

import styles from "./dao-members.module.scss";

import InputWrapper from "../../InputWrapper/InputWrapper";
import ChainSelector from "../../ChainSelector/ChainSelector";
import Navigation from "../../Navigation";

const DAOMembers = ({ setActiveStep, onAccessControlConditionsSelected }) => {
  const [DAOAddress, setDAOAddress] = useState("");
  const [chain, setChain] = useState(null);

  const handleSubmit = () => {
    const accessControlConditions = [
      {
        contractAddress: DAOAddress,
        standardContractType: "MolochDAOv2.1",
        chain: chain.value,
        method: "members",
        parameters: [":userAddress"],
        returnValueTest: {
          comparator: "=",
          value: "true",
        },
      },
    ];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep("accessCreated");
  };

  return (
    <div>
      <div className={styles.title}>
        Which DAO’s members should be able to access this asset?
      </div>
      <div className={styles.form}>
        <div className={styles.select}>
          <label>Select blockchain to check requirements against:</label>
          <ChainSelector chain={chain} setChain={setChain} />
        </div>

        <div className={styles.input}>
          <InputWrapper
            value={DAOAddress}
            className={styles.input}
            label="Add DAO contract address"
            id="DAOAddress"
            autoFocus
            size="m"
            handleChange={(value) => setDAOAddress(value)}
          />
        </div>
      </div>
      <p className={styles.info}>
        Lit Gateway currently supports DAOs using the MolochDAOv2.1 contract
        (includes DAOhaus){" "}
      </p>

      <Navigation
        backward={{ onClick: () => setActiveStep("ableToAccess") }}
        forward={{
          label: "Create Requirement",
          onClick: handleSubmit,
          withoutIcon: true,
          disabled: !DAOAddress || !chain,
        }}
      />
    </div>
  );
};

export default DAOMembers;
