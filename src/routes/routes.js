import Dashboard from '../components/Dashboard/Dashboard'
import Modules from '../components/Modules/Modules'
import ModuleByID from '../components/ModuleByID/ModuleByID'
import LessonByID from '../components/LessonByID/LessonByID'
import Tasks from '../components/Tasks/Tasks'

export const routes = [
  { path: '/', element: Dashboard },
  { path: '/dashboard', element: Dashboard },
  { path: '/modules', element: Modules },
  { path: '/modules/:module', element: ModuleByID },
  { path: '/modules/:module/:lesson', element: LessonByID },
  { path: '/tasks', element: Tasks },
  { path: '*', element: Dashboard },
]
