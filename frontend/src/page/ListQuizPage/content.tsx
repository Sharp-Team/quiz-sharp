import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconShare from '../../images/icon/share.png'
import IconPlus from '../../images/icon/plus.png'
import IconEdit from '../../images/icon/edit.png'
import IconShare2 from '../../images/icon/share2.png'
import IconDelete from '../../images/icon/delete.png'
import { IconBookMark as bookmark, IconTime as date } from '../../images'

const WrapContent = styled.div`
  .wrap-box {
    box-shadow: 0 2px 15px grey;
    border-radius: 5px;
    padding: 30px 50px;
    margin: 20px 0;
    .title {
      margin-bottom: 10px;
    }
    .list-icon {
      .image-icon {
        width: 18px;
        margin-right: 8px;
      }
    }
  }

  .content {
    background-color: pink;
    color: white;
    text-align: center;
  }

  .wrap-list-quiz {
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

          .wrap-terms {
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
            left: 20%;
            bottom: 15%;
            .img-date {
              width: 13px;
            }
            .text-date {
              padding-left: 5px;
              font-size: 0.9rem;
              color: #9a9a9a;
            }
          }
          .wrap-icon {
            position: absolute;
            right: 2%;
            top: 40%;
            .my-icon {
              margin-right: 30px;
              z-index: 1000;
              cursor: initial;
            }
          }
        }
      }
    }
  }
`
var cards = [
  {
    id: 0,
    title: 'Computer and the internet',
    bookmark: '50',
    date: '20/02/2019',
  },
  { id: 1, title: 'JPD311 ', bookmark: '30', date: '20/02/2018' },
  { id: 2, title: 'PRN292', bookmark: '40', date: '21/02/2019' },
  { id: 3, title: 'English', bookmark: '30', date: '22/02/2019' },
]

function Content({ title }: any) {
  function deleteQuiz(idCurrent: string) {
    cards = cards.filter(item => item.id.toString() !== idCurrent)
  }
  return (
    <WrapContent>
      <div className="wrap-box">
        <h3 className="title">{title}</h3>
        <div className="list-icon">
          <Link to="#">
            <img className="image-icon" src={IconShare} alt="icon share" />
          </Link>
          <Link to="#">
            <img className="image-icon" src={IconPlus} alt="icon share" />
          </Link>
        </div>
      </div>
      <div className="wrap-list-quiz">
        <div className="container-fluid">
          <div className="row">
            {cards.map(card => (
              <Link
                to={`/${card.id}`}
                className="col-12 content-right"
                key={card.id}
              >
                <div className="my-card">
                  <div>
                    <h4 className="title-card">{card.title}</h4>
                  </div>
                  <div className="info-card">
                    <div className="wrap-terms">
                      <img
                        src={bookmark}
                        alt="icon bookmark"
                        className="img-bookmark"
                      />
                      <span className="text-count">{card.bookmark} terms</span>
                    </div>
                    <div className="wrap-date">
                      <img src={date} alt="icon date" className="img-date" />
                      <span className="text-date">{card.date}</span>
                    </div>
                    <Link to="#">
                      <div className="wrap-icon">
                        <img
                          src={IconEdit}
                          alt="icon edit"
                          className="my-icon"
                        />
                        <img
                          src={IconShare2}
                          alt="icon share"
                          className="my-icon"
                        />
                        <img
                          src={IconDelete}
                          alt="icon delete"
                          className="my-icon"
                          onClick={() => deleteQuiz(`${card.id}`)}
                        />
                      </div>
                    </Link>
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

export default Content
