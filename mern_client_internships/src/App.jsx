import React from "react";
import Internship from "./components/Internship";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/home_components/Footer";
import Context from "./contexts/Context";
import Register from "./components/Register";
import Login from "./components/Login";
import EditProfile from "./components/EditProfile";
import EditPassword from "./components/EditPassword";
import ResetPassword from "./components/ResetPassword";
import PassVerificationForm from "./components/PassVerificationForm";
import YourCV from "./components/cv_files/YourCV";
import CreateCV from "./components/cv_files/CreateCV";
import Internships_Category from "./components/internships_area/Internships_Category";


const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Navbar />
        <main className="mt-18">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/internship" element={<Internship/>} />
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/edit-profile" element={<EditProfile/>}/>
            <Route exact path="/edit-password" element={<EditPassword/>}/>
            <Route exact path="/reset-password" element={<ResetPassword/>}/>
            <Route exact path="/reset-password/verification" element={<PassVerificationForm/>}/>
            <Route exact path="/your-cv" element={<YourCV/>}/>
            <Route exact path="/create-cv" element={<CreateCV/>}/>
            <Route exact path="/internships/health" element={<Internships_Category cat={"medical"}/>}/>
            <Route exact path="/internships/webdev" element={<Internships_Category cat={"web-developer"}/>}/>
            <Route exact path="/internships/mobdev" element={<Internships_Category cat={"mobile-developer"}/>}/>
            <Route exact path="/internships/sofdev" element={<Internships_Category cat={"software-developer"}/>}/>
            <Route exact path="/internships/content-writing" element={<Internships_Category cat={"content-writing"}/>}/>
            <Route exact path="/internships/content-creator" element={<Internships_Category cat={"content-creator"}/>}/>
            <Route exact path="/internships/teachers-assistant" element={<Internships_Category cat={"teacher's assistant"}/>}/>
            <Route exact path="/internships/graduates-assistant" element={<Internships_Category cat={"graduate's assistant"}/>}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </Context>
  );
};

export default App;

