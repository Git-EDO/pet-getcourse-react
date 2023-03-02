import React, { useContext, useEffect, useState } from 'react'
import { GiStarFormation } from 'react-icons/gi'
import { ModulesContext } from '../../context/ModulesContext'
import classes from './ToastMessages.module.css'

const ToastMessages = () => {
  const [appear, setAppear] = useState(false)
  const [nextLessonTitle, setNextLessonTitle] = useState('')
  const { nextLesson } = useContext(ModulesContext)

  useEffect(() => {
    if (nextLesson.lessonNumber) {
      setNextLessonTitle(nextLesson.lessonTitle)
      setAppear(true)
      setTimeout(() => {
        setAppear(false)
      }, 4000)
    }
  }, [nextLesson])

  return (
    <div className={classes.toastMessages}>
      <div
        className={
          appear
            ? [classes.toastMessage, classes.appear].join(' ')
            : classes.toastMessage
        }
      >
        <div className={classes.toastMsgIcon}>
          <GiStarFormation style={{ width: 24, height: 24 }} />
        </div>
        <div className={classes.toastMsgText}>
          <div className={classes.toastMsgCongratulations}>Поздравляем!</div>
          <div className={classes.toastMsg}>
            Вам доступен новый урок:{' '}
            <span className={classes.toastMsgTitle}>{nextLessonTitle}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastMessages
