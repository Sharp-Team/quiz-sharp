import React from 'react'
import { SimpleLayout } from '../../layout'
import styled from 'styled-components'
import defaultAvatar from '../../images/user.png'
import gg from '../../images/google-plus.png'
import fb from '../../images/twitter.png'
import tt from '../../images/facebook.png'

const WrapContent = styled.div`
  .modal-content {
    border-radius: 25px;
    .modal-header {
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      background-color: #f100a8;
      .modal-title {
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        left: 5%;
      }
    }
    .modal-body {
      width: 100%;
      margin: 0px auto;
      .wrap-info {
        margin-top: 20px;
        margin-bottom: 20px;
          .wrap-label {
            text-align: center;
            color: #505050;
            font-size: 20px;
            height: 34px;
            line-height: 34px;
          }
          .col-9 {
             margin: 0px auto;
             text-align: center;
          }
          #imgAvatar {
              width: 150px;
              height: 150px;
          }

          #username {
            font-weight: bold;
          }

          #totalStar {
            color: orange;
          }
          #totalQuiz {
            color: blue;
          }
          .imgLogo {
            width: 36px;
            height: 36px;
            margin-right: 5px;
          }
      }
    }
  }
`

function ContentProfile() {
  return (
    <WrapContent>
      <div>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">User profile</h4>
            </div>
            <div className="modal-body">
              <div className="container wrap-info">
                <div className="row">
                  <div className="col-9">
                       <img src={defaultAvatar} id="imgAvatar"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-9 wrap-label">
                    <span id="username">@trangnguyen1006</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-9 wrap-label">
                  <span id="bod">30/02/1998</span>
                  </div>
                </div>


                <div className="row">
                  <div className="col-9 wrap-label">
                  <label>Votes: <span id="totalStar">1998 votes</span></label>
                  </div>
                </div>


                <div className="row">
                  <div className="col-9 wrap-label">
                  <label>Quizes: <span id="totalQuiz">20 quizes</span></label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-9 wrap-label">
                  <span id="email">trangnt1006@gmail.com</span>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-9">
                  <img src={fb} className="imgLogo"/>
                  <img src={tt} className="imgLogo"/>
                  <img src={gg} className="imgLogo"/>
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

function ProfilePage() {
  return <SimpleLayout content={<ContentProfile />} />
}

export default ProfilePage
