import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import MainContainer from './MainContainer'
import LoginContainer from './LoginContainer'
import RegistrationContainer from './RegistrationContainer'
import NoMatchContainer from './NoMatchContainer'
import ModalContainer from './ModalContainer'
import NewsContainer from './NewsContainer'
import VideosContainer from './VideosContainer'
export default class RouterContainer extends Component {

    constructor() {

        super()

    }
    render() {
        return (
            <div>
               <Switch>

                    <Route exact path="/" component={MainContainer}/>
                    <Route  path="/login" component={LoginContainer}/>
                    <Route  path="/itvideos" component={VideosContainer}/>
                    <Route  path="/news" component={NewsContainer}/>
                    <Route path="/registration" component={RegistrationContainer}/>
                    <Route component={MainContainer}/>
                </Switch>
                <ModalContainer/>
            </div>
        )
    }
}