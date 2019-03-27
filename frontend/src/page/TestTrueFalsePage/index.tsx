import React, { Component } from 'react'
import styled from 'styled-components'

const WrapPage = styled.div`
  .big-title {
    background-color: red;
    color: white;
  }
  .wrap-content {
    .small-title {
      color: red;
    }
    .small-title-2 {
      color: #20c997;
    }
  }
`

class TestTrueFalsePage extends Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <WrapPage>
        <h2 className="big-title">Home Page</h2>
        <div className="wrap-content">
          <p className="small-title">title 1</p>
          <p className="small-title-2">title 2</p>
        </div>
      </WrapPage>
    )
  }
}

export default TestTrueFalsePage
