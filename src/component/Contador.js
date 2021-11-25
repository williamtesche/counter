
import { useState } from 'react';

 export default function Counter(){

    const [numero, setNumero] = useState(0)

    function sobe() {
        setNumero(numero + 1)
    }

    
    function zerar() {
        setNumero(0)
    }

    
    function desce() {
        setNumero(numero - 1)
    }
    return(
        <>
        <h1>Counter</h1>

        <p>{numero}</p>
        <button onClick={sobe}>sobe</button>
        <button onClick={zerar}>zerar</button>
        <button onClick={desce}>desce</button>
        </>
    )
}; 