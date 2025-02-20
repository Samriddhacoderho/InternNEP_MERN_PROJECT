import React from "react";
import Internship from "./components/Internship";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <main className="mt-20">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/internship' element={<Internship/>}/>
        </Routes>
        </main>
      </BrowserRouter>
  );
};

export default App;
