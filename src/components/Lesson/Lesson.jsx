import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import OpenButton from '../UI/OpenButton/OpenButton'
import classes from './Lesson.module.css'

const Lesson = ({
  title,
  body,
  number,
  count,
  lessonNumber,
  lessonIsAvailable,
  lessonIsCompleted,
}) => {
  const router = useNavigate()
  const [appear, setAppear] = useState(false)

  useEffect(() => {
    setTimeout(() => setAppear(true), 200 * count)
  }, [])

  return (
    <div
      className={
        appear
          ? [classes.lessonItem, classes.appear].join(' ')
          : classes.lessonItem
      }
    >
      <span
        className={
          lessonIsCompleted
            ? [classes.lessonAvailability, classes.completed].join(' ')
            : lessonIsAvailable
            ? [classes.lessonAvailability, classes.available].join(' ')
            : classes.lessonAvailability
        }
      >
        {lessonIsCompleted
          ? 'Завершен'
          : lessonIsAvailable
          ? 'Доступен'
          : 'Недоступен'}
      </span>
      <div className={classes.lessonHeader}>
        <span>Модуль {number}</span>
      </div>
      <div className={classes.lessonTitle}>{title}</div>
      <div className={classes.lessonBody}>{body}</div>
      <div className={classes.lessonButtonWrapper}>
        <OpenButton
          onClick={() => router(`/modules/${number}/${lessonNumber}`)}
          disabled={lessonIsAvailable}
        >
          К уроку
        </OpenButton>
      </div>
    </div>
  )
}

export default Lesson
