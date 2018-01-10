import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import HeaderContainer from './HeaderContainer'
import ArticlePreviewComponent from'../components/ArticlePreviewComponent'
import VideoPreviewComponent from'../components/VideoPreviewComponent'

class MainContainer extends Component {
    constructor() {
        super()
        this.state = {articles:[],

        }







    }

componentDidMount() {
    this.initVideos()
    this.initArticles()

}
    initArticles() {
       this.props.actions.articleRequest()
    }
    initVideos() {
        this.props.actions.videoRequest()
    }
    renderArticle(article,index) {




        return(
            <ArticlePreviewComponent article = {article} key ={index}/>

        )
    }
    renderVideo(video,index) {


        return (
            <VideoPreviewComponent video={video} key={index}/>

        )
    }

    render() {


        const videos = this.props.state.video.data
        const articles = this.props.state.article.data
        return (
            <div>

                <HeaderContainer/>
                <div className = "main-content">
                    <div className = "articles-container">
                        <div className = "article-title">
                            новые статьи
                        </div>

                        <div className = "articles-wrapper" >
                            {articles.map(this.renderArticle)}
                        </div>

                    </div>
                    <div className = "videos-container">
                        <div className = "videos-title">
                            новые статьи
                        </div>
                        <div className = "videos-wrapper" >
                            {videos.map(this.renderVideo)}
                        </div>
                    </div>
                </div>
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
export default MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    MainContainer
)