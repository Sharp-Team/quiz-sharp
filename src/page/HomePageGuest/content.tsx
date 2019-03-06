import React, { Component } from 'react'
import styled from 'styled-components'
import avatar from '../../images/flame.jpg'
import bookmark from '../../images/bookmark.png'
import date from '../../images/clock.png'

const WrapContent = styled.div`
  .wrap-all {
    height: 100vh;
    background-color: #E4E4E4;
    .content-right {
      background-color: #FFFFFF;
      border-radius: 10px;
      margin-top: 3rem;
      margin-bottom: 3rem;
      box-shadow: 0px 3px 6px #707070;
      .my-card {
        padding-left: 3rem;
        padding-right: 10rem;
        display: flex;
        flex-direction: column;
        .title-card {
          padding-top: 1rem;
          padding-bottom: 2rem;
          font-weight: bold;
          font-size: 35px;
          color: #4C4C4C;
        }
        .info-card {
          display: flex;
          flex-direction: row;
          padding-bottom: 1rem;
          .wrap-avatar {
            padding-right: 10rem;
            .img-avatar {
              height: 50px;
              width: 50px;
              border-radius: 50%;
            }
            .username {
              color: #F100A8;
              font-size: 20px;
              font-weight: bold;
              padding-left: 10px;
            }
          }
          .wrap-terms {
            padding-top: 10px;
            .img-bookmark {
              padding-bottom: 5px;
            }
            .text-count {
              font-weight: bold;
              padding-left: 5px;
              color: #4C4C4C;
              font-size: 18px;
            }
          }
          .wrap-date {
            position: absolute;
            right: 10%;
            bottom: 18%;
            .img-date {
              padding-bottom: 5px;
            }
            span.text-date {
              font-size: 18px;
              color: #9A9A9A;
              padding-top: 5px;
            }
          }
        }
      }
    }
  }
`

function ContentQuizPage() {
  return (
    <WrapContent>
      <div className="wrap-all">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 content-right">
              <div className="my-card">
                <div className="title-card">
                  Computer and the internet
                </div>
                <div className="info-card">
                  <div className="wrap-avatar">
                    <img src={avatar} alt="" className="img-avatar"/>
                    <span className="username">Flame</span>
                  </div>
                  <div className="wrap-terms">
                    <img src={bookmark} alt="" className="img-bookmark"/>
                    <span className="text-count">50 terms</span>
                  </div>
                  <div className="wrap-date">
                    <img src={date} alt="" className="img-date"/>
                    <span className="text-date">20/02/2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapContent> 
  )
}

export default ContentQuizPage
