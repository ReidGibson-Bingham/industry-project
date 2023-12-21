import './App.scss'

import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import Header from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
