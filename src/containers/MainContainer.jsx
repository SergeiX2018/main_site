import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import createHashHistory from 'history/createHashHistory'
class MainContainer extends Component {
    constructor() {
        super()
        this.onLoginClick = this.onLoginClick.bind(this)
    }
    onLoginClick() {
        createHashHistory().push('/login')
       // this.props.history.push('/login')

    }
    renderHeader() {
        return(
            <div className = "header-container">
                <div className = "header-logo">

                </div>
                <div className = "header-title">
                    itProgger
                </div>
                <div className = "header-links">
                    <div className = " rec header-link">Реклама</div>
                    <div className = " site header-link">Создать сайт</div>
                </div>
                <div className = "button registration-button">Регистрация</div>
                <div className="button login-button" onClick={this.onLoginClick}>Войти</div>


            </div>
        )
    }

    render() {

        return (
            <div>

                {this.renderHeader() }
                hello!

            </div>
        )
    }
}




const mapStateToProps = (state, ownProps) => ({
    state
})

const mapDispatchToProps = dispatch =>({
    actions:bindActionCreators(Actions,dispatch)
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    MainContainer
)