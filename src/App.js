import './App.css';
import './App.css';
import { useState } from 'react';
import Counter from './component/Contador.js'

export default function App() {

  const [contador, setContador] = useState(0);

  function mais(){
    setContador(contador + 1)
  }

  function menos(){
    setContador(contador - 1)
  }

  function reset(){
    setContador(0)
  }
  return (
    <div className="Container">
     <h1>counter</h1>

     <p>{contador}</p>
     <button onClick={mais}>mais</button>
     <button onClick={reset}>reset</button>
     <button onClick={menos}>menos</button> 
     <div className="inner-Container2">
     <Counter />
     </div>
    
    </div>
  );
}
