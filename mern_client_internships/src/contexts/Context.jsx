import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const context = createContext();

const Context = (props) => {
  const { user, loginWithPopup, logout, isAuthenticated } = useAuth0();
  const [name,setName]=useState(()=>{
    return localStorage.getItem("name") || "User"
  });
  const [dropdown, setdropdown] = useState(false);
  const [files,setFiles]=useState(null)

  useEffect(()=>{
    localStorage.setItem("name",name)
  },[name])
  return (
    <context.Provider
      value={{
        name,
        setName,
        dropdown,
        setdropdown,
        user,
        loginWithPopup,
        logout,
        isAuthenticated,
        files,
        setFiles
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default Context;
