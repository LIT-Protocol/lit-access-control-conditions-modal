import React from "react";
import cx from "classnames";

import styles from "./able-to-access.module.scss";

import Navigation from "../../Navigation";
import { Button } from "@mui/material";

const TypeButton = (props) => {
  const { type, icon, title, onClick } = props;

  return (
    <div className={styles.type} onClick={() => onClick(type)}>
      <div className={cx(styles.icon, styles[`${icon}Icon`])} />
      <div className={styles.typeTitle}>{title}</div>
    </div>
  );
};

const ITEMS = [
  {
    type: "whichWallet",
    icon: "wallet",
    title: "An Individual Wallet",
  },
  {
    type: "selectTokens",
    icon: "token",
    title: "A Group of Token or NFT Owners",
  },
  {
    type: "DAOMembers",
    icon: "dao",
    title: "DAO Members",
  },
  {
    type: "choosePOAP",
    icon: "poap",
    title: "POAP Collectors",
  },
];

const AbleToAccess = (props) => {
  const { setActiveStep, onMainBack } = props;

  return (
    <div className={styles.ableToAccess}>
      <div className={styles.title}>Who should be able to access this asset?</div>
      <div className={styles.types}>
        {ITEMS.map((item, i) => (
          <TypeButton key={i} {...item} onClick={setActiveStep} />
        ))}
      </div>
      <Navigation backward={{ onClick: onMainBack }} />
    </div>
  );
};

export default AbleToAccess;
