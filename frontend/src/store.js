import {createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer} from './reducers/productReducer'
const reducer = combineReducers({
    productList: productListReducer
})

const initialState = {}


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;