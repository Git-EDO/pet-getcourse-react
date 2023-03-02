import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import OpenButton from '../../../UI/OpenButton/OpenButton'
import classes from './ActiveLesson.module.css'

const ActiveLesson = ({ activeLesson, activeModule, count }) => {
  const router = useNavigate()
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => setAppear(true), count * 200)
  }, [])

  return (
    <div
      className={
        appear
          ? [classes.dashboardItem, classes.activeLesson, classes.appear].join(
              ' '
            )
          : [classes.dashboardItem, classes.activeLesson].join(' ')
      }
    >
      <div className={classes.lessonHeader}>
        <span>Вы проходите</span>
      </div>
      <div className={classes.lessonTitle}>{activeLesson.lessonTitle}</div>
      <div className={classes.lessonBody}>{activeLesson.lessonBody}</div>
      <div className={classes.lessonButtonWrapper}>
        <OpenButton
          onClick={() =>
            router(
              `/modules/${activeModule.moduleNumber}/${activeLesson.lessonNumber}`
            )
          }
          disabled="true"
        >
          К уроку
        </OpenButton>
      </div>
    </div>
  )
}

export default ActiveLesson
