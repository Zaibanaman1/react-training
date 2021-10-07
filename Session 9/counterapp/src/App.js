import './App.css';
import Counter from './components/Counter';
import Btn from './components/Btn'
import React from 'react';

function App() {

  const [counter,setCounter] = React.useState( localStorage.getItem("counter")||0)
  React.useEffect(()=>{
    localStorage.setItem("counter",counter)
  },[counter])
  const operate=(e)=>{
    console.log("fd",e.target.value)
    e.target.value==="-"?setCounter(parseInt(counter)-1):setCounter(parseInt(counter)+1)
  }
  return (
    <div className="App">
        <h1> Counter</h1>
      <Counter handleclick={operate} count={counter} Btn={Btn} value1={'-'} value2={'+'}  />
    </div>
  );
}

export default App;
