import React from 'react'
import cx from 'classnames'

import styles from './modal.module.scss'

import { Modal } from '@consta/uikit/Modal'
import { IconClose } from "@consta/uikit/IconClose";

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

  const passedProps = { ...props }
  delete passedProps.children
  delete passedProps.withCloseButton
  delete passedProps.onClose
  delete passedProps.unsavedPopup
  delete passedProps.title

  const handleClose = () => {
    onClose()
  }

  if (!isOpen) {
    return null
  }

  return (
    <Modal
      {...passedProps}
      onOverlayClick={handleClose}
      className={cx(passedProps.className, styles.modal, darkMode && styles.dark)}
    >
      {withCloseButton ? (
        <div className={styles.closeButton}>
          <IconClose className={styles.icon} onClick={handleClose} />
        </div>
      ) : null}
      <div className={styles.inner}>
        {title ? <div className={styles.title}>{title}</div> : null}
        {children}
      </div>
    </Modal>
  )
}

export default ModalComponent
