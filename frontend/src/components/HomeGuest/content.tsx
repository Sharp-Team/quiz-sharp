import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconBookMark, IconTime } from '../../images'
import { SetStudyBridge } from '../../bridges/bridges'
import BridgeManager from '../../bridges/bridge-manage'

const WrapContent = styled.div`
  .wrap-all {
    margin-top: 3rem;
    height: 100vh;
    .content-right {
      background-color: #ffffff;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 15px grey;
      border-radius: 5px;
      &:hover {
        text-decoration: none;
      }
      .my-card {
        padding-left: 3rem;
        padding-right: 10rem;
        display: flex;
        flex-direction: column;
        .title-card {
          padding-top: 1rem;
          padding-bottom: 2rem;
          font-weight: bold;
          font-size: 1.5rem;
          color: #4c4c4c;
        }
        .info-card {
          display: flex;
          flex-direction: row;
          padding-bottom: 1rem;
          .wrap-avatar {
            .img-avatar {
              height: 30px;
              width: 30px;
              border-radius: 50%;
            }
            .username {
              color: #f100a8;
              font-size: 0.9rem;
              font-weight: bold;
              padding-left: 10px;
            }
          }
          .wrap-terms {
            position: absolute;
            left: 40%;
            .img-bookmark {
              width: 10px;
            }
            .text-count {
              font-weight: bold;
              padding-left: 5px;
              color: #4c4c4c;
              font-size: 0.9rem;
              height: 30px;
              line-height: 30px;
            }
          }
          .wrap-date {
            position: absolute;
            right: 10%;
            bottom: 18%;
            .img-date {
              width: 13px;
            }
            .text-date {
              padding-left: 5px;
              font-size: 0.9rem;
              color: #9a9a9a;
              padding-top: 5px;
            }
          }
        }
      }
    }
  }
`

class ContentQuizPage extends React.Component<any, any> {

  // @ts-ignore
  _setStudyBridge: SetStudyBridge

  constructor(props: any) {
    super(props)
    this.state = {
      cards: []
    }
  }

  async componentDidMount() {
    this._setStudyBridge = await BridgeManager.getBridge<SetStudyBridge>('setStudyBridge')
    const listQuiz: any = await this._setStudyBridge.getListSetStudy(1)
    this.setState({
      cards: listQuiz
    })
  }

  render() {
    return (
      <WrapContent>
        <div className="wrap-all">
          <div className="container-fluid">
            <div className="row">
              {this.state.cards.map((card: any) => (
                <Link
                  to={`/${card.id}`}
                  className="col-12 content-right"
                  key={card.id}
                >
                  <div className="my-card">
                    <div className="title-card">
                      <h4>{card.title}</h4>
                    </div>
                    <div className="info-card">
                      <div className="wrap-avatar">
                        <img
                          src={card.avatar_url}
                          alt="image card"
                          className="img-avatar"
                        />
                        <span className="username">{card.username}</span>
                      </div>
                      <div className="wrap-terms">
                        <img
                          src={IconBookMark}
                          alt="icon bookmark"
                          className="img-bookmark"
                        />
                        <span className="text-count">{card.term}</span>
                      </div>
                      <div className="wrap-date">
                        <img src={IconTime} alt="icon date" className="img-date" />
                        <span className="text-date">{card.createdDate.split('T')[0]}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </WrapContent>
    )
  }
}

export default ContentQuizPage
