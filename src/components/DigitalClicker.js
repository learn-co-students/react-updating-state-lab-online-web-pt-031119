// Code DigitalClicker Component Here
import React from 'react';
 
export default class DigitalClicker extends React.Component {
    constructor() {
        super();
     
        this.state = {
          timesClicked: 0
        };
      }

      increaseClicks = () => {
          this.setState( previousState => {
              return {
                  timesClicked: previousState.timesClicked + 1
              }
          }

          )
      }

    render() {
        return (
            // <label for='btn'>{this.state.timesClicked}</label>
            <button id='btn' onClick={this.increaseClicks}>{this.state.timesClicked}</button>
        );
    }
}