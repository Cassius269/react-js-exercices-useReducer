import styles from '../assets/styles/layouts/Counter.module.scss';

function Counter(
    {
        count, 
        incrementCount, 
        decrementCount, 
        resetCount,
        setCount
    }
    ){

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formulaire soumis');
        // console.log("valeur input", new FormData(e.target).get('number'))
        setCount(new FormData(e.target).get('number'));
    }

    const handleClickAddTen = () => {
        setCount(10);
    }

    const handleClickDecreaseFive = () => {
        setCount(-5);
    }

    const handleInput = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
            <section>
                <h3 className="text-center">{count}</h3>
                <form 
                onSubmit={handleSubmit}
                action="#" 
                method='POST'
                className={`border border-3 w-50 m-auto gap-4 d-flex flex-column flex-lg-row justify-content-md-around mt-5 p-5 ${styles.divButtons}`}
                >
                    <button type='button' className="form-control" onClick={() => {
                                            incrementCount()
                                    }}>+</button>
                    <button type='button' className="form-control" onClick={() => decrementCount()}>-</button>
                    <button type='reset' className="form-control" onClick={() => resetCount()}>Reset</button>
                    <button type='button' className="form-control" onClick={handleClickAddTen}>+10</button>
                    <button type='button' className="form-control" onClick={handleClickDecreaseFive}>-5</button>
                    <input type="number" name="number" className='form-control' onInput={handleInput} placeholder='entrer un nombre' />
            </form>
            </section>
            
        </>
    )
}

export default Counter; 