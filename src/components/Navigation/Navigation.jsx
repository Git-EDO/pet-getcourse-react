import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={classes.navRow}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? [classes.navItem, classes.active].join(' ')
            : classes.navItem
        }
        to="/dashboard"
      >
        Дашборд
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? [classes.navItem, classes.active].join(' ')
            : classes.navItem
        }
        to="/modules"
      >
        Модули
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? [classes.navItem, classes.active].join(' ')
            : classes.navItem
        }
        to="/tasks"
      >
        Задачи
      </NavLink>
    </div>
  )
}

export default Navigation
