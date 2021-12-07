import React, { useState } from 'react'
import cx from 'classnames'

import styles from './modal.module.scss'

import { Modal, Box } from '@mui/material'

import UnsavedPopup from './UnsavedPopup'
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const ModalComponent = (props) => {
  const {
    isOpen,
    children,
    title,
    darkMode,
    withCloseButton = true,
    unsavedPopup = false,
    onClose = () => false,
  } = props

  const [showUnsavedPopup, setShowUnsavedPopup] = useState(false)

  const passedProps = { ...props }
  delete passedProps.children
  delete passedProps.isOpen
  delete passedProps.withCloseButton
  delete passedProps.onClose
  delete passedProps.unsavedPopup
  delete passedProps.title

  const handleClose = () => {
    if (!unsavedPopup) {
      onClose()
    } else {
      setShowUnsavedPopup(true)
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.modalContainer}>
      <UnsavedPopup
        open={showUnsavedPopup}
        onClose={onClose}
        onCancel={() => setShowUnsavedPopup(false)}
      />
      <Modal open={isOpen}
        {...passedProps}
        className={cx(passedProps.className, styles.modal && styles.dark)}
        hideBackdrop={true}
      >
        <Box className={styles.modal}>
          {withCloseButton ? (
            <div className={styles.closeButton}>
              <IconButton className={styles.icon} onClick={handleClose} >
                <Close/>
              </IconButton>
              {/*<IconClose className={styles.icon} onClick={handleClose} />*/}
            </div>
          ) : null}
          <div className={styles.inner}>
            {title ? <div className={styles.title}>{title}</div> : null}
            {children}
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent
