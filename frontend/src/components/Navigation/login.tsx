import React from 'react'
import styled from 'styled-components'
import { IconClose } from '../../images'
import { Link } from 'react-router-dom'
import { addUser } from '../../actions'
import { connect } from 'react-redux'
import { UserBridge } from '../../bridges/bridges'
import BridgeManager from '../../bridges/bridge-manage'

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
      .message {
        width: 100%;
        text-align: center;
        color: red;
      }
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
      }
    }
  }
`

class ContentLogin extends React.Component<any, any> {

  // @ts-ignore
  _userBridge: UserBridge

  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: ''
    }
  }

  changeUser = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  async componentDidMount() {
    this._userBridge = await BridgeManager.getBridge<UserBridge>('userBridge')
  }

  addUser = () => {
    const username: any = this._userBridge.signin(this.state.username, this.state.password);
    username.then((result: string) => {
      if(result === 'Login successfull') {
        this.props.addUser({
          username: this.state.username
        })
      } else {
        this.setState({
          message: result
        })
      }
    })
  }

  render() {
    return (
      <WrapContent>
        <div
          className="modal fade"
          id="loginModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-backdrop="false"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Log in</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={IconClose} alt="close" className="custom-close" />
                </button>
              </div>
              <div className="modal-body">
                <p className="message">{this.state.message}</p>
                <div className="container wrap-form">
                  <div className="row wrap-input">
                    <div className="col-3 wrap-label">User name</div>
                    <div className="col-9">
                      <input
                        type="text"
                        className="input-custom"
                        name="username"
                        onChange={(event) => this.changeUser(event)}
                      />
                    </div>
                  </div>
                  <div className="row wrap-input">
                    <div className="col-3 wrap-label">Password</div>
                    <div className="col-9">
                      <input
                        type="password"
                        className="input-custom"
                        name="password"
                        onChange={(event) => this.changeUser(event)}
                      />
                    </div>
                  </div>
                  <Link to="#" className="wrap-forgot">
                    Forgot password?
                  </Link>
                  <button
                    className="my-btn"
                    onClick={() => this.addUser()}
                  >Log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapContent>
    )
  }
}

export default connect(null, {addUser})(ContentLogin)
