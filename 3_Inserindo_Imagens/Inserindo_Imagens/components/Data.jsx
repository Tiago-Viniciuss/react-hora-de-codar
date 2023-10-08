import { useState } from "react"

const Data = () => {

    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);
    
    const [count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count + 1);
    };

  return (
    <div>
        <div>
            <p>O valor é: {someData}</p>
            <button onClick={()=>(someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>O valor é: {anotherNumber}</p>
            <button onClick={()=> setAnotherNumber(20)}>Mudar state</button>
        </div>
        <div>
            <p>Contador: {count}</p>
            <button onClick={increment}>Incrementar</button>
        </div>
    </div>
  )
}

export default Data