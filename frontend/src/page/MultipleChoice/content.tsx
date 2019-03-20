import React, { Component } from 'react'
import styled from 'styled-components'
import { listQuiz } from '../../utils/quiz'
import ListTestQuiz from './listTestQuiz'

const WrapAll = styled.div`
  .wrap-model {
    margin: 50px auto;
    padding: 2.5rem 2.5rem;
  }
  .text-count-quiz {
    color: black;
    font-weight: bold;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.2;
  }
`

class TestContent extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: listQuiz,
      countQuiz: 9,
    }
  }
  render() {
    return (
      <WrapAll>
        <div className="wrap-model">
          <span className="text-count-quiz">
            {this.state.countQuiz} Multiple choice questions
          </span>
        </div>
        <ListTestQuiz data={this.state.data} countQuiz={this.state.countQuiz} />
      </WrapAll>
    )
  }
}

export default TestContent
