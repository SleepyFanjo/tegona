import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from '../modules'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [ thunk ]

const reducer = combineReducers(reducers)
const enhancer = composeWithDevTools(applyMiddleware(...middleware))

export default createStore(reducer, enhancer)
