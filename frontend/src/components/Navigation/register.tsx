import React from 'react'
import styled from 'styled-components'
import { IconClose } from '../../images'
import { UserBridge } from '../../bridges/bridges'
import BridgeManager from '../../bridges/bridge-manage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        .wrap-image-avatar {
          width: 100%;
          text-align: center;
          margin-top: 0;
          .image-avatar {
            width: 150px;
            height: 150px;
            border-radius: 75px;
          }
        }
        .message {
          width: 100%;
          color: red;
        }
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

class ContentRegister extends React.Component<any, any> {
  // @ts-ignore
  _userBridge: UserBridge

  constructor(props: any) {
    super(props)
    this.state = {
      username: '',
      password: '',
      avatar: '',
      email: '',
      dob : '',
      message: ''
    }
  }

  async componentDidMount() {
    this._userBridge = await BridgeManager.getBridge<UserBridge>('userBridge')
  }

  changeUser = (event: any) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  register = () => {
    const register: any = this._userBridge.register(
      this.state.username,
      this.state.password,
      this.state.avatar,
      this.state.email,
      new Date(this.state.dob)
    )
    register.then((result: string) => {
      // check register sucessful to notify
      if(result === 'Register successful') {
        toast.success('Register sucessful!!!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          })
        this.setState({
          username: '',
          password: '',
          avatar: '',
          email: '',
          dob: '',
          message: ''
        })
        // else then show message error
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
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
                  <p className="message">{ this.state.message }</p>
                  {
                    this.state.avatar !== '' &&
                    <div className="wrap-image-avatar">
                      <img 
                        className="image-avatar"
                        src={this.state.avatar} />
                    </div>
                  }
                  <div className="row wrap-input">
                    <div className="col-3 wrap-label">User name</div>
                    <div className="col-9">
                      <input
                        type="text"
                        className="input-custom"
                        name="username"
                        onChange={ (event) => this.changeUser(event) }
                      />
                    </div>
                  </div>

                  <div className="row wrap-input">
                    <div className="col-3 wrap-label">Email</div>
                    <div className="col-9">
                      <input
                        type="text"
                        className="input-custom"
                        name="email"
                        onChange={ (event) => this.changeUser(event) }
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
                        onChange={ (event) => this.changeUser(event) }
                      />
                    </div>
                  </div>

                  <div className="row wrap-input">
                    <div className="col-3 wrap-label">Avatar Url</div>
                    <div className="col-9">
                      <input
                        type="text"
                        className="input-custom"
                        name="avatar"
                        onChange={ (event) => this.changeUser(event) }
                      />
                    </div>
                  </div>

                  <div className="row wrap-input">
                    <div className="col-3 wrap-label">Birthday</div>
                    <div className="col-9">
                      <input
                        type="date"
                        name="dob"
                        className="input-custom"
                        onChange={ (event) => this.changeUser(event) }
                      />
                    </div>
                  </div>
                  <button
                    className="my-btn"
                    id="btnSignUp"
                    onClick={ () => this.register() }>Sign up</button>
                  <button
                    className="my-btn login"
                    id="btnLogin"
                    data-dismiss="modal"
                    aria-label="Close"
                    data-toggle="modal"
                    data-target="#loginModal">
                    Already have an account? Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapContent>
    )
  }
}

export default ContentRegister
