import React from 'react'
import { Navigation } from '../../components'
import { Line } from 'rc-progress'
import styled from 'styled-components'
import queryString from 'query-string'
import { ToastContainer, toast } from 'react-toastify'
import { QuizBridge } from '../../bridges/bridges'
import BridgeManager from '../../bridges/bridge-manage'
import 'react-toastify/dist/ReactToastify.css'

const WrapperSideBar = styled.div`
  margin-top: 3rem;
  .progress {
    background: none;
  }
`

const WrapContent = styled.div`
  .wrap-write {
    box-shadow: 0 2px 15px grey;
    margin-top: 3rem;
    border-radius: 10px;
    height: 70vh;
    .write-content {
      padding: 4rem;
      .line{
        border-bottom: 1px ridge;
        border-bottom-color: #afb1b5;
      }
      .question-row {
        width: 100%;
        .learn-button {
          float: right;
          margin-top: 25px;
          .myButton {
            display: inline;
            border: none;
            outline: none;
            text-decoration: none;
            color: #3ccfcf;
            &:hover {
              color: #f100a8;
            }
          }
        }
        .question {
          font-size: 2.2rem;
        }
      }
      .answer-row {
        display: table;
        width: 100%;
        margin-top: 150px;
        .result {
          font-size: 1.5rem;
          color: #c10000;
        }
        .answer-cells {
          margin-top: 30px;
          padding-top: 30px;
          .button-cell {
              float: right;
              .btn{
                width: 150px;
                height: 40px;
                &:hover {
                  background-color: white;
                  color: #f100a8;
                  border-color: #f100a8;
                }
              }
              .btn-answer {
                border-radius: 20px;
                background-color: #f100a8;
              }
          }
          .input-cell {
            display: table;
            margin-top: 0;
            width: 70%;
            .input-textfield {
              cursor: pointer;
              display: block;
              width: 100% ;
              font-size: 20px;
              border: none;
              border-bottom: 1px solid black;
              border-bottom-width: 100%;
              width: 100%;
              outline: none;
              &:hover {
                border-bottom: 2px solid #f100a8;
              }
            }
            .label {
                font-size: 0.75rem;
                color: grey;
              }
          }
        }
      }
    }

    .wrap-cong {
      width: 100%;
      height: 100%;
      justify-content: center;
      text-align: center;
      .text-cong {
        color: #21ca00;
        padding-top: 170px;
        font-size: 4rem;
      }
    }
  }
`

class LearnWritePage extends React.Component<any, any> {

  // @ts-ignore
  _quizBridge: QuizBridge

  constructor(props: any) {
    super(props)
    this.state = {
      quizCurrent: 0,
      message: '',
      answerUser: '',
      progressNotDone: 100,
      progressCorrect: 0,
      progressInCorrect: 0,
      countCorrect: 0,
      countInCorrect: 0,
      checkPreviousIncorrect: true,
      listQuiz: []
    }
  }

  async componentDidMount() {
    this._quizBridge = await BridgeManager.getBridge<QuizBridge>('quizBridge')
    const idQuiz: any = queryString.parse(this.props.location.search).id
    const listQuiz = this._quizBridge.getListQuizByID(parseInt(idQuiz))
    listQuiz.then((result: any) => {
      this.setState({
        listQuiz: result
      })
    })
  }

  checkAnswer = () => {
    // update not done
    const sizeOfListQuiz: number = this.state.listQuiz.length
    this.setState({
      progressNotDone: ((sizeOfListQuiz - parseInt(this.state.quizCurrent + 1)) / sizeOfListQuiz) * 100
    })

    const answerCurrentCurrent = this.state.listQuiz[this.state.quizCurrent].definition

    // check user answer correct
    if(this.state.answerUser === answerCurrentCurrent) {
      // update quiz current, count number question correct, progress correct
      this.setState({
        quizCurrent: parseInt(this.state.quizCurrent) + 1,
        answerUser: '',
        message: '',
        checkPreviousIncorrect: true
      })

      // check question previos correct or not
      if(this.state.checkPreviousIncorrect){
        this.setState({
          countCorrect: parseInt(this.state.countCorrect) + 1,
          progressCorrect: (parseInt(this.state.countCorrect + 1) / sizeOfListQuiz) * 100,
        }) 
      }

      // notify answer correct
      toast.success('Correct answer!!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        })
    } else {
      this.setState({
        message: 'Correct answer: ' + answerCurrentCurrent,
        countInCorrect: parseInt(this.state.countInCorrect) + 1,
        progressInCorrect: (parseInt(this.state.countInCorrect + 1) / this.state.listQuiz.length) * 100,
        checkPreviousIncorrect: false
      })
    }
  }

  changeData = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  renderQuiz = () => {
    return (
      <WrapContent >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        <div className="wrap-write">
          { this.state.quizCurrent !== this.state.listQuiz.length &&
            <div className="write-content">
              <div className="question-row">
                <div className="learn-button">
                  <a className="myButton" href="#">
                    I Don't Know
                  </a>
                </div>
                <span className="question">
                  {this.state.listQuiz[this.state.quizCurrent].term}
                </span>
              </div>
              <hr className="line"></hr>
              <form onSubmit={(event) => {event.preventDefault(); this.checkAnswer()}}>
                <div className="answer-row">
                  <span className="result">{this.state.message}</span>
                  <div className="answer-cells">
                    <div className="button-cell">
                      <button
                        type="button"
                        className="btn btn-danger btn-answer"
                        onClick={() => this.checkAnswer()}>Answer</button>
                    </div>
                    <div className="input-cell">
                      <input
                        type="text"
                        name="answerUser"
                        className="input-textfield"
                        value={this.state.answerUser}
                        onChange={(event) => this.changeData(event)}
                      />
                      <span className="label">TYPE THE ANSWER</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          }
          {
            this.state.quizCurrent === this.state.listQuiz.length &&
            <div className="wrap-cong">
              <p className="text-cong">Heartfelt congratulations to you!!!</p>
            </div>
          }
        </div>
      </WrapContent>
    )
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <WrapperSideBar >
                <span className="progress">Not Done: {this.state.progressNotDone.toFixed(2)}%</span>
                <Line percent={this.state.progressNotDone} strokeWidth="4" strokeColor="#D3D3D3" />
                <span className="progress">Correct: {this.state.progressCorrect.toFixed(2)}%</span>
                <Line percent={this.state.progressCorrect} strokeWidth="4" strokeColor="#20c997" />
                <span className="progress">Incorrect: {this.state.progressInCorrect.toFixed(2)}%</span>
                <Line percent={this.state.progressInCorrect} strokeWidth="4" strokeColor="#fb2f42" />
              </WrapperSideBar>
            </div>
            <div className="col-10">
              {this.renderQuiz()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LearnWritePage
