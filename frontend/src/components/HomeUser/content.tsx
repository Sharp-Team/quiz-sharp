import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconBookMark as bookmark, IconTime as date } from '../../images'

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

const cards = [
  {
    id: 1,
    title: 'Computer and the internet',
    img: 'flame.jpg',
    username: 'Flame',
    bookmark: '50',
    date: '20/02/2019',
  },
  {
    id: 2,
    title: 'Computer ',
    img: 'flame.jpg',
    username: 'Bacodekiller',
    bookmark: '30',
    date: '20/02/2018',
  },
  {
    id: 3,
    title: 'PRN292',
    img: 'flame.jpg',
    username: 'Bacode',
    bookmark: '40',
    date: '21/02/2019',
  },
  {
    id: 4,
    title: 'Computer and the internet',
    img: 'flame.jpg',
    username: 'Flame',
    bookmark: '30',
    date: '22/02/2019',
  },
]

function ContentQuizPage() {
  return (
    <WrapContent>
      <div className="wrap-all">
        <div className="container-fluid">
          <div className="row">
            {cards.map(card => (
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
                        src={require(`../../images/${card.img}`)}
                        alt="image card"
                        className="img-avatar"
                      />
                      <span className="username">{card.username}</span>
                    </div>
                    <div className="wrap-terms">
                      <img
                        src={bookmark}
                        alt="icon bookmark"
                        className="img-bookmark"
                      />
                      <span className="text-count">{card.bookmark}</span>
                    </div>
                    <div className="wrap-date">
                      <img src={date} alt="icon date" className="img-date" />
                      <span className="text-date">{card.date}</span>
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

export default ContentQuizPage
