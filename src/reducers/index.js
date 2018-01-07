import { combineReducers } from 'redux'
import login from "./login"
import modal from './modal'
import registration from './registration'
import news from './news'
const rootReducer = combineReducers({
    login,
    modal,
    registration,
    news,
})

export default rootReducer
