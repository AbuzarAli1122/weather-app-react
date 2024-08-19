import React,{useState,useEffect} from 'react';
// import Calculator from './component/calculator';
import Weather from './component/weather';


function App() {

  // const [count,setcount]= useState(0)
  // const [color,setcolor]=useState("red")
  

  // useEffect(()=>{
  //   alert("welcome to my page")
  // }, [])
  // useEffect(()=>{
  //   alert("color is changed")
  // }, [color])

  return (
    <>
    {/* <div className="App">
      <Calculator />
    </div> */}
    <div className="App">
      <Weather />
      
    </div>


    </>
  )
}

export default App
