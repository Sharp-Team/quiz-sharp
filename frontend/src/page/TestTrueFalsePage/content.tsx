import React, { Component } from 'react'
import styled from 'styled-components'
import { QuizBridge } from '../../bridges/bridges'
import BridgeManager from '../../bridges/bridge-manage'
import shuffle from 'shuffle-array'

const WrapContent = styled.div`
  .wrap-box {
    box-shadow: 0 2px 15px grey;
    border-radius: 5px;
    padding: 30px 50px;
    margin: 20px 0;
    margin-top: 3rem;

    .title {
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .wrap-quiz {
      .question {
        margin-bottom: 0;
        margin-top: 0;
      }
      .answer {
        margin-top: 0;
        margin-bottom: 0px;
      }
      .false {
        margin-left: 20px;
      }
      .correct {
        margin-top: 25px;
        margin-bottom: 0;
        color: green;
      }
      .incorrect {
        margin-top: 25px;
        margin-bottom: 0;
        color: red;
      }
    }
  }
`

class Content extends Component<any, any> {

   // @ts-ignore
   _quizBridge: QuizBridge

  constructor(props: any) {
    super(props)
    this.state = {
      listQuiz: [],
      submit: false
    }
  }

  async  componentDidMount() {
    this._quizBridge = await BridgeManager.getBridge<QuizBridge>('quizBridge')
    const listQuiz = await this._quizBridge.getListQuizByID(1)
    // create new array
    const listQuizTrueFalse = []
    const sizeListQuiz = listQuiz.length
    // add quiz true false to list quiz
    for(let quiz of listQuiz) {
      // create object one quiz format
        const quizTrueFalse = {
          id: 0,
          question: '',
          answerCorrect: '',
          answerIncorrect: '',
          answerUser: ''
        }
        quizTrueFalse.id = quiz.id
        quizTrueFalse.question = quiz.term
        quizTrueFalse.answerCorrect = quiz.definition
        // random defination
        const indexRandom = Math.floor(Math.random() * sizeListQuiz)
        quizTrueFalse.answerIncorrect = listQuiz[indexRandom].definition
        listQuizTrueFalse.push(quizTrueFalse)
    }

    this.setState({
      listQuiz: listQuizTrueFalse
    })
  }

  onButtonChanged = (event: any, idIndex: number) => {
    this.state.listQuiz[idIndex].answerUser = event.target.value
  }

  submit = () => {
    this.setState({
      submit: true
    })
  }

  randomAnswer = (value: any) => {
    if(Math.round(Math.random()) === 0) {
      return value.answerCorrect
    } else {
      return value.answerIncorrect
    }
  }

  renderQuiz = () => {
    if(this.state.submit === false) {
      return (
        this.state.listQuiz.map((value: any, id: number) => (
          <div className="wrap-quiz">
            <p className="question"><strong>Question {id + 1}: </strong>{value.question}</p>
            <p className="answer"><strong>Answer: </strong>{this.randomAnswer(value)}</p>
            <input
              type="radio"
              name={"answer" + value.id} 
              value={value.answerCorrect}
              className="true"
              onChange={(event) => this.onButtonChanged(event, id)}
            /> True
            <input 
              type="radio"
              name={"answer" + value.id}  
              value=""
              className="false"
              onChange={(event) => this.onButtonChanged(event, id)}
            /> False
          </div>
        ))
      )
    } else {
      return (
        this.state.listQuiz.map((value: any, id: number) => (
          <div className="wrap-quiz">
            {this.state.listQuiz[id].answerCorrect === this.state.listQuiz[id].answerUser &&
              <p className="correct">Correct</p>
            }
            {this.state.listQuiz[id].answerCorrect !== this.state.listQuiz[id].answerUser &&
              <p className="incorrect">Incorrect</p>
            }
            <p className="question"><strong>Question {id + 1}: </strong>{value.question}</p>
            <p className="answer"><strong>Answer: </strong>{value.answerCorrect}</p>
            <input 
              type="radio"
              className="true"
              disabled
            /> True
            <input 
              type="radio"
              className="false"
              disabled
            /> False
          </div>
        ))
      )
    }
  }

  render() {
    return (
        <WrapContent>
          <div className="wrap-box">
            <h3 className="title">{this.state.listQuiz.length} True False Questions</h3>
            {this.renderQuiz()}
          </div>
          <button
            className="btn btn-danger"
            onClick={() => this.submit()}>
            Submit
          </button>
        </WrapContent>
    )
  }
}

export default Content
