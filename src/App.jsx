import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";
import './assets/styles/App.scss'; 
import { useReducer } from "react";
import counterReducer from "./reducers/CounterReducer";
import { CounterDispatcherContext, CounterStateContext } from "./context/CounterContext";

function App() {
  // Gérer le reducer depuis le composant racine <App>
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0, 
  });


  console.log("state", state.count);

  return (
    <>
    <CounterStateContext value={state.count}>
      <CounterDispatcherContext value={dispatch}>
        <Header />
        <main>
          <Title />
          <Counter/>
        </main>
        <Footer />
        </CounterDispatcherContext>
      </CounterStateContext>
    </>
  )
}

export default App
