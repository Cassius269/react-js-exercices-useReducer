function subscriptionReducer(state, action){
    switch(action.type){
        case 'SUBMIT_FORM':
            console.log('formulaire envoyé');
            console.log(action.formData)
            return {
                ...state, 
                formData: action.formData,
                isSubmitting: true
            };
        case 'PREVIOUS_STEP':
            console.log('Revenir en arrière');
            console.log(`Etape : ${action.step}`);
            return {
                ...state, // récupérer les autres champs
                step: action.step,
                formData: action.formData
            }
        case 'NEXT_STEP':
            console.log('Etape suivante');
            console.log(`Etape : ${action.step}`);
            console.log('Données après clic suivant :', action.formData)
            return {
                ...state, // récupérer les autres champs
                step: action.step, 
                formData: action.formData
            }
        case 'SET_ERRORS':
            console.log('erreurs à envoyer');
            return  {
                ...state, 
                errors: action.errors //récupérer les erreurs
            }
        default:
            throw new Error(`L'action choisie n'existe pas`);
    }
}

export default subscriptionReducer;