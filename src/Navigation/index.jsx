import React from 'react'

import styles from './navigation.module.scss'

import { Button } from '@mui/material';
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Navigation = (props) => {
    const {
        backward,
        forward
    } = props

    return (
        <div className={styles.navigation}>
            {backward ?
              <Button variant={'outlined'}
                      onClick={backward.onClick}
                      size={'large'}
                      startIcon={<ArrowBack/>}
              >
                  {backward?.label ?? 'Back'}
              </Button>
            : null}

            {forward ?
              <Button onClick={forward.onClick}
                      variant={'contained'}
                      size={'large'}
                      disabled={forward.disabled}
                      endIcon={<ArrowForward/>}
              >
                  {forward.label ?? 'Next'}
              </Button>
            : null}
        </div>
    )
}

export default Navigation
