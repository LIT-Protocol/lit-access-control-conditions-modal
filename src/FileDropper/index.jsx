import React from 'react'
import { useMemo, useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 12px',
  border: '1px dashed rgba(0, 5, 51, 0.6)',
  borderRadius: '3px',
  backgroundColor: '#fafafa',
  color: 'rgb(119 119 119)',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  maxWidth: '304px',
  margin: '0 auto',
  boxSizing: 'border-box',
  cursor: 'pointer',
  textAlign: 'center'
}

const activeStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

const FileDropper = (props) => {
  const { 
    defaultFiles = [], 
    onFilesSelected = () => false,
    className
  } = props

  const [selectedFiles, setSelectedFiles] = useState([...defaultFiles])

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles(acceptedFiles)
    onFilesSelected(acceptedFiles)
  }, [])
  
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept],
  )

  return (
    <div className={className}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>
          {selectedFiles.length ? selectedFiles[0].name : '+ Add NFT ownership requirement'}
        </p>
      </div>
    </div>
  )
}

export default FileDropper
