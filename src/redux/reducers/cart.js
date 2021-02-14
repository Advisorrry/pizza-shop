
const ADD_PIZZA_CART = 'ADD_PIZZA_CART'

const initialStates = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialStates, action) => {
    switch (action.type) {
        case ADD_PIZZA_CART:
            return {
                ...state,
                items: {
                    [action.payload.id]: [
                        ...state.items[action.payload.id],
                        action.payload
                    ]
                }
            }
    }
    return state
}

export default cart


