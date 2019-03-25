import React, { Component } from 'react'
import styled from 'styled-components'
import { listQuiz } from '../../utils/quiz'
import SuffleQuizs from './suffleQuestion'

const WrapTitle = styled.div`
  .wrap-all {
    margin-left: 1rem;
    margin-top: 3rem;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
    background-color: #bbdefb;
    width: 89%;
    .wrap-text-count {
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 1.2;
    }
    .question-list {
      padding-left: 2px;
    }
  }
  ol {
    list-style: none;
    counter-reset: my-awesome-counter;
  }
  ol li {
    counter-increment: my-awesome-counter;
  }
  ol li::before {
    content: counter(my-awesome-counter) '. ';
    color: red;
    font-weight: bold;
  }
`

class ContentMultipleChoice extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: listQuiz,
      quizSize: listQuiz.length,
    }
  }

  render() {
    return (
      <WrapTitle>
        <div className="wrap-all">
          <p className="wrap-text-count ">
            {this.state.quizSize} Multiple choice questions
          </p>
          <ol className="question-list">
            <SuffleQuizs data={this.state.data} />
          </ol>
        </div>
      </WrapTitle>
    )
  }
}

export default ContentMultipleChoice
