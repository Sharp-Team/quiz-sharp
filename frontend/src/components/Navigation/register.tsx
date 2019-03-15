import React from 'react'
import { SimpleLayout } from '../../layout'
import styled from 'styled-components'
import { IconClose, IconDown } from '../../images'

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
      .close {
        .custom-close {
          width: 20px;
        }
      }
    }
    .modal-body {
      .wrap-form {
        margin-top: 40px;
        margin-bottom: 40px;
        .wrap-input {
          margin-top: 20px;
          .wrap-label {
            color: #505050;
            font-size: 16px;
            height: 34px;
            line-height: 34px;
          }
          .col-9 {
            .input-custom {
              width: 100%;
              border-radius: 30px;
              box-shadow: 0 2px 6px grey;
              padding: 5px 20px;
              border: 0;
            }
          }
        }
        .wrap-forgot {
          float: right;
          color: #2bd900;
          font-size: 12px;
          margin-top: 5px;
        }
        .my-btn {
          width: 100%;
          border-radius: 50px;
          background-color: #f100a8;
          border: none;
          color: white;
          padding-top: 10px;
          padding-bottom: 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          font-weight: bold;
          margin-top: 30px;
          cursor: pointer;
        }

        .login {
          width: 100%;
          border-radius: 50px;
          background-color: white;
          border: 1px solid #f100a8;
          color: #f100a8;
          padding-top: 10px;
          padding-bottom: 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          font-weight: bold;
          margin-top: 30px;
          cursor: pointer;
        }

        .input-special {
            width: 50px;
            border-bottom: 1px solid #505050;
            border-top: none;
            border-left: none;
            border-right: none;
        }

        .showMore {
          width: 16px;
          height: 16px;
        }

      }
    }
  }
`

function ContentRegister() {
  return (
    <WrapContent>
      <div
        className="modal fade"
        id="signupModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Sign up</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <img src={IconClose} alt="close" className="custom-close" />
              </button>
            </div>
            <div className="modal-body">
              <div className="container wrap-form">
                <div className="row wrap-input">
                  <div className="col-3 wrap-label">User name</div>
                  <div className="col-9">
                    <input type="text" className="input-custom" />
                  </div>
                </div>

                <div className="row wrap-input">
                  <div className="col-3 wrap-label">Email</div>
                  <div className="col-9">
                    <input type="text" className="input-custom" />
                  </div>
                </div>

                <div className="row wrap-input">
                  <div className="col-3 wrap-label">Password</div>
                  <div className="col-9">
                    <input type="password" className="input-custom" />
                  </div>
                </div>

                <div className="row wrap-input">
                  <div className="col-3 wrap-label">Birthday</div>
                  <div className="col-9">
                    <input type="text" className="input-special" />
                    <img className="showMore" src={IconDown} />
                    <input type="text" className="input-special" />
                    <img className="showMore" src={IconDown} />
                    <input type="text" className="input-special" />
                    <img className="showMore" src={IconDown} />
                  </div>
                </div>
                <button className="my-btn" id="btnSignUp">Sign up</button>
                <button
                  className="my-btn login" id="btnLogin">
                  Already have an account? Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WrapContent>
  )
}

export default ContentRegister
