import React, { Component } from 'react'
import Route from './routes'

class App extends Component {
  render() {
    return <div>{Route()}</div>
  }
}

export default App
