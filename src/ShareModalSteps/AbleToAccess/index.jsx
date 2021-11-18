import React from "react";
import cx from 'classnames'

import styles from "./able-to-access.module.scss";

import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/uikit/IconBackward";
// import { IconForward } from "@consta/uikit/IconForward";

const TypeButton = (props) => {
  const { 
    type, 
    icon,
    title,
    onClick
  } = props

  return(
    <div
      className={styles.type}
      onClick={() => onClick(type)}
    >
      <div className={cx(styles.icon, styles[`${icon}Icon`])} />
      <div className={styles.typeTitle}>{title}</div>
    </div>
  )
}

const ITEMS = [
  {
    type: 'whichWallet',
    icon: 'wallet',
    title: 'An Individual Wallet'
  },
  {
    type: 'selectTokens',
    icon: 'token',
    title: 'A Group of Token or NFT Owners'
  },
  {
    type: 'DAOMembers',
    icon: 'dao',
    title: 'DAO Members'
  },
  {
    type: 'choosePOAP',
    icon: 'poap',
    title: 'POAP Owners'
  }
]

const AbleToAccess = ({ setActiveStep }) => {
  return (
    <div className={styles.ableToAccess}>
      <div className={styles.title}>
        Who should be able to access this file??
      </div>
      <div className={styles.types}>
        {ITEMS.map((item)=>(
          <TypeButton {...item} onClick={setActiveStep} />
        ))}
      </div>

      <div className={styles.navigation}>
          <Button 
            label="Back"
            size="l"
            view="secondary"
            iconLeft={IconBackward}
            onClick={() => setActiveStep("whatToDo")} 
          />
          {/* <Button 
            label="Next"
            size="l"
            iconRight={IconForward}
          /> */}
      </div>
    </div>
  );
};

export default AbleToAccess;
