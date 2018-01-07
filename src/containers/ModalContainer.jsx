import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import createHashHistory from 'history/createHashHistory'

class ModalContainer extends Component {
    constructor() {
        super()

        this.onCloseClick = this.onCloseClick.bind(this)
        this.onInputFocus = this.onInputFocus.bind(this)
        this.onInputBlur = this.onInputBlur.bind(this)
        this.state = {
            isFocused:false,
        }
    }

    onCloseClick() {
        this.props.actions.modalClose()
    }

    onInputFocus (){
        this.setState({isFocused:true})


    }
    onInputBlur() {
        this.setState({isFocused:false})
    }
    renderContent() {
        const isFocused = this.state.isFocused
        let placeholderText = ""
        if(!isFocused) {
           placeholderText = "google Пользовательский поиск"
        }

     return(
         <div className = "modal-container">
             <div className = "modal-container-close" onClick = {this.onCloseClick}>X</div>
             <div className = "modal-container-search">
                 <input type = "text"  onFocus = {this.onInputFocus  }  onBlur = {this.onInputBlur}  placeholder= { placeholderText} />
                 <div className = "modal-container-search-button"></div>
             </div>
         </div>
     )

    }
    render() {
        if(!this.props.state) {
            return null
        }
      const isShow = this.props.state.modal.isShow
        return (
            <div>
                {isShow ? this.renderContent(): null}

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
export default ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    ModalContainer
)
