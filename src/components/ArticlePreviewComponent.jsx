import React, { Component } from 'react'
import  classNames  from 'classnames'

export default class ArticlePreviewComponent extends Component {
    constructor(){
        super()
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
                <div className = "article-preview-title">{article.title}</div>
                <div className = "article-preview-description">{article.description}</div>
                <div className = "article-preview-time">{articleTime.toLocaleString()}</div>
                <div className = "article-preview-views">{article.views}</div>

            </div>
        )
    }
}