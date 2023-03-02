import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Breadcrumbs.module.css'

const Breadcrumbs = ({ module, lesson }) => {
  return (
    <div className={classes.breadcrumbs}>
      <Link to={`/modules/${module}`} className={classes.breadcrumbsLink}>
        Модуль {module}
      </Link>
      <div>{lesson}</div>
    </div>
  )
}

export default Breadcrumbs
