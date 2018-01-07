import 'babel-polyfill'
import React from 'react'
import rootSaga from './sagas'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import "./less/main.less"
import {Router }from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import RouterContainer from './containers/RouterContainer'
const store = configureStore()
store.runSaga(rootSaga)
const history = createHashHistory()


render(
    <Provider store={store}>
        <Router history = {history}>

        <RouterContainer />
        </Router>
    </Provider>,
    document.getElementById('root')
)
