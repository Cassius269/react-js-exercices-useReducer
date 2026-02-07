import { useContext } from 'react';
import styles from '../assets/styles/layouts/Counter.module.scss';
import { CounterDispatcherContext, CounterStateContext } from '../context/CounterContext';

function Counter(){
    // Récupérer le contexte de l'état du compteur
    const count = useContext(CounterStateContext);
    const dispatch = useContext(CounterDispatcherContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formulaire soumis');
        // console.log("valeur input", new FormData(e.target).get('number'))
        dispatch({
            type:'SET_COUNT',
            payload: new FormData(e.target).get('number')
        })
    }

    const handleClickPlusOne = () => {
        dispatch({
                    type: 'INCREMENT_COUNT',
            })
    }

    const handleClickSubstractOne = () => {
        dispatch({
                    type: 'DECREMENT_COUNT',
            })
    }

    const handleClickAddTen = () => {
        dispatch({
            type: 'SET_COUNT',
            payload: 10
      })
    }

    const handleClickDecreaseFive = () => {
        dispatch({
            type: 'SET_COUNT',
            payload: -5
      })    
    }

    const handleInput = (e) => {
        console.log(`Nombre saisi: ${e.target.value}`);
    }

    const resetCount = () => {
        dispatch( {
            type: 'RESET_COUNT'
        })
    }
    return (
        <>
            <section>
                <h3 className="text-center">Exercice 1: un compteur intéractif</h3>
                <h2 className="text-center">{count}</h2>
                <form 
                onSubmit={handleSubmit}
                action="#" 
                method='POST'
                className={`border border-3 w-50 m-auto gap-4 d-flex flex-column flex-lg-row justify-content-md-around mt-5 p-5 ${styles.divButtons}`}
                >
                    <button type='button' className="form-control" onClick={handleClickPlusOne}>+</button>
                    <button type='button' className="form-control" onClick={handleClickSubstractOne}>-</button>
                    <button type='reset' className="form-control" onClick={resetCount}>Reset</button>
                    <button type='button' className="form-control" onClick={handleClickAddTen}>+10</button>
                    <button type='button' className="form-control" onClick={handleClickDecreaseFive}>-5</button>
                    <input type="number" name="number" className='form-control' onInput={handleInput} placeholder='entrer un nombre' />
                </form>
            </section>
            
        </>
    )
}

export default Counter; 