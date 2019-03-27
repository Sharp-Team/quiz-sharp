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
  }
`

class Content extends Component<any, any> {

   // @ts-ignore
   _quizBridge: QuizBridge

  constructor(props: any) {
    super(props)
    this.state = {
      listQuiz: [],
    }
  }

  async  componentDidMount() {
    this._quizBridge = await BridgeManager.getBridge<QuizBridge>('quizBridge')
    const listQuiz = await this._quizBridge.getListQuizByID(1)
    // create new array
    const listQuizTrueFalse = []
    // create object one quiz format
    const quizTrueFalse = {
        id: 0,
        question: '',
        answerCorrect: '',
        answerIncorrect: ''
    }
    const sizeListQuiz = listQuiz.length
    // add quiz true false to list quiz
    for(let quiz of listQuiz) {
        quizTrueFalse.id = quiz.id
        quizTrueFalse.question = quiz.term
        quizTrueFalse.answerCorrect = quiz.definition
        // random defination
        const indexRandom = Math.floor(Math.random() * sizeListQuiz)
        quizTrueFalse.answerIncorrect = listQuiz[indexRandom].definition
        listQuizTrueFalse.push(quizTrueFalse)
    }

    this.setState({
      listQuiz: shuffle(listQuizTrueFalse)
    })
    console.log(listQuizTrueFalse)
  }

  renderQuiz = () => {
    return(
        <div className="wrap-quiz">
            <p className="question">Question: Cong hoa xa hoi chu nghia vietnam</p>
            <p className="answer">Answer: doc lap tu do hanh phuc</p>
            <input 
              type="radio"
              name="answer1" 
              value="abcde" 
            /> True
            <input 
              type="radio"
              name="answer1" 
              value="abcde" 
            /> False
        </div>
    )
  }

  render() {
    return (
        <WrapContent>
          <div className="wrap-box">
            <h3 className="title">Test True False</h3>
            {this.renderQuiz()}
          </div>
        </WrapContent>
    )
  }
}

export default Content
