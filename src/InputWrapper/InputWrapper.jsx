import React from 'react'
import cx from 'classnames'

import styles from './input-wrapper.module.scss'

import { IconButton, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";

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
          <IconButton size="s" className={styles.clearable} onClick={onClear} >
            <Close/>
          </IconButton>
        )}
        <TextField
          readOnly={readOnly}
          type={type}
          id={id}
          state={getState()}
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          autoFocus={autoFocus}
          placeholder={placeholder}
          size={size}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default InputWrapper
