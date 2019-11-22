import React, { Component } from 'react'

class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            } 
        }
    }

    bitHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12                              
            }
        })
    }

    resHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.bitHandler} className={'bitrate'} />
                <button onClick={this.resHandler} className={'resolution'} /> 
            </div>
        )
    }
}


export default YouTubeDebugger