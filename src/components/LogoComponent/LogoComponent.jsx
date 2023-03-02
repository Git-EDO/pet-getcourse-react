import React from 'react'
import logo from '../../img/totheyard-logo.svg'
import classes from './LogoComponent.module.css'

const LogoComponent = () => {
  return (
    <div className={classes.logoImage}>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default LogoComponent
