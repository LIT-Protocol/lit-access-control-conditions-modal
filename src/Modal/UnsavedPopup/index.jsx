import React from 'react'

import styles from './unsaved-popup.module.scss'
import { Button, Modal, Box } from "@mui/material";

const UnsavedPopup = (props) => {
  const { onClose, onCancel, open } = props

  return (
    <Modal open={open} className={styles.unsavedPopupWrapper} hideBackdrop={true}>
      <Box className={styles.unsavedPopup}>
        You have unsaved changes. Are you sure you want to exit?
        <div className={styles.buttons}>
          <Button variant={'contained'} onClick={onCancel}>No, keep editing</Button>
          <Button variant={'contained'} color={'grey'} onClick={onClose}>Yes, exit</Button>
        </div>
      </Box>
    </Modal>
  )
}

export default UnsavedPopup
