import React from 'react'
import { useParams } from 'react-router'
import { modulesArray } from '../../modules/modules'
import Lesson from '../Lesson/Lesson'
import classes from './ModuleByID.module.css'

const ModuleByID = () => {
  const params = useParams()
  const lessons = modulesArray[params.module - 1].lessons

  return (
    <div className={classes.moduleById}>
      <h1>Модуль №{params.module}</h1>
      <div className={classes.moduleGrid}>
        {lessons.map((lesson, idx) => (
          <Lesson
            lessonIsAvailable={lesson.lessonIsAvailable}
            title={lesson.lessonTitle}
            number={params.module}
            body={lesson.lessonBody}
            key={lesson.lessonNumber}
            lessonNumber={lesson.lessonNumber}
            lessonIsCompleted={lesson.lessonIsCompleted}
            count={idx}
          />
        ))}
      </div>
    </div>
  )
}

export default ModuleByID
