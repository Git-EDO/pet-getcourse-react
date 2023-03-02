import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { modulesArray } from '../../modules/modules'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import OpenButton from '../UI/OpenButton/OpenButton'
import { ModulesContext } from '../../context/ModulesContext'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import classes from './LessonByID.module.css'

const LessonByID = () => {
  const params = useParams()
  const currentModule = modulesArray.find(
    (module) => module.moduleNumber == params.module
  )
  const currentLesson = currentModule.lessons[params.lesson - 1]

  const { finishLesson, showToast } = useContext(ModulesContext)
  const setLessonIsDone = () => {
    finishLesson(currentModule, currentLesson)
    showToast()
    setButtonState('Завершено')
  }

  const [buttonState, setButtonState] = useState('Завершить')

  useEffect(() => {
    currentLesson.lessonIsCompleted
      ? setButtonState('Завершено')
      : setButtonState('Завершить')
  }, [])

  return (
    <div>
      <Breadcrumbs
        module={currentModule.moduleNumber}
        lesson={currentLesson.lessonBody}
      />
      <div className={classes.lessonByIDGrid}>
        <div className={classes.lessonVideoMaterials}>
          <div className={classes.lessonVideoContent}>
            <AiOutlinePlayCircle style={{ width: '32px', height: '32px' }} />
          </div>
        </div>
        <div className={classes.lessonContent}>
          <div className={classes.lessonModule}>
            <span>Модуль №{currentModule.moduleNumber}</span>
          </div>
          <div className={classes.lessonTitle}>{currentLesson.lessonTitle}</div>
          <div className={classes.lessonBody}>{currentLesson.lessonBody}</div>
          <div className={classes.lessonButtons}>
            <OpenButton icon="done" onClick={setLessonIsDone} disabled={true}>
              {buttonState}
            </OpenButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonByID
