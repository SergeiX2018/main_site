import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import HeaderContainer from './HeaderContainer'


  class LoginContainer extends Component {
    constructor() {
        super()

        this.seePasswordClick = this.seePasswordClick.bind(this)
        this.onLoginClick = this.onLoginClick.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.state = {seePassword:false,};
    }
        componentWillUpdate(nextProps,nextState) {
        if(this.props.state.login.result ===nextProps.state.login.result){
            return;
        }
        this.loginHandler(nextProps.state.login)
        }
      onPasswordChange(e) {
          const password = e.target.value
          this.setState ({password})

      }
      onEmailChange(e) {
          const email = e.target.value
          this.setState ({email})

      }
    seePasswordClick() {
        let seePassword =this.state.seePassword;
        seePassword = !seePassword
        this.setState({seePassword})


    }


          onLoginClick() {
              const email = this.state.email
              const password = this.state.password

              if (!email || !password) {
                  return
              }
this.props.actions.loginRequest({email,password})
          }

    loginHandler(response) {
    if(response.result ===false) {
        alert("Нкверный логин или пароль")
    }
    if(response.result ===true) {
        alert("Пользователь успешно вошел в систему")
        this.props.history.push("/")
    }
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
                <div className = "login-title" >Войти на сайт</div>
                <div className = "login-form">
                    <div className = "login-description">Чтобы войти на сайт используйте ваш email и пароль, которые были указаны при регистрации (подписке) на сайт</div>
                    <div className = "wrapper">

                    <input
                        type = "text"
                        className = " login-input login-email"
                        onChange={this.onEmailChange}
                        placeholder="email"
                        value = {this.state.email}
                    />
                    <input
                        type = {this.state.seePassword ? "text" : "password"}
                        onChange={this.onPasswordChange}
                        className = " login-input login-password"
                        placeholder = "Ваш пароль"
                        value ={ this.state.password}
                    />


                    <div onClick = {this.seePasswordClick} className = {seePasswordClass} ></div>
                    </div>
                    <div className = "login-button password" >Забыли пароль</div>
                    <div className = "login-button login" onClick = {this.onLoginClick}>Войти</div>

                </div>



        </div>
        )
    }



    render() {

        return (
            <div>

                <HeaderContainer />
                {this.renderLogin()}


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
export default LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    LoginContainer
)