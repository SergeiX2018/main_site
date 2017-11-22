
import React, { Component } from 'react'
export default  class LoginContainer extends Component {
    constructor() {
        super()
        this.seePasswordClick = this.seePasswordClick.bind(this)
        this.state = {seePassword:false,};
    }

    seePasswordClick() {
        let seePassword =this.state.seePassword;
        seePassword = !seePassword
        this.setState({seePassword})


    }
    renderLogin () {
        const seePassword = this.state.seePassword;
        const seePasswordClass =  seePassword ? "login-see-password no-see":"login-see-password"
        return(
            <div className = "login-container">
                <div className = "login-title">Войти на сайт</div>
                <div className = "login-form">
                    <div className = "login-description">Чтобы войти на сайт используйте ваш email и пароль, которые были указаны при регистрации (подписке) на сайт</div>
                    <div className = "wrapper">
                    <input type = "text" className = " login-input login-email" placeholder="email"/>
                    <input type = {this.state.seePassword ? "text" : "password"} className = " login-input login-password" placeholder = "Ваш пароль"/>

                    <div onClick = {this.seePasswordClick} className = {seePasswordClass} ></div>
                    </div>
                    <div className = "login-button password" >Забыли пароль</div>
                    <div className = "login-button login">Войти</div>

                </div>



        </div>
        )
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
                {this.renderLogin()}

            </div>
        )
    }
}
