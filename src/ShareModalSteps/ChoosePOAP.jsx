import React, { useState } from "react";

import styles from "../share-modal.module.scss";

import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/uikit/IconBackward";

import Select from "react-select";

import InputWrapper from "../InputWrapper/InputWrapper";

const matchConditionOptions = [
  {
    label: "Equals POAP Name exactly",
    id: "equals",
    value: "=",
  },
  {
    label: "Contains POAP Name",
    id: "contains",
    value: "contains",
  },
];

const DAOMembers = ({ setActiveStep, onAccessControlConditionsSelected }) => {
  const [POAPName, setPOAPName] = useState("");
  const [matchCondition, setMatchCondition] = useState(null);

  const handleSubmit = () => {
    const chain = "xdai";
    const accessControlConditions = [
      {
        contractAddress: "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
        standardContractType: "ERC721",
        chain,
        method: "balanceOf",
        parameters: [":userAddress"],
        returnValueTest: {
          comparator: ">",
          value: "0",
        },
      },
      {
        contractAddress: "0x22C1f6050E56d2876009903609a2cC3fEf83B415",
        standardContractType: "POAP",
        chain,
        method: "tokenURI",
        parameters: [],
        returnValueTest: {
          comparator: matchCondition.value,
          value: POAPName,
        },
      },
    ];
    onAccessControlConditionsSelected(accessControlConditions);
    setActiveStep("accessCreated");
  };

  return (
    <div>
      <div
        className={styles.back}
        onClick={() => setActiveStep("ableToAccess")}
      >
        <IconBackward view="link" className={styles.icon} /> Back
      </div>
      <div className={styles.titles}>
        <h3>Which POAP holders should be able to access this?</h3>
      </div>
      <div className={styles.form}>
        <InputWrapper
          value={POAPName}
          className={styles.input}
          label="POAP Name"
          id="POAPName"
          autoFocus
          size="m"
          handleChange={(value) => setPOAPName(value)}
        />
        <div className={styles.select}>
          <span className={styles.label}>Match Conditions</span>
          <Select
            isClearable
            options={matchConditionOptions}
            value={matchCondition}
            onChange={(value) => setMatchCondition(value)}
          />
        </div>
        <Button
          label="Create  Requirment"
          className={styles.btn}
          size="l"
          onClick={handleSubmit}
          disabled={!POAPName || !matchCondition}
        />
      </div>
    </div>
  );
};

export default DAOMembers;
