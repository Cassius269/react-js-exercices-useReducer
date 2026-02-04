import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Contenu du compteur</h2>
            <article className="bg-secondary">
                <h3>{count}</h3>
                <button onClick={() => {
                    if(count > 0){
                        setCount(count-1)
                    }
                }}>-</button>
                <button onClick={() => {
                    setCount(count+1)
                }}>+</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count + 10)}>+10</button>
                <button onClick={() => count > 5 ? setCount(count - 5) : setCount(0)}>-5</button>
            </article>
        </>
    )
}

export default Counter; 