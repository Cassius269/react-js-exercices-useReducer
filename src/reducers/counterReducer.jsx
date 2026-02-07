function counterReducer(state, action){
    const minCount = 0;
    const maxCount = 100;

    console.log("Etat depuis le reducer du compteur", state)

    switch(action.type){
        case 'INCREMENT_COUNT':
            return {
                count : state.count +1 > 100 ? 100 : state.count +1
            }
        case 'DECREMENT_COUNT':
            return {
                count : state.count > minCount ? state.count - 1 : 0 // mettre 0 si le compteur atteint zéro
            }
        case 'RESET_COUNT':
            return {
                count : 0
            }
        case 'SET_COUNT':
            return {
                count : (Math.max(0,Math.min(maxCount, state.count + action.payload*1))) // la valeur doit être compris entre 0 et 100
            }
        default :
            throw new Error('action inconnue');     
        }
}

export default counterReducer;