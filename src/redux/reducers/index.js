import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
})