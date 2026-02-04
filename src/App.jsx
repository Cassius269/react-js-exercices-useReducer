import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import './assets/styles/App.scss'; 
import { useReducer } from "react";
import counterReducer from "./reducers/CounterReducer";

function App() {
  // Gérer le reducer depuis le composant racine <App>
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0, 
  });

  console.log("state", state.count);

    // Les méthodes de comptage et reset
    const incrementCount = ()=> {
      dispatch({
        type: 'INCREMENT_COUNT'
      })
    }

    const decrementCount = ()=> {
      dispatch({
        type: 'DECREMENT_COUNT'
      })
    } 
    
    const resetCount = ()=> {
      dispatch({
        type: 'RESET_COUNT'
      })
    }

    const setCount = (number)=> {
      dispatch({
        type: 'SET_COUNT',
        payload: number
      })
    }

  return (
    <>
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
    </>
  )
}

export default App
