import React from 'react'
import { SimpleLayout } from '../../layout'
import styled from 'styled-components'
import IconClose from '../../images/icon/closemodal.png'
import { Link } from 'react-router-dom';

const WrapContent = styled.div`
  .modal-content {
    border-radius: 25px;
    .modal-header {
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      background-color: #F100A8;
      .modal-title {
        font-size: 20px;
        font-weight: bold;
        color: #FFFFFF;
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
            color: #7F7F7F;
            font-size: 15px;
            padding-top: 5px;
          }
          .col-9 {
            .input-custom {
              width: 100%;
              border-radius: 30px;
              border-width: 0.5px;
              padding: 5px 20px;
            }
          }
        }
        .wrap-forgot {
          float: right;
          color: #2BD900;
          font-size: 12px;
        }
        .my-btn {
          width: 100%;
          border-radius: 50px;
          background-color: #F100A8; 
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
      }
    }
  }
`

function ContentLogin() {
  return(
    <WrapContent>
      <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Log in</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <img src={IconClose} alt="close" className="custom-close"/>
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
                  <div className="col-3 wrap-label">Password</div>
                  <div className="col-9">
                    <input type="password" className="input-custom" />
                  </div>      
                </div>
                <Link to="#" className="wrap-forgot">Forgot password?</Link>
                <button className="my-btn">Log in</button>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </WrapContent>
  )
}

function LoginPage() {
  return(
    <SimpleLayout content={ <ContentLogin /> } />
  )
}

export default LoginPage
  