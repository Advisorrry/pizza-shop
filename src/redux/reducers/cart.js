const SET_SORT_BY = 'SET_SORT_BY'

const initialStates = {
    sortBy: 'popular',
    category: 0
}

export const cart = (state = initialStates, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
    }
    return state
}


