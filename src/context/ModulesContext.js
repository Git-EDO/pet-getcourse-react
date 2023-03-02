import { createContext, useState } from 'react'
import { modulesArray as MODULES } from '../modules/modules'

export const ModulesContext = createContext({
  modules: [],
  finishLesson: () => {},
  nextLesson: {},
  showToast: () => {},
})

export const ModulesProvider = ({ children }) => {
  const [modules, setModules] = useState(MODULES)
  const [nextLesson, setNextLesson] = useState({})

  const finishLesson = (module, lesson) => {
    const thisLesson = module.lessons[lesson.lessonNumber - 1]
    const thisModule = module
    const nextLesson = module.lessons[lesson.lessonNumber]
    const nextModule = modules[module.moduleNumber]

    thisLesson.lessonIsCompleted = true
    thisLesson.lessonIsActive = false

    if (nextLesson) {
      nextLesson.lessonIsAvailable = true
      nextLesson.lessonIsActive = true
      setNextLesson(nextLesson)
    } else {
      thisModule.moduleIsCompleted = true
      thisModule.moduleIsActive = false
      if (nextModule) {
        nextModule.moduleIsAvailable = true
        nextModule.moduleIsActive = true
        nextModule.lessons[0].lessonIsAvailable = true
        nextModule.lessons[0].lessonIsActive = true
        setNextLesson(nextModule.lessons[0])
      } else {
        thisModule.moduleIsActive = true
        thisLesson.lessonIsActive = true
      }
    }
  }

  const showToast = (nextLesson) => {
    return nextLesson
  }

  const value = {
    modules,
    finishLesson,
    nextLesson,
    showToast,
  }

  return (
    <ModulesContext.Provider value={value}>{children}</ModulesContext.Provider>
  )
}
