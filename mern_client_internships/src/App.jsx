import React from "react";
import Internship from "./components/Internship";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/home_components/Footer";
import Context from "./contexts/Context";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Navbar />
        <main className="mt-18">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/internship" element={<Internship />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Context>
  );
};

export default App;
