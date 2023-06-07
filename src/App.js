
import { useState } from 'react';
import "./index.css"

function App() {

  const [count , setCount] = useState(0)
  if(count == -1){
    setCount(0)
  }
  if(count > 99){
    setCount(0)
  }
  return (
    <>
      <center>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button className='btn1' onClick={() => setCount(0)}>reset</button>
      </center>
    </>
  );
}

export default App;
