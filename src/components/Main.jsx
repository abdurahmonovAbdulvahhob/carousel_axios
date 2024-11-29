import React from 'react'
import { toast } from "react-toastify";

const Main = () => {
  return (
    <div>
      <h2>Sect</h2>
      <button onClick={()=>toast("wow juda oson")}>Show</button>
    </div>
  )
}

export default Main