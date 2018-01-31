import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import HeaderContainer from './HeaderContainer'
import ArticlePreviewComponent from'../components/ArticlePreviewComponent'
import VideoPreviewComponent from'../components/VideoPreviewComponent'

class ArticleContainer extends Component {
    constructor() {
        super()

    }


    componentDidMount() {
        this.initVideos()
        this.initArticle()

    }

    renderArticle() {debugger

        const articles = this.props.state.article.data
        const id = parseInt(this.props.match.params.id,10)
        const currentArticle = articles.find(article=>article.id ===id)
        if(!currentArticle) {
            return null
        }

        const localeKey = this.props.state.locale.localeKey;
        const contentKey = `content_${localeKey}`;
        const content = currentArticle[contentKey]
        return(
         <div dangerouslySetInnerHTML={{__html:content}}/>
        )



    }
    initVideos() {
        this.props.actions.videoRequest()
    }
    initArticle() {

        const articles = this.props.state.article.data
        const id = parseInt(this.props.match.params.id,10)
        const currentArticle = articles.find(article=>article.id ===id)
        if(!currentArticle) {
            this.props.actions.articleRequest({id:id})
        }
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
                            {this.renderArticle()}
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
export default ArticleContainer = connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    ArticleContainer
)