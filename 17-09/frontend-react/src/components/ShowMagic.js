import { useState } from 'react';
import Greeting from './Greeting';
import Fun from './Fun';
import People from './People';
import './App.css';


function ShowMagic() {
  const [ magicNumber, setMagicNumber ] = useState(0)
  const [ show, setShow ] = useState(true)
  const [ personsName, setPersonsName] = useState("Mati")
  const [ showName, setShowName ] = useState(true)

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
      
      <People  personsName="Mati" 
      setPersonsName={setPersonsName}     
      showName={showName}
      setShowName={setShowName}
      />
      {showName && <p>{personsName}</p>}    
      
    </div>
  );
}

export default ShowMagic;
