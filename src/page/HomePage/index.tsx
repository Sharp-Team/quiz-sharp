import React, { Component } from 'react'
import Navigation from '../../components/Navigation'
import Content from './content'


class TrueFalsePage extends Component {
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div className="wrap-all">
        <Navigation />
        <Content />
      </div>
    )
  }
}
export default TrueFalsePage
