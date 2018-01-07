
import React, { Component } from 'react'
export default class VideoPreviewComponent extends Component {
    constructor(){
        super()
    }
    render() {
        const video = this.props.video;

        const style = {
            backgroundImage:"url("+video.image+")"
        }



        return(
            <div className = "video-preview-component" >
                <div className = "video-preview-image" style = {style}></div>
                <div className = "video-preview-title">{video.title}</div>
                <div className = "video-preview-tag">{video.tag}</div>
                <div className = "video-preview-count">{video.count}</div>

            </div>

        )
    }
}
