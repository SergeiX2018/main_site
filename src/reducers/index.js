import { combineReducers } from 'redux'
import login from "./login"
import modal from './modal'
import registration from './registration'
import news from './news'
import video from './video'
import itVideo from './itVideo'
import article from './article'
import categories from './categories'
import locale from './locale'
const rootReducer = combineReducers({
    login,
    modal,
    registration,
    news,
    video,
    article,
    itVideo,
    categories,
    locale,
})

export default rootReducer
