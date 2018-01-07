import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import HeaderContainer from './HeaderContainer'

  class RegistrationContainer extends Component {
    constructor() {
        super()
        this.seePasswordClick = this.seePasswordClick.bind(this)
        this.onRegistrationClick = this.onRegistrationClick.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.state = {seePassword:false,
            email:"",
            password:"",
        };

    }

      componentWillUpdate(nextProps,nextState) {
          if(this.props.state.registration.result ===nextProps.state.registration.result){
              return;
          }
          this.registrationHandler(nextProps.state.registration)
      }
    onPasswordChange(e) {
        const password = e.target.value
        this.setState ({password})

    }
    onEmailChange(e) {
        const email = e.target.value
        this.setState ({email})

    }
    onRegistrationClick() {
        const email = this.state.email
        const password = this.state.password

        if(!email || !password) {
            return
        }
        this.props.actions.registrationRequest({email,password})
            // fetch("http://localhost:3000/registration", {
            //     method:"POST",
            //     body: JSON.stringify({
            //         email,
            //         password,
            //     }),
            //     headers:{"Content-Type" : "application/json"}
            // })
            //     .then(response=>response.json())
            //     .then(response=>{
            //         this.registrationHandler(response)
            //     })


        }
      registrationHandler(response) {
        if(response.result ===false) {
            alert("Регистрация невозможна.Пользователь уже есть в системе")
        }
        if(response.result ===true) {
            alert("Пользователь успешно зарегитрировался в системе.")
            this.props.history.push("/login")
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
                <div className = "login-title" >Зарегистрироваться</div>
                <div className = "login-form">
                    <div className = "login-description">Зарегистрируйтесь на сайте, используя Email и пароль</div>
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

                    <div className = "login-button  registration" onClick = {this.onRegistrationClick}>Зарегистрироваться</div>

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
export default RegistrationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    RegistrationContainer
)