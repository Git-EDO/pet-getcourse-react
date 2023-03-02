import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import OpenButton from '../../../UI/OpenButton/OpenButton'
import classes from './ActiveModule.module.css'

const ActiveModule = ({ activeModule, count }) => {
  const router = useNavigate()
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => setAppear(true), count * 200)
  }, [])

  return (
    <div
      className={
        appear
          ? [classes.dashboardItem, classes.activeModule, classes.appear].join(
              ' '
            )
          : [classes.dashboardItem, classes.activeModule].join(' ')
      }
    >
      <div className={classes.moduleHeader}>
        <span>Текущий модуль</span>
      </div>
      <div className={classes.moduleTitle}>{activeModule.moduleTitle}</div>
      <div className={classes.moduleBody}>{activeModule.moduleBody}</div>
      <div className={classes.moduleButtonWrapper}>
        <OpenButton
          onClick={() => router(`/modules/${activeModule.moduleNumber}`)}
          disabled="true"
        >
          Открыть
        </OpenButton>
      </div>
    </div>
  )
}

export default ActiveModule
