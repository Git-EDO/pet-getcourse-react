import React from 'react'
import { IoFolderOpenOutline } from 'react-icons/io5'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import classes from './OpenButton.module.css'

const OpenButton = ({ children, onClick, icon, disabled }) => {
  return (
    <button
      className={classes.openButton}
      onClick={onClick}
      disabled={!disabled}
    >
      {icon === 'done' ? (
        <IoCheckmarkDoneCircleSharp
          style={{ width: '16px', height: '16px', marginRight: '5px' }}
        />
      ) : (
        <IoFolderOpenOutline
          style={{ width: '16px', height: '16px', marginRight: '5px' }}
        />
      )}

      {children}
    </button>
  )
}

export default OpenButton
