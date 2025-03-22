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
import EditPassword from "./components/EditPassword";
import ResetPassword from "./components/ResetPassword";
import PassVerificationForm from "./components/PassVerificationForm";
import YourCV from "./components/cv_files/YourCV";
import CreateCV from "./components/cv_files/CreateCV";

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
            <Route exact path="/edit-password" element={<EditPassword/>}/>
            <Route exact path="/reset-password" element={<ResetPassword/>}/>
            <Route exact path="/reset-password/verification" element={<PassVerificationForm/>}/>
            <Route exact path="/your-cv" element={<YourCV/>}/>
            <Route exact path="/create-cv" element={<CreateCV/>}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Context>
  );
};

export default App;
