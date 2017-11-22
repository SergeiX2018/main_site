import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import MainContainer from './MainContainer'
class Application extends Component {
    render() {
        return (
            <div>

                <MainContainer/>
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
    Application
)