import React from "react";
import Internship from "./components/Internship";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/home_components/Footer";
import Context from "./contexts/Context";
import MedicalInternship from "./components/MedicalInternship";
import ITInternship from "./components/ITInternship";
import ContentInternship from "./components/ContentInternship";
import Register from "./components/Register";
import Login from "./components/Login";
import EditProfile from "./components/EditProfile";
import TestComponent from "./components/TestComponent";
import EditPassword from "./components/EditPassword";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Navbar />
        <main className="mt-18">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/internship" element={<Internship/>} />
            <Route exact path="/medical-internships" element={<MedicalInternship/>}/>
            <Route exact path="/IT-internships" element={<ITInternship/>}/>
            <Route exact path="/content-internships" element={<ContentInternship/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/edit-profile" element={<EditProfile/>}/>
            <Route exact path="/test" element={<TestComponent/>}/>
            <Route exact path="/edit-password" element={<EditPassword/>}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Context>
  );
};

export default App;
