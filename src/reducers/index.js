import { combineReducers } from 'redux'
import login from "./login"
import modal from './modal'
import registration from './registration'
import news from './news'
import video from './video'
import itVideo from './itVideo'
import article from './article'
const rootReducer = combineReducers({
    login,
    modal,
    registration,
    news,
    video,
    article,
    itVideo,
})

export default rootReducer
