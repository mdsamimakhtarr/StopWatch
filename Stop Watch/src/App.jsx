import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [time ,setTime]=useState(0);
  let timerRef=useRef(null);

  function startTimer(){
    timerRef.current=setInterval(()=>{
      setTime(time=>time+1);
    },1000); 
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current.null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }


  return (
    <>
     <h1 className='heading'> Stop Watch :{time} seconds</h1>
     <div className='container'>
     <button className='btn' onClick={startTimer}>Start</button><br></br>
      <button className='btn' onClick={stopTimer}>Stop</button><br></br>
       <button className='btn' onClick={resetTimer}>Reset</button><br></br>
       </div>
    </>
  )
}

export default App
