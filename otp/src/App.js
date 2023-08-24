import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { useState } from "react";

function App() {
  const otpRefs = useRef([])
  const [otp,setOtp] = useState(Array(5).fill(''))
  const handleChange = (idx,value) => {
    const arr = [...otp]
    arr[idx] = value;
    setOtp(arr)

    if(value !=='' && idx < otp.length -1)
    {
      otpRefs.current[idx+1].focus()
    }
  }

  const handleSubmit = () => {
    console.log(Number(otp.join(' ')))
  }
 
  console.log(otpRefs.current[1])
 
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {otp?.map((el, idx) => (
          <input
            key={idx}
            type="text"
            value={el}
            className="h-10 w-10 border border-gray-500 rounded-lg ml-2 appearance-none"
            maxLength="1"
            onChange={(e)=>{handleChange(idx,e.target.value)}}
            ref = {(ref) => (otpRefs.current[idx] = ref) }

          />
          
        ))}
        <button className="border  bg-blue-500 rounded-lg ml-2 p-2 text-white" onClick={handleSubmit} >SUBMIT</button>
    </div>
  );
}

export default App;
