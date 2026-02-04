import styles from '../assets/styles/layouts/Counter.module.scss';
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    const min = 0;
    const max = 100;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formulaire soumis');

        setCount(
            (count + inputValue) < min ? 
                0 
                : 
                (count + inputValue ) > max ? max : (count + inputValue )
        );
    }

    const handleClickAddTen = () => {
        setCount((count + 10) < min ? 
                0 
                : 
                (count + 10 ) > max ? max : (count + 10 )
        )
    }
    return (
        <>
            <section>
                <h3 className="text-center">{count}</h3>
                <form 
                onSubmit={handleSubmit}
                action="#" 
                method='POST'
                className={`border border-3 w-50 m-auto gap-4 d-flex flex-column flex-md-row justify-content-md-around mt-5 p-5 ${styles.divButtons}`}
                >
                    <button type='button' className="form-control" onClick={() => {
                                        if(count > 0){
                                            setCount(count-1)
                                        }
                                    }}>-</button>
                    <button type='button' className="form-control" onClick={() => {
                                    setCount(count+1)
                                    }}>+</button>
                    <button type='reset' className="form-control" onClick={() => setCount(0)}>Reset</button>
                    <button type='button' className="form-control" onClick={handleClickAddTen}>+10</button>
                    <button type='button' className="form-control" onClick={() => count > 5 ? setCount(count - 5) : setCount(0)}>-5</button>
                    <input type="number" className='form-control' placeholder='entrer un nombre' onInput={(e) => setInputValue(e.target.value*1)}/>
            </form>
            </section>
            
        </>
    )
}

export default Counter; 