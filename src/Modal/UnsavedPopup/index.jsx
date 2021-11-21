import React from 'react'

import styles from './unsaved-popup.module.scss'

import { Button } from '@consta/uikit/Button'

const UnsavedPopup = (props) => {
  const { onClose, onCancel } = props

  return (
    <div className={styles.unsavedPopupWrapper}>
      <div className={styles.unsavedPopup}>
        You have unsaved changes. Are you sure you want to exit?
        <div className={styles.buttons}>
          <Button size="m" label="No, keep editing" onClick={onCancel} />
          <Button size="m" label="Yes, exit." view="ghost" onClick={onClose} />
        </div>
      </div>
    </div>
  )
}

export default UnsavedPopup
