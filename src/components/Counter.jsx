import styles from '../assets/styles/layouts/Counter.module.scss';
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return (
        <>
            <article className="border border-3 p-4 w-50 m-auto mt-5">
                <h3 className="text-center">{count}</h3>
                <div className={`d-flex justify-content-around mt-5 ${styles.divButtons}`}>
                    <button className="btn" onClick={() => {
                                        if(count > 0){
                                            setCount(count-1)
                                        }
                                    }}>-</button>
                    <button className="btn" onClick={() => {
                                    setCount(count+1)
                                    }}>+</button>
                    <button className="btn" onClick={() => setCount(0)}>Reset</button>
                    <button className="btn" onClick={() => setCount(count + 10)}>+10</button>
                    <button className="btn" onClick={() => count > 5 ? setCount(count - 5) : setCount(0)}>-5</button>
                </div>
            </article>
        </>
    )
}

export default Counter; 