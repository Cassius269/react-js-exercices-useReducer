import Footer from "./Footer";
import Header from "./Header";
import CounterFeature from './CounterFeature';
import CounterProvider from './CounterProvider';
import Subscription from './Subscription';
import { useReducer } from "react";
import subscriptionReducer from "../reducers/subscriptionReducer";

function Body(){
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

    const goToPreviousStep = (step, formData) => {
        dispatch({
            type: 'PREVIOUS_STEP',
            formData : formData,
            step : step
        })
    }

    const goToNextStep = (step, formData) => {
        dispatch({
            type: 'PREVIOUS_STEP',
            formData : formData,
            step : step
        })
    }

    const submitForm = (formData) => {
        dispatch(
            {
                type: 'SUBMIT_FORM',
                formData, // la clé formData a pour valeur le formData passé en argument
            }
        )
    }

    return (
        <>
            <Header />
                <main>
                    <CounterProvider>
                        <CounterFeature />
                    </CounterProvider>
                    
                    <Subscription 
                        state = {state} 
                        goToPreviousStep = {goToPreviousStep}
                        goToNextStep = {goToNextStep}
                        submitForm = {submitForm}
                        />
                </main>
            <Footer />
        </>
    )
}

export default Body;