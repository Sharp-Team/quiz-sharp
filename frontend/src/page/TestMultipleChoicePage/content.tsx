import React, { Component } from 'react'
import styled from 'styled-components'
import { listQuiz } from '../../utils/quiz'
import SuffleQuizs from './suffleQuestion'

const WrapTitle = styled.div`
  .wrap-all {
    margin-left: 1rem;
    margin-top: 3rem;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
    background-color: #e1f5fe;
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
    font-size: 0.85rem;
    font-weight: bold;
  }
  
  .btn-check-answer {
    margin-bottom: 40px;
    max-width: 90%;
    display: flex;
    justify-content: center;
    .answer {
      margin-top: 20px;
      padding-left: 10%;
      padding-right: 10%;
      font-size: 2rem;
      font-weight: bold;
    }
  }
`

class ContentMultipleChoice extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: listQuiz,
      quizSize: listQuiz.length,
      answerQuiz: []
    }
  }
  listAnswerCorrect = () => {
    return listQuiz.reduce((acc: any[], { id, definition }) => [ ...acc, {id, definition} ], [])
  }

  checkAnswer = (event: any) => {
    
    $('html, body').animate({scrollTop:0}, '300')
  }
  render() {
    return (
      <WrapTitle>
        <div className="wrap-all">
          <p className="wrap-text-count " id="top-section">
            {this.state.quizSize} Multiple choice questions
          </p>
          <ol className="question-list">
            <SuffleQuizs data={this.state.data} answerChildCorrect={this.listAnswerCorrect()}/>
          </ol>
        </div>
        <div className="btn-check-answer">
          <button id="toTopSubmit" className="btn btn-success answer" onClick={this.checkAnswer}>Check answer</button>
        </div>
      </WrapTitle>
    )
  }
}

export default ContentMultipleChoice
