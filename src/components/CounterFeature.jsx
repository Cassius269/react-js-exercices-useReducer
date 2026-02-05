import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";

function CounterFeature(){
    
    return (
    <main>
            <Header />
            <Title />
            <Counter 
                count={state.count} 
                incrementCount={incrementCount} 
                decrementCount={decrementCount}  
                resetCount={resetCount}
                setCount={setCount}
            />
            <Footer />
        </main>       
    )
}

export default CounterFeature;