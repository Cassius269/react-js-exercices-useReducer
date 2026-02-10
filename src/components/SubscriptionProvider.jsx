import { useReducer } from "react";
import { SubscriptionDispatcherContext, SubscriptionStateContext } from "../context/SubscriptionContext";
import subscriptionReducer from "../reducers/subscriptionReducer";

function SubscriptionProvider({children}){
    // Gérer le reducer depuis le provider de la fonctionnalité pour inscrciption : on déclare une structure vide avec les champs essentiels
    const [state, dispatch] = useReducer(subscriptionReducer, {
        step: 1,
        formData: {
            username: '', 
            email: '', 
            password: '', 
            address: '', 
            city: '',
            preferences: []
        },
        errors: {}, 
        isSubmitting: false
    });



    return (
        <SubscriptionStateContext value={state}>
            <SubscriptionDispatcherContext value={dispatch}>
                {children}
            </SubscriptionDispatcherContext>
        </SubscriptionStateContext>
    )
}

export default SubscriptionProvider;