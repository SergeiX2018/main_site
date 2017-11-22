import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import MainContainer from './MainContainer'
import LoginContainer from './LoginContainer'
import RegistrationContainer from './RegistrationContainer'
import NoMatchContainer from './NoMatchContainer'
export default class RouterContainer extends Component {
    constructor() {

        super()

    }
    render() {
        return (
            <div>
               <Switch>
                    <Route path="/" component={LoginContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/registration" component={RegistrationContainer}/>
                    <Route component={LoginContainer}/>
                </Switch>
            </div>
        )
    }
}