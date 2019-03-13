import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as listQuiz from '../../utils/quiz'
import {
  IconShare,
  IconEdit,
  IconInformation,
  IconFolder,
  IconMore,
  Avatar,
  IconMultipleChoice,
  IconTest,
  IconWrite,
  IconCard,
  IconPlus,
  Triangle,
  Star,
  IconEditGray,
} from '../../images'

const quizs = listQuiz.cards

const WrapContent = styled.div`
  .wrap-box {
    box-shadow: 0 2px 15px grey;
    border-radius: 5px;
    padding: 30px 50px;
    margin: 20px 0;

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
const WrapTerm = styled.div`
  .wrap-text {
    color: #707070;
    margin-top: 7rem;
    .text-term {
      font-weight: bold;
      padding-left: 20px;
    }
    .original {
      padding-left: 1040px;
    }
    .icon-triangle {
      padding-left: 520px;
    }
  }
`

const WrapListTerm = styled.div`
  .wrap-box {
    border-radius: 10px;
    padding: 30px 50px;
    background-color: aliceblue;
    color: #707070;

    .wrap-header {
      display: flex;
      .quiz {
        font-size: 0.9rem;
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
        margin-right: 15px;
        padding-right: 15px;
        margin-bottom: 0;
        line-height: 31px;
        height: 31px;
      }
      .wrap-icon {
        .my-icon {
        }
      }
    }
  }
`

function Content() {
  return (
    <div>
      <WrapContent>
        <div className="wrap-box">
          <div className="wrap-header">
            <p className="term">7 terms</p>
            <img className="avatar" src={Avatar} alt="avatar" />
            <p className="username">Thaycacac</p>
          </div>
          <h3 className="title">Computer and the internet</h3>
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
            <Link to="#" className="link">
              <img
                className="icon-feature"
                src={IconCard}
                alt="icon flash card"
              />
              <p className="title-feature">FlashCard</p>
            </Link>
          </div>
          <div className="one-box col-auto text-center mx-3">
            <Link to="#" className="link">
              <img className="icon-feature" src={IconWrite} alt="icon write" />
              <p className="title-feature">Write</p>
            </Link>
          </div>
          <div className="one-box col-auto text-center mx-3">
            <Link to="#" className="link">
              <img className="icon-feature" src={IconTest} alt="icon test" />
              <p className="title-feature">Test</p>
            </Link>
          </div>
          <div className="one-box col-auto text-center mx-3">
            <Link to="#" className="link">
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

      <WrapTerm>
        <div className="row wrap-text">
          <div className="col-sm-4">
            <p className="text-term">7 terms in this set</p>
          </div>
          <div className="col-sm-4">
            <p className="original">Original</p>
          </div>
          <div className="col-sm-4">
            <img className="icon-triangle" src={Triangle} alt="icon" />
          </div>
        </div>
      </WrapTerm>

      <WrapListTerm>
        <div className="wrap-box">
          <div className="wrap-header row">
            {quizs.map(quiz => (
              <div>
                <div className="text-term">
                  <p>{quiz.term}</p>
                </div>
                <div className="text-definition">
                  <p>{quiz.definition}</p>
                </div>
                <div className="wrap-icon">
                  <img src={Star} className="my-icon" />
                  <Link to="#">
                    <img
                      src={IconEditGray}
                      alt="icon edit"
                      className="my-icon"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapListTerm>
    </div>
  )
}

export default Content
