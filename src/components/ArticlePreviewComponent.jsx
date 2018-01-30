import React, { Component } from 'react'
import  classNames  from 'classnames'
import createHashHistory from 'history/createHashHistory'
export default class ArticlePreviewComponent extends Component {
    constructor(){
        super()
        this.onSelectArticle = this.onSelectArticle.bind(this)
    }


    onSelectArticle() {
        const article =  this.props.article;
        const id = article.id;
        createHashHistory().push(`/article/${id}`)

    }
    render() {
        const article = this.props.article;
        const isHidden = this.props.isHidden || false;

        const style = {
            backgroundImage:"url("+article.image+")"
        }

        const articleTime = new Date(article.time)

        return(
            <div className = {classNames("article-preview-component", {'hidden':isHidden})}  >
                <div className = "article-preview-image" style = {style}></div>
                <div className = "article-preview-title" onClick = {this.onSelectArticle}>{article.title}</div>
                <div className = "article-preview-description">{article.description}</div>
                <div className = "article-preview-time">{articleTime.toLocaleString()}</div>
                <div className = "article-preview-views">{article.views}</div>

            </div>
        )
    }
}