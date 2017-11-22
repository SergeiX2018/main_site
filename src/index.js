import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Application from './containers/Application'
import configureStore from './store/configureStore'
import "./less/main.less"
import {Router }from 'react-router-dom'
import createHashHistory from 'history/createHashHistory'
import RouterContainer from './containers/RouterContainer'
const store = configureStore()
const history = createHashHistory()

render(
    <Provider store={store}>
        <Router history = {history}>

        <RouterContainer />
        </Router>
    </Provider>,
    document.getElementById('root')
)