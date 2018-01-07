import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import HeaderContainer from './HeaderContainer'
import ArticlePreviewComponent from'../components/ArticlePreviewComponent'
import VideoPreviewComponent from'../components/VideoPreviewComponent'
import VisibilitySensor from 'react-visibility-sensor'

class NewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            videos:[],
        }



        this.initVideos()



    }
     componentDidMount() {
         this.initArticles()
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
    initArticles() {
        this.props.actions.newsRequest()
    }
    initVideos() {
        fetch("http://localhost:3000/videos", {

            headers:{"Content-Type" : "application/json"}
        })
            .then(response=>response.json())
            .then(response=>{
                this.setState({videos:response})
            })
    }
    renderArticle(article,index) {




        return(
            <VisibilitySensor key ={index} partialVisibility = {true}>
                {({isVisible}) =>
                    <ArticlePreviewComponent article = {article} isHidden={!isVisible} />
                }</VisibilitySensor>

        )
    }
    renderVideo(video,index) {


        return (
            <VideoPreviewComponent video={video} key={index}/>

        )
    }

    render() {

        const articles = this.props.state.news.data
        const videos = this.state.videos
        return (
            <div>

                <HeaderContainer/>
                <div className = "news-content">
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
export default NewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    NewsContainer
)