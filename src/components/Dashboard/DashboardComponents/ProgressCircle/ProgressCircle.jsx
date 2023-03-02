import React, { useState, useEffect } from 'react'
import classes from './ProgressCircle.module.css'

const ProgressCircle = ({ count, modules }) => {
  const [appear, setAppear] = useState(false)
  const [progress, setProgress] = useState(0)
  const [lessonsIsDone, setLessonsIsDone] = useState(0)

  useEffect(() => {
    const countOfLessons = modules.reduce(
      (acc, module) => acc + module.lessons.length,
      0
    )
    const countOfCompletedLessons = (modules) => {
      let result = 0
      for (let i = 0; i < modules.length; i++) {
        for (let j = 0; j < modules[i].lessons.length; j++) {
          if (modules[i].lessons[j].lessonIsCompleted) {
            result++
          }
        }
      }
      return result * 100
    }
    setLessonsIsDone(countOfCompletedLessons(modules) / 100)
    setProgress(Math.ceil(countOfCompletedLessons(modules) / countOfLessons))
  }, [])

  useEffect(() => {
    setTimeout(() => setAppear(true), count * 200)
  }, [])

  return (
    <div
      className={
        appear
          ? [classes.progressCircle, classes.appear].join(' ')
          : classes.progressCircle
      }
    >
      <div className={classes.progressCircleTitle}>Твой Yard</div>
      <div className={classes.progressCircleWrapper}>
        <div
          className={classes.progressCirclePie}
          style={{ '--percentage': progress }}
        >
          {progress}%
        </div>
        <div
          className={classes.progressCirclePieDouble}
          style={{ '--percentage': progress }}
        ></div>
      </div>
      <div className={classes.progressCircleFooter}>
        <div className={classes.progressCircleFooterDone}>
          Выполнено уроков:
        </div>
        <div className={classes.progressCircleFooterTasks}>
          <span>{lessonsIsDone}</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressCircle
