import { combineReducers } from 'redux'
import login from "./login"
import modal from './modal'
import registration from './registration'
import news from './news'
import video from './video'
const rootReducer = combineReducers({
    login,
    modal,
    registration,
    news,
    video,
})

export default rootReducer
