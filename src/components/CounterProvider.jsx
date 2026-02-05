import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Title from "./Title";
import { useReducer } from "react";
import counterReducer from "../reducers/CounterReducer";
import { CounterDispatcherContext, CounterStateContext } from "../context/CounterContext";

function CounterProvider({children}){
    // Gérer le reducer depuis le composant racine <App>
    const [state, dispatch] = useReducer(counterReducer, {
    count: 0, 
  });


  console.log("state", state.count);
  
    return (
        <CounterStateContext value={state.count}>
                <CounterDispatcherContext value={dispatch}>
                    {children}{/* children correspond  au composant enfant CounterFeature */}
                </CounterDispatcherContext>
        </CounterStateContext>
    )
}

export default CounterProvider;