import React from 'react'
import { Navigation } from '../../components'
import { Circle } from 'rc-progress'
import styled from 'styled-components'
const WrapperSideBar = styled.div`
  margin-top: 3rem;
`

const WrapContent = styled.div`
  .warp-quiz {
    box-shadow: 0 2px 15px grey;
    margin-top: 3rem;
    border-radius: 10px;
    height: 70vh;
    cursor: pointer;
    .one-quiz {
      position: absolute;
      line-height: 70vh;
      width: 100%;
      font-size: 2.5rem;
      backface-visibility: hidden;
      text-align: center;
    }
  }

  .wrap-write {
      box-shadow: 0 0 5px grey;
      margin-top: 1rem;
      margin-right: 400px;
      height: 30vh;
      .write-content {
        padding: 2rem;
        .line{
          border-bottom: 2px ridge;
          border-bottom-color: #afb1b5;
        }
        .question-row {
          display: table;
          width: 100%;
          .learn-button {
            float: right;
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
        }
        .answer-row {
          display: table;
          width: 100%;
          margin-top: 10px;
          .answer-cells {
            margin-top: 30px;
            padding-top: 30px;
            .button-cell {
                float: right;
                .btn{
                  width: 150px;
                  height: 40px;
                  border-radius: 0px;
                  &:hover {
                    background-color: #f100a8;
                    border-color: #f100a8;
                  }
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
  }
`

class LearnWritePage extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      quizCurrent: 1,
      restart: false,
      listQuiz: [
        { id: 1, term: "hello", definition: "xin chao" },
        { id: 2, term: "goodby", definition: "tam biet" },
        { id: 3, term: "sorry", definition: "xin loi" },
        { id: 4, term: "sad", definition: "buon" },
        { id: 4, term: "cute", definition: "de thuong" }
      ]
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <WrapperSideBar >
                <p>sidebar</p>
              </WrapperSideBar>
            </div>
            <div className="col-10">
              {/* {this.state.listQuiz.map((quiz: any, index: number) => (
                <WrapContent key={quiz.id} className="px-5">
                  <div
                    className="warp-quiz"
                    id={`flip-${index}`}
                  >
                    <span className="one-quiz">{ quiz.term }</span>
                  </div>
                </WrapContent>
              ))} */}
              <WrapContent>
                <div className="wrap-write">
                  <div className="write-content">
                    <div className="question-row">
                      <div className="learn-button">
                        <a className="myButton" href="#">
                          I Don't Know
                        </a>
                      </div>
                      <span>
                        This is question.
                      </span>
                    </div>
                    <hr className="line"></hr>
                    <div className="answer-row">
                      <div className="answer-cells">
                        <div className="button-cell">
                          <button type="button" className="btn btn-info">Answer</button>
                        </div>
                        <div className="input-cell">
                          <input className="input-textfield">
                          </input>
                          <span className="label">TYPE THE ANSWER</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </WrapContent>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LearnWritePage
