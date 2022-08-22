import React, { Component } from 'react'
import './Clock.css'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: "",
        }
    }

    componentDidMount() {
        setInterval(() => this.updateClock())
    }

    updateClock() {
        this.setState({ time: new Date().toLocaleTimeString()})
    }


  render() {
    return (
     <div class='container'>
        <h1>Local Time:</h1>
        <h2>{this.state.time}</h2>
     </div>
    )
  }
}
