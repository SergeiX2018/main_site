import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import createHashHistory from 'history/createHashHistory'
import  classNames  from 'classnames'

class HeaderContainer extends Component {
    constructor() {
        super()
        this.onLoginClick = this.onLoginClick.bind(this)
        this.onLogoClick = this.onLogoClick.bind(this)
        this.onRegistrationClick = this.onRegistrationClick.bind(this)
        this.onSearchClick = this.onSearchClick.bind(this)
        this.onNewsClick = this.onNewsClick.bind(this)
        this.onVideossClick = this.onVideosClick.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.state = {isTop:true}

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);

}
    componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}
    handleScroll() {
const y = window.scrollY;

        if(y>0) {
    this.setState({isTop:false})
        }
        else{
            this.setState({isTop:true})
        }

}

    onSearchClick() {
        this.props.actions.modalShow()

    }
    onLoginClick() {
        createHashHistory().push('/login')


    }
    onRegistrationClick(){
        createHashHistory().push('/registration')

    }
    onVideosClick() {
        createHashHistory().push('/itvideos')
    }
    onNewsClick() {
        createHashHistory().push('/news')
    }
    onLogoClick () {
        createHashHistory().push('/')

    }


    renderHeader() {
        return(
            <div className = "header-container">
                <div className = "header-logo" onClick={this.onLogoClick}>

                </div>
                <div className = "header-title">
                    itProgger
                </div>
                <div className = "header-links">
                    <div className = " rec header-link">Реклама</div>
                    <div className = " site header-link">Создать сайт</div>
                </div>
                <div className = "button registration-button"  onClick={this.onRegistrationClick}>Регистрация</div>
                <div className="button login-button" onClick={this.onLoginClick}>Войти</div>


            </div>
        )
    }
    renderHeaderCategory() {
        const isTop = this.state.isTop;
        return(
            <div className  = {classNames("header-category", {"header-fixed":!isTop})}>
                <div className = "category-links" >
                    <div className = "item news" onClick = {this.onNewsClick}>IT новости</div>
                    <div className = "item video"  onClick = {this.onVideosClick}>Видеокурсы</div>
                    <div className = "item test">Тесты и практика</div>
                    <div className = "item readme" >Справочник</div>
                </div>
                <div className = " item header-search "onClick = {this.onSearchClick}>поиск</div>

            </div>
        )



    }


    render() {

        return (
            <div>

                {this.state.isTop ? this.renderHeader(): null }
                {this.renderHeaderCategory()}



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
export default HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    HeaderContainer
)


