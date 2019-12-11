// Code DigitalClicker Component Here
import React from 'react';
import YouTubeDebugger from './YouTubeDebugger.js';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  anotherClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }


  render() {
    return (
      <div>
        <button onClick={this.anotherClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
