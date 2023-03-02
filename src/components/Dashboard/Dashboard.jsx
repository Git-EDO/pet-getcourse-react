import React, { useContext } from 'react'
import { ModulesContext } from '../../context/ModulesContext'
import ActiveLesson from '../Dashboard/DashboardComponents/ActiveLesson/ActiveLesson'
import ActiveModule from '../Dashboard/DashboardComponents/ActiveModule/ActiveModule'
import ProgressCircle from '../Dashboard/DashboardComponents/ProgressCircle/ProgressCircle'
import classes from './Dashboard.module.css'

const Dashboard = () => {
  const { modules } = useContext(ModulesContext)

  const actualActiveModule = modules.find((module) => module.moduleIsActive)
  const actualActiveLesson = actualActiveModule.lessons.find(
    (lesson) => lesson.lessonIsActive
  )

  return (
    <div className={classes.dashboardGrid}>
      <ActiveLesson
        activeModule={actualActiveModule}
        activeLesson={actualActiveLesson}
        count={1}
      />
      <ActiveModule activeModule={actualActiveModule} count={2} />
      <ProgressCircle count={3} modules={modules} />
    </div>
  )
}

export default Dashboard
