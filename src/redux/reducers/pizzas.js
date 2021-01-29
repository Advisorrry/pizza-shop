const SET_PIZZAS = 'SET_PIZZAS'
const SET_lOADED = 'SET_lOADED'

const initialStates = {
    items: [],
    isLoaded: false,
}

const pizzas = (state = initialStates, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }
        case SET_lOADED:
            return {
                ...state,            
                isLoaded: action.payload,
            }
        default:
            return state
    }
}

export default pizzas
