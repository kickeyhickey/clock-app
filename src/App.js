import React, { Component } from 'react'
import Clock from './compoents/Clock.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: ""
    }
  }
  render() {
    return (
      <>
       <Clock />
      </>
    )
  }
}
