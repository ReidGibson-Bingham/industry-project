import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import MainImageBlock from './Components/MainImageBlock/MainImageBlock'
import {BrowserRouter, Router, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Router>

          <Route path="/" element={<Home/>} />
          
          <Route path="/form" element={<Home/>} />

        </Router>
      </BrowserRouter>
    </>
    
  )

}

export default App
