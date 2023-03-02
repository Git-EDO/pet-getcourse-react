import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import OpenButton from '../UI/OpenButton/OpenButton'
import classes from './Module.module.css'

const Module = ({ title, number, count, moduleIsAvailable, completed }) => {
  const router = useNavigate()
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => setAppear(true), 200 * count)
  }, [])

  return (
    <div
      className={
        appear
          ? [classes.modulesItem, classes.appear].join(' ')
          : classes.modulesItem
      }
    >
      <span
        className={
          completed
            ? [classes.moduleAvailability, classes.completed].join(' ')
            : moduleIsAvailable
            ? [classes.moduleAvailability, classes.available].join(' ')
            : classes.moduleAvailability
        }
      >
        {completed ? 'Завершен' : moduleIsAvailable ? 'Доступен' : 'Недоступен'}
      </span>
      <div className={classes.moduleHeader}>
        <span>Модуль {number}</span>
      </div>
      <div className={classes.moduleTitle}>{title}</div>
      <div className={classes.moduleButtonWrapper}>
        <OpenButton
          onClick={() => {
            router(`/modules/${number}`)
          }}
          disabled={moduleIsAvailable}
        >
          Открыть
        </OpenButton>
      </div>
    </div>
  )
}

export default Module
