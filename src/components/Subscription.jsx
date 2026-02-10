import { useContext, useState } from 'react';
import styles from '../assets/styles/layouts/Subscription.module.scss';
import Toast from './Toast';
import { SubscriptionDispatcherContext, SubscriptionStateContext } from '../context/SubscriptionContext';

function Subscription(){
    const state = useContext(SubscriptionStateContext);
    const dispatch = useContext(SubscriptionDispatcherContext);

    console.log('state :', state);
    console.log(`Etape point de vue reducer: ${state.step}`);

    
    const [isFootChecked, setFootChecked] = useState(false);
    const [isBasketChecked, setBasketChecked] = useState(false);
    const [isSubmitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState(
        {
            username: '', 
            email: '', 
            password: '',
            passwordConfirm: '',
            address: '', 
            city: 'Paris' ,
            preferences: []       
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formDataOriginal = new FormData(e.target);
        
        // for(let paire of formDataOriginal){
        //     console.log(`${paire[0]} : ${paire[1]}`);
            
        // }

        // Contraintes de validation
        const isValid =  formData.username.length >= 4 &&
            formData.email.includes('@') && formData.email.includes('.') &&
            formData.password.length >= 8 &&
            formData.passwordConfirm.length >= 8 &&
            formData.password === formData.passwordConfirm &&
            formData.address.length >= 10 &&
            formData.city !== '';

        if(isValid){
                console.log(`✅ Formulaire d'inscription soumis avec success`); 
                const {passwordConfirm, ...submittedData} = formData; // Déconstruire l'objet l'état pour exclure le mot de passe de confirmation à l'envoi des données finales

                dispatch(
                {
                    type: 'SUBMIT_FORM',
                    formData : submittedData, // la clé formData a pour valeur le formData passé en argument
                }
            )
                   setSubmitting(true);
        }else {
            console.log('❌ Veuillez completer tous les champs');   
            setSubmitting(false);         
        }
    };


    const handleInputUsername = (e) => {
        console.log(`Username: ${e.target.value}`);
        setFormData({...formData, username: e.target.value});
        setSubmitting(false);
    }

    const handleInputEmail = (e) => {
        console.log(`Email: ${e.target.value}`);
        setFormData({...formData, email: e.target.value});
        setSubmitting(false);
    }

    const handleInputPassword = (e) => {
        console.log(`Mot de passe: ${e.target.value}`);    
        setFormData({...formData, password: e.target.value})
    }

    const handleInputConfirmPassword = (e) => {
        console.log(`Mot de passe confirmé: ${e.target.value}`);  
        setFormData({...formData, passwordConfirm: e.target.value});
        setSubmitting(false);
    }

    const handleInputAddress = (e) => {
        console.log(`Changement adresse: ${e.target.value}`);  
        setFormData({...formData, address: e.target.value});
        setSubmitting(false);
    }

    const handleChangeCity = (e) => {
        console.log(`Changement de ville: ${e.target.value}`);  
        setFormData({...formData, city: e.target.value});  
        setSubmitting(false);
    }

    const onChangeFootChecked = () => {
        setFootChecked(!isFootChecked);
        setFormData(
            {
                ...formData, 
                preferences: formData.preferences.includes('foot') ? [...formData.preferences.filter(p => p !== 'foot')] : [...formData.preferences, 'foot']
            }
        );
        setSubmitting(false);
    };

    const onChangeBasketChecked = () => {
        setBasketChecked(!isBasketChecked);
        setFormData(
            {
                ...formData, 
                preferences: formData.preferences.includes('basket') ? [...formData.preferences.filter(p => p !== 'basket')] : [...formData.preferences, 'basket']
            });
            setSubmitting(false);
        }
    
    const handleClickPreviousStep = (e) => {
        e.preventDefault();
        const previousStep = state.step  <= 1 ? state.step : state.step-1;
        
        dispatch({
            type: 'PREVIOUS_STEP',
            formData : formData,
            step : previousStep
        });

        setSubmitting(false);
    };

    const handleClickNextStep = (e) => {
        e.preventDefault();
        const nextStep = state.step >= 3 ? state.step : state.step+1;

        dispatch({
            type: 'NEXT_STEP',
            formData : formData,
            step : nextStep
        });

        setSubmitting(false);
    };

    return (
        <section className="mt-5 mb-5">
            {isSubmitting  && <Toast message='Formulaire envoyé avec succès' /> } 
            <h3 className="text-center">Exercice 2 : formulaire d'inscription multi-étapes</h3>
            <form onSubmit={handleSubmit} action="#" method="POST" className={`mt-5 w-50 m-auto p-5 rounded-3 ${styles.form} position-relative`}>
                <p className='position-absolute start-50 top-0 m-4 text-white bg-primary p-2 fs-5 rounded-5'>{state.step}/3</p>
                {state.step === 1 && 
                    <>
                        <div className="mb-4 pt-5">
                            <label htmlFor="username" className="form-label">Pseudo</label>
                            <input onInput={handleInputUsername} 
                                type="text" 
                                name="username" 
                                id="username" 
                                className="form-control"
                                placeholder='entrer votre pseudo'
                                minLength={4} 
                                required
                                value={formData?.username}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                onInput={handleInputEmail} 
                                type="email" 
                                name="email" 
                                id="email"  
                                className="form-control" 
                                required
                                placeholder='jean-dupont@exemple.com'
                                value={formData?.email}
                                />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input 
                                onInput={handleInputPassword} 
                                type="password" 
                                name="password" 
                                id="password" 
                                minLength={8} 
                                required 
                                className="form-control"
                                placeholder='************'
                                value={formData?.password}
                                />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm_password" className="form-label">Mot de passe de confirmation</label>
                            <input 
                                onInput={handleInputConfirmPassword} 
                                type="password" 
                                name="confirm_password" 
                                id="confirm_password" 
                                minLength={8} 
                                required 
                                className="form-control"
                                placeholder='************'
                            />
                        </div>
                        {formData.password !== formData.passwordConfirm && <p className='text-danger'>Mots de passe non similaires</p>}
                    </>
                }
                {
                    state.step === 2 && 
                    <>
                        <div className="mb-4 pt-5">
                            <label htmlFor="adresse" className="form-label">Adresse</label>
                            <input 
                                type="text" 
                                onInput={handleInputAddress}
                                name="adresse" 
                                id="adresse" 
                                className="form-control" 
                                placeholder="2 rue de l'endroit fantastique"
                                minLength={10} 
                                required
                                value={formData?.address}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="form-label">Ville</label>
                            {/* <input type="text" name="city" id="city" className="form-control" minLength={10} required/> */}
                            <select name="city" id="city" onChange={handleChangeCity}>
                                <option value="Paris">Paris</option>
                                <option value="Lyon">Lyon</option>
                                <option value="Marseille">Marseille</option>
                            </select>
                        </div>               
                    </>
                }
                {
                    state.step === 3 &&
                    <fieldset className="form-check mt-3  pt-5">
                    <legend>Choisissez vos passions &nbsp;:</legend>
                    <div>
                        <label htmlFor="foot" className="form-check-label">Foot</label>
                        <input onChange={onChangeFootChecked} 
                            type="checkbox" 
                            name="foot" 
                            id="foot" 
                            className="form-check-input" 
                            checked = {isFootChecked}
                        />
                    </div>
                    <div>
                        <label htmlFor="basket" className="form-check-label">Basket</label>
                        <input 
                            onChange={onChangeBasketChecked}
                             type="checkbox" 
                             name="basket" 
                             id="basket" 
                             className="form-check-input" 
                             checked = {isBasketChecked}
                        />
                    </div>
                </fieldset>
                }
                
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-danger">Soumettre</button>
                </div>
                <div className="d-flex justify-content-around divButtons">
                    <button onClick={handleClickPreviousStep} 
                    className={`btn btn-outline-secondary ${state?.step === 1 ? 'disabled' : ''}`} >Précédent</button>
                    <button 
                        onClick={handleClickNextStep} 
                        className={`btn btn-outline-secondary ${state?.step === 3 ? 'disabled' : ''}`}>Suivant</button>
                </div>
            </form>
        </section>
    )
}

export default Subscription;