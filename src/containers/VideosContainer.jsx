import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import HeaderContainer from './HeaderContainer'
import ArticlePreviewComponent from'../components/ArticlePreviewComponent'
import VideoPreviewComponent from'../components/VideoPreviewComponent'

class VideosContainer extends Component {
    constructor() {

        super()
        this.state = {articles:[],
            videos:[],itvideos:[]
        }


        this.initArticles()
        this.initVideos()
        this.initItVideos()


    }




    initArticles() {
        fetch("http://localhost:3000/articles", {

            headers:{"Content-Type" : "application/json"}
        })
            .then(response=>response.json())
            .then(response=>{
                this.setState({articles:response})
            })
    }
    initItVideos() {
        fetch("http://localhost:3000/it-videos", {

            headers:{"Content-Type" : "application/json"}
        })
            .then(response=>response.json())
            .then(response=>{
                this.setState({itvideos:response})
            })
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
            <ArticlePreviewComponent article = {article} key ={index}/>

        )
    }

    renderItVideo(video,index) {
        const style = {
            backgroundImage:"url("+video.image+")"
        }
        return(
            <div className = "it-video-preview-component"  key = {index} >
                <div className = "it-video-preview-image" style = {style}></div>
                <div className = "it-video-preview-title">{video.title}</div>
                <div className = "it-video-preview-tag">{video.tag}</div>
                <div className = "it-video-preview-count">{video.count}</div>


            </div>

        )
    }
    renderVideo(video,index) {


        return (
            <VideoPreviewComponent video={video} key={index}/>

        )
    }

    render() {

        const articles = this.state.articles
        const videos = this.state.videos
        const itvideos = this.state.itvideos

        return (
            <div>

                <HeaderContainer/>
                <div className = "main-content">
                    <div className = "videos-container">
                        <div className = "videos-title">
                            <div className = "item-video all" onClick = {this.onAllClick}>Все</div>
                            <div className = "item-video game"  onClick = {this.onGameClick}>Игры</div>
                            <div className = "item-video site">Сайты</div>
                            <div className = "item-video design" >Дизайн</div>
                            <div className = "item-video leg" onClick = {this.onNewsClick}>Языки</div>
                            <div className = "item-video options"  onClick = {this.onVideosClick}>Прочее</div>
                            <div className = "item-video money">Платные</div>
                        </div>

                        <div className = "content-wrapper" >
                            {itvideos.map(this.renderItVideo)}
                        </div>

                    </div>
                    <div className = "bar-container">

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
export default VideosContainer = connect(
    mapStateToProps,
    mapDispatchToProps,

)(
    VideosContainer
)