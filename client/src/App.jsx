import reactLogo from "./assets/react.svg";

import viteLogo from "/vite.svg";
import "./App.scss";

import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenderInput from "./Components/GenderInput/GenderInput";
import ClothingType from "./Components/ClothingType/ClothingType";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/form" element={<Form />} />
          <Route path="/form/Gender" element={<GenderInput />} />
          <Route path="/form/clothing" element={<ClothingType />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
