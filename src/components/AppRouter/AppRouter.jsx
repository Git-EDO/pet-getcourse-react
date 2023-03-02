import React from 'react'
import { routes } from '../../routes/routes'
import { Route, Routes } from 'react-router'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
    </Routes>
  )
}

export default AppRouter
