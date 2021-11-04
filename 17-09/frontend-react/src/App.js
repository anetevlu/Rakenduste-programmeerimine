import './App.css';
import Greeting from './components/Greeting';
import Fun from './components/Fun';
import { useState } from 'react';

function App() {
  const [ magicNumber, setMagicNumber ] = useState(0)
  const [ show, setShow ] = useState(true)
  return (
    <div className="App">
      {show && <h1>{ magicNumber }</h1>}
      <Greeting name="12345"/>
      <Fun 
      magicNumber={magicNumber} 
      setMagicNumber={setMagicNumber} 
      amount={2} 
      show = {show}
      setShow = {setShow}
      />
    </div>
  );
}

export default App;
