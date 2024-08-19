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
   {/* <h1> i am a {color} to be changed</h1>
    <button onClick={()=> setcolor("blue")}>blue</button>
    <button onClick={()=> setcolor("green")}>green</button>
    <button onClick={()=> setcolor("black")}>black</button>
    <button onClick={()=> setcolor("red")}>red</button> */}



    </>
  )
}

export default App
