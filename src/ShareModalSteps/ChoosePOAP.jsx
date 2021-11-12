import React, { useEffect, useState, useRef } from "react";

import styles from "../share-modal.module.scss";

import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/uikit/IconBackward";
import { ProgressSpin } from "@consta/uikit/ProgressSpin";

import { components } from "react-select";
import { Select } from "react-select-virtualized";

import InputWrapper from "../InputWrapper/InputWrapper";

const Input = (props) => <components.Input {...props} isHidden={false} />;

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

const ChoosePOAP = ({ setActiveStep, onAccessControlConditionsSelected }) => {
  const [POAPName, setPOAPName] = useState("");
  const [matchCondition, setMatchCondition] = useState(null);
  const [poapList, setPoapList] = useState([]);
  const [selectedPoap, setSelectedPoap] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const selectRef = useRef();

  const onInputChange = (inputValue, { action }) => {
    // onBlur => setInputValue to last selected value
    if (action === "input-blur") {
      setInputValue(selectedPoap ? selectedPoap.label : "");
    }

    // onInputChange => update inputValue
    else if (action === "input-change") {
      setInputValue(inputValue);
    }
  };

  const onChange = (option) => {
    setSelectedPoap(option);
    setInputValue(option ? option.label : "");
  };

  const onFocus = () =>
    selectedPoap && selectRef.current.select.inputRef.select();

  useEffect(() => {
    const go = async () => {
      const url = "https://api.poap.xyz/events";
      const resp = await fetch(url).then((response) => response.json());
      console.log("resp", resp);
      setPoapList(
        resp.map((r) => ({
          label: r.name,
          id: r.name,
          value: r.name,
        }))
      );
    };
    go();
  }, []);

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

      {!poapList || poapList.length == 0 ? (
        <ProgressSpin />
      ) : (
        <>
          <div className={styles.form}>
            <Select
              isClearable
              defaultValue=""
              options={poapList}
              value={selectedPoap}
              isLoading={!poapList || poapList.length == 0}
              ref={selectRef}
              inputValue={inputValue}
              onInputChange={onInputChange}
              onChange={onChange}
              onFocus={onFocus}
              controlShouldRenderValue={false}
              components={{
                Input,
              }}
            />
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
        </>
      )}
    </div>
  );
};

export default ChoosePOAP;
