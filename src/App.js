import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter/AppRouter'
import LogoComponent from './components/LogoComponent/LogoComponent'
import Navigation from './components/Navigation/Navigation'
import { ModulesProvider } from './context/ModulesContext'
import ToastMessages from './components/ToastMessages/ToastMessages'

function App() {
  return (
    <ModulesProvider>
      <div className="App">
        <LogoComponent />
        <BrowserRouter>
          <Navigation />
          <AppRouter />
        </BrowserRouter>
        <ToastMessages />
      </div>
    </ModulesProvider>
  )
}

export default App
