import React, { useEffect, useRef, useState } from 'react'
import LoadingBar from "react-top-loading-bar"

const ProgressBar = () => {
  const ref=useRef(null)

  useEffect(()=>{
    ref.current.staticStart(0)
    setTimeout(() => {
      ref.current.complete()
    }, 1500);
  },[])

  return (
    <div>
      <LoadingBar color='red' ref={ref} />
    </div>
  )
}

export default ProgressBar
