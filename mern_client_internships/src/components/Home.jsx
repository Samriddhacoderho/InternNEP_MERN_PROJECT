import React, { useContext } from "react";
import SliderImage from "./home_components/SliderImage";
import { context } from "../contexts/Context";
import Cardfirst from "./home_components/Cardfirst";
import ShowTestimonials from "./home_components/ShowTestimonials";

const Home = () => {
  const useCon=useContext(context);
  const isLoggedin=document.cookie.includes("loginToken")
  return (
    <div>
      <SliderImage />   
      {(!useCon.isAuthenticated && !isLoggedin) && <Cardfirst/>}
      <ShowTestimonials/>
    </div>
    //hi

  );
};

export default Home;
