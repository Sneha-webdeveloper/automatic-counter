import React, {useEffect, useState } from 'react';
import './Counter.css'
function Counter() {
  //state creation
  const[sec,setSec]=useState(0)
  const[min,setMin]=useState(0)
var timer;
 useEffect(()=>{
  timer=setInterval(()=>{
setSec(sec+1);

if(sec===59){
  setMin(min+1);
  setSec(0);
}
},500);

return()=>clearInterval(timer);
 })

function stop(){
  clearInterval(timer);
};
function reset(){
  setSec(0);
  setMin(0);
}

  return (
<div className='container' style={{height:"75vh"}}>
      <div className='container w-75 d-flex flex-column justify-content-center align-items-center bg-white rounded my-5 p-3 text-center'>
        <h1 className='mb-5' id='head'>Automatic Counter App</h1>
        <p className='fw-bolder text-info' style={{fontSize:"40px"}}>{min<10?"0"+min:min+1} : {sec<10?"0"+sec:sec+1}</p>
<div>
            <button onClick={reset} className='btn btn-success px-5 mt-3 fw-bold mx-5 text-white'>reset</button>
            <button onClick={stop} className='btn btn-danger px-5 mt-3 fw-bold text-white'>stop</button>
  
</div>    
    </div>
  
</div>  );
}

export default Counter;
