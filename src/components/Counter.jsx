import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <>
            <h2 className="text-primary">Contenu du compteur</h2>
            <article>
                <h3 className="text-secondary">{count}</h3>
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