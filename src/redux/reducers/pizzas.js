

const SET_PIZZAS = 'SET_PIZZAS'

const initialStates = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialStates, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        default:
            return state
    }

}

export default pizzas


