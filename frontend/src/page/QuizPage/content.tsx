import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ContentQuiz from './listQuiz'
import { QuizBridge } from '../../bridges/bridges'
import BridgeManager from '../../bridges/bridge-manage'
import {
  IconShare,
  IconEdit,
  IconInformation,
  IconFolder,
  IconMore,
  IconMultipleChoice,
  IconTest,
  IconWrite,
  IconCard,
  Triangle
} from '../../images'

const WrapContent = styled.div`
  .wrap-box {
    box-shadow: 0 2px 15px grey;
    border-radius: 5px;
    padding: 30px 50px;
    margin: 20px 0;
    margin-top: 3rem;
    .wrap-header {
      display: flex;
      .term {
        font-size: 0.9rem;
        font-weight: bold;
        border-right: 1px solid gray;
        margin-right: 15px;
        padding-right: 15px;
        margin-bottom: 0;
        line-height: 31px;
        height: 31px;
      }
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 15px;
      }
      .username {
        line-height: 31px;
        font-size: 0.9rem;
        margin-left: 5px;
        color: #f100a8;
      }
    }

    .title {
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .list-icon {
      margin-bottom: 60px;
      .image-icon {
        width: 18px;
        margin-right: 10px;
      }
    }
  }
`

const WrapFeature = styled.div`
  .wrap-feature {
    color: white;
    margin-top: -80px;
    .one-box {
      &:hover {
        transform: scale(1.05, 1.05);
      }
      background-color: #f100a8;
      padding-top: 15px;
      border-radius: 15px;
      width: 145px;
      box-shadow: 0 3px 10px #0000009e;
      .link {
        &:hover {
          text-decoration: none;
        }
      }
      .title-feature {
        margin-top: 5px;
        margin-bottom: 15px;
        font-size: 15px;
        color: white;
        text-decoration: none;
      }
      .icon-feature {
        height: 50px;
      }
    }
  }
`
const WrapContentTitle = styled.div`
  .wrap-title {
    margin-top: 100px;
    margin-bottom: 20px;
    color: #707070;
    display: flex;
    .wrap-countTerm {
      font-weight: bold;
      .wrap-text {
        padding-left: 20px;
      }
    }
    .wrap-original {
      position: absolute;
      right: 2%;
      .wrap-icon {
        padding-left: 10px;
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
      data: [],
    }
  }

  async  componentDidMount() {
    this._quizBridge = await BridgeManager.getBridge<QuizBridge>('quizBridge')
    const quiz = await this._quizBridge.getListQuizByID(parseInt(this.props.quiz.id))
    this.updateListQuiz(quiz)
  }

  updateListQuiz = (data: any) => {
    this.setState({
      data,
    })
  }

  render() {
    return (
      <div>
        <WrapContent>
          <div className="wrap-box">
            <div className="wrap-header">
              <p className="term">{this.props.quiz.term} terms</p>
              <img className="avatar" src={this.props.quiz.avatar} alt="avatar" />
              <p className="username">{this.props.quiz.username}</p>
            </div>
            <h3 className="title">{this.props.quiz.title}</h3>
            <div className="list-icon">
              <img className="image-icon" src={IconFolder} alt="icon folder" />
              <img className="image-icon" src={IconShare} alt="icon share" />
              <img className="image-icon" src={IconEdit} alt="icon edit" />
              <img
                className="image-icon"
                src={IconInformation}
                alt="icon infor"
              />
              <img className="image-icon" src={IconMore} alt="icon more" />
            </div>
          </div>
        </WrapContent>
        <WrapFeature>
          <div className="wrap-feature row justify-content-md-center">
            <div className="one-box col-auto text-center mx-3">
              <Link
                to={{ pathname: "/flashcard", search: "?id=" + this.props.quiz.id }}
                className="link">
                <img
                  className="icon-feature"
                  src={IconCard}
                  alt="icon flash card"
                />
                <p className="title-feature">FlashCard</p>
              </Link>
            </div>
            <div className="one-box col-auto text-center mx-3">
              <Link
                to={{ pathname: "/learn-write", search: "?id=" + this.props.quiz.id }}
                className="link">
                <img
                  className="icon-feature"
                  src={IconWrite}
                  alt="icon write"
                />
                <p className="title-feature">Write</p>
              </Link>
            </div>
            <div className="one-box col-auto text-center mx-3">
              <Link
                to={{ pathname: "/truefalse", search: "?id=" + this.props.quiz.id }}
                className="link">
                <img className="icon-feature" src={IconTest} alt="icon test" />
                <p className="title-feature">Test</p>
              </Link>
            </div>
            <div className="one-box col-auto text-center mx-3">
              <Link 
                to={{ pathname: "/multiplechoice", search: "?id=" + this.props.quiz.id }}
                className="link">
                <img
                  className="icon-feature"
                  src={IconMultipleChoice}
                  alt="icon multiple choice"
                />
                <p className="title-feature">Multiple Choice</p>
              </Link>
            </div>
          </div>
        </WrapFeature>

        <WrapContentTitle>
          <div className="wrap-title">
            <div className="wrap-countTerm">
              <span className="wrap-text">{this.props.quiz.term} terms in this set</span>
            </div>
            <div className="wrap-original">
              <span>Original</span>
              <img className="wrap-icon" src={Triangle} />
            </div>
          </div>
        </WrapContentTitle>

        <ContentQuiz
          quiz={this.props.quiz}
          data={this.state.data}
          updateQuiz={(data: any) => this.updateListQuiz(data)}
        />
      </div>
    )
  }
}

export default Content
