import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'
import './App.scss'

import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  return (
    <>
      <BrowserRouter>

        <Header/>

        <Routes>

          <Route path="/" element={<Home/>} />
          
          <Route path="/form" element={<Form/>} />

        </Routes>
         
      </BrowserRouter>
    </>
    
  )

}

export default App;
