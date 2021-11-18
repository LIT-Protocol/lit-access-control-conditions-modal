import React from 'react'

import styles from './navigation.module.scss'

import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/uikit/IconBackward";
import { IconForward } from "@consta/uikit/IconForward";

const Navigation = (props) => {
    const { 
        backward, 
        forward 
    } = props

    return (
        <div className={styles.navigation}>
            {backward ? 
              <Button 
                label={backward?.label ?? 'Back'}
                size="l"
                view="secondary"
                iconLeft={IconBackward}
                onClick={backward.onClick}
              />
            : null}

            {forward ?
              <Button 
                label={forward.label ?? 'Next'}
                size="l"
                disabled={forward.disabled}
                iconRight={!forward.withoutIcon ? IconForward : undefined}
                onClick={forward.onClick}
              />
            : null}
        </div>
    )
}

export default Navigation
