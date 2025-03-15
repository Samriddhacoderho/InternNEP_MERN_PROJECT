import React, { createContext } from 'react'
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const context=createContext()

const Context = (props) => {
  const {user,loginWithPopup,logout,isAuthenticated}=useAuth0()
    const [dropdown, setdropdown] = useState(false);
  return (
    <context.Provider value={{dropdown,setdropdown,user,loginWithPopup,logout,isAuthenticated}}>
      {props.children}
    </context.Provider>
  )
}

export default Context
