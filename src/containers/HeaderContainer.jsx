import React, { Component } from 'react'
import * as LocaleType from "./../constants/LocaleType"
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import createHashHistory from 'history/createHashHistory'
import  classNames  from 'classnames'
import Localization  from "./../localization/Localization"

class HeaderContainer extends Component {
    constructor() {
        super()
        this.onLoginClick = this.onLoginClick.bind(this)
        this.changeLocaleEn = this.changeLocaleEn.bind(this)
        this.changeLocaleRu = this.changeLocaleRu.bind(this)
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
    changeLocaleRu() {
        this.props.actions.changeLocale(LocaleType.RU)

    }

    changeLocaleEn() {
        this.props.actions.changeLocale(LocaleType.EN)
    }
    //onArticleClick() {
       // createHashHistory().push('/article')
    //}

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

    renderLocalisation() {
        return(
            <div className = "header-localisation">
            <div className = "locale-ru" onClick = {this.changeLocaleRu}>русский</div>
            <div className = "locale-en"  onClick = {this.changeLocaleEn}>english</div>
            </div>
            )
    }
    getText(key) {
        const locale = this.props.state.locale.locale
        return Localization.getText(key,locale)


    }
    renderHeaderCategory() {
        const isTop = this.state.isTop;
        const newsText = this.getText("NEWS")
        const video= this.getText("VIDEO")
        const tests = this.getText("TESTS")
        const directory = this.getText("DIRECTORY")
        const search= this.getText("SEARCH")
        return(
            <div className  = {classNames("header-category", {"header-fixed":!isTop})}>
                <div className = "category-links" >
                    <div className = "item news" onClick = {this.onNewsClick}>{newsText}</div>
                    <div className = "item video"  onClick = {this.onVideosClick}>{video}</div>
                    <div className = "item test">{tests}</div>
                    <div className = "item readme" >{directory}</div>
                </div>
                <div className = " item header-search "onClick = {this.onSearchClick}>{search}</div>

            </div>
        )





    }


    render() {

        return (
            <div>

                {this.state.isTop ? this.renderHeader(): null }
                {this.renderHeaderCategory()}
                {this.renderLocalisation()}


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


