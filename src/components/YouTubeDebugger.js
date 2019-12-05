// Code YouTubeDebugger Component Here

import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    
    constructor() {
        super();

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
    };

    handleClick1 = () => {
        this.setState ({
            settings: {
            ...this.state.settings,
            bitrate: 12
        }
        });
    };

    handleClick2 = () => {
        this.setState ({
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
    return(
        <div>
            <button 
            onClick={this.handleClick1}
            className="bitrate">
            Change Bitrate 
            </button>
            <button 
            onClick={this.handleClick2}
            className="resolution">
            Resolution 
            </button>
        </div>
    )
}

}

