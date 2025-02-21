import React, { createContext } from 'react'
import { useState } from 'react';

export const context=createContext()

const Context = (props) => {
    const [dropdown, setdropdown] = useState(false);
  return (
    <context.Provider value={{dropdown,setdropdown}}>
      {props.children}
    </context.Provider>
  )
}

export default Context
