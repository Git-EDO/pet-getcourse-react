import React, { useContext } from 'react'
import { ModulesContext } from '../../context/ModulesContext'
import Module from '../Module/Module'
import classes from './Modules.module.css'

const Modules = () => {
  const { modules } = useContext(ModulesContext)

  return (
    <div className={classes.modulesGrid}>
      {modules.map((module, idx) => (
        <Module
          moduleIsAvailable={module.moduleIsAvailable}
          title={module.moduleTitle}
          number={module.moduleNumber}
          key={module.moduleNumber}
          completed={module.moduleIsCompleted}
          count={idx}
        />
      ))}
    </div>
  )
}

export default Modules
