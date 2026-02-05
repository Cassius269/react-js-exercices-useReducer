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

  return (
    <>
      <main>
        <Header />
        <Title />
        <Counter 
          count={state.count} 
          dispatch={dispatch}
        />
        <Footer />
      </main>
    </>
  )
}

export default App
