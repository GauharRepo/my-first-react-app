import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount]=useState(0);
  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>Increment count :</button> {count}
    </div>
  );
}

export default App;
