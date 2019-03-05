import React, { Component } from 'react'
import styled from 'styled-components'

const WrapTestPage = styled.div`
  .heading1 {
    background-color: red;
    color: white;
  }

  .wrap-para {
    background-color: green;
    .para1{
      background-color:blue;
      color: white;
    }
    .para2{
      background-color: gray;
      color: green;
    }
  }
`


class TestPage extends Component {

    constructor(props: any) {
      super(props)
    }
    
    render() {
      return (
        <WrapTestPage>
          <h1 className="heading1">this is heading 1</h1>
          <div className="wrap-para">
            <p className="para1">paragraph 1</p>
            <p className="para2">paragraph 2</p>
          </div>
        </WrapTestPage>
      )
    }
  }
  
  export default TestPage
  