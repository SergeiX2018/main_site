import { combineReducers } from 'redux'
import login from "./login"
import modal from './modal'
import registration from './registration'
const rootReducer = combineReducers({
    login,
    modal,
    registration
})

export default rootReducer
