import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import * as Actions from "./../actions/index.js"
import HeaderContainer from './HeaderContainer'
import ArticlePreviewComponent from'../components/ArticlePreviewComponent'
import VideoPreviewComponent from'../components/VideoPreviewComponent'
import VisibilitySensor from 'react-visibility-sensor'
import classNames from 'classnames'

class NewsContainer extends Component {
    constructor() {
        super()
        this.renderCategory = this.renderCategory.bind(this)
        this.state = {
            selectCategory:0
        }


    }
     componentDidMount() {
         this.initArticles()
         this.initVideos()
         this.initCategories()
     }

     handleTask() {

     }

     handleSelectCategory(id) {
        this.setState({selectCategory:id})

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
        this.props.actions.videoRequest()

    }
    initCategories() {
        this.props.actions.categoriesRequest()

    }
    renderArticle(article,index) {




        return(
            <VisibilitySensor key ={index} partialVisibility = {true}>
                {({isVisible}) =>
                    <ArticlePreviewComponent article = {article} isHidden={!isVisible} />
                }</VisibilitySensor>

        )
    }

    renderCategory(category, index) {
        return (
            <div key = {index} className = {classNames("item") } onClick = {this.handleSelectCategory.bind(this,category.id)}>
                {category.text_description}
                </div>
        )
    }
    renderCategories() {
        const categories = this.props.state.categories.data
        return(
            <div className = "render-category-link">
                <div className = "item-all item" onClick = {this.handleSelectCategory.bind(this,0)}> Все</div>
                {categories.map(this.renderCategory)}


            </div>
        )

}



    renderVideo(video,index) {


        return (
            <VideoPreviewComponent video={video} key={index}/>

        )
    }

    render() {
        const selectCategory = this.state.selectCategory
        const articles = this.props.state.news.data.filter(article=>selectCategory ? article.category === selectCategory:article)
        const videos = this.props.state.video.data
        const categories = this.props.state.categories.data
        return (
            <div>

                <HeaderContainer/>
                <div className = "news-content">
                    <div className = "articles-container">
                        <div className = "article-title">
                            новые статьи
                        </div>

                        {this.renderCategories()}
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