import React from 'react'
import cx from 'classnames'

import styles from './input-wrapper.module.scss'

import { TextField } from '@consta/uikit/TextField'
import { IconClose } from '@consta/uikit/IconClose'

const InputWrapper = ({
  type = 'text',
  className,
  id,
  label,
  error,
  value,
  handleChange = () => false,
  readOnly = false,
  autoFocus = false,
  placeholder,
  rightSide,
  size,
  leftSide,
  clearable = false,
  onClear = () => false,
}) => {

  const getState = () => {
    if (error) {
      return 'alert'
    }
    return undefined
  }
  return (
    <div className={cx(styles.input, className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <div>
        {clearable && (
          <IconClose size="s" className={styles.clearable} onClick={onClear} />
        )}
        <TextField
          readOnly={readOnly}
          type={type}
          id={id}
          state={getState()}
          value={value}
          onChange={({ value }) => handleChange(value)}
          autoFocus={autoFocus}
          placeholder={placeholder}
          rightSide={rightSide}
          size={size}
          leftSide={leftSide}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default InputWrapper
