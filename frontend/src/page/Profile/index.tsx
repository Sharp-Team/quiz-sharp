import React from 'react'
import { SimpleLayout } from '../../layout'
import styled from 'styled-components'
import { IconGoogle, IconFacebook, IconTwitter } from '../../images'
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
            border-radius: 75px;
          }

          #username {
            font-weight: bold;
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

class ContentProfile extends React.Component<any, any> {
  // @ts-ignore
  _userBridge: UserBridge

  constructor(props: any) {
    super(props)

    this.state = {
      username: '',
      avatar: '',
      dob: '',
      email: ''
    }
  }

  async componentDidMount() {
    this._userBridge = await BridgeManager.getBridge<UserBridge>('userBridge')

    const user: any = this._userBridge.profile(this.props.user)
    user.then((result: string) => {
      let { username, avatar_url, dob, email } : any = result
      this.setState({
        username: username,
        avatar: avatar_url,
        dob: dob.split('T')[0],
        email: email
      })
    })
  }

  render() {
    return (
      <SimpleLayout content= {
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
                          <img src={this.state.avatar} id="imgAvatar"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9 wrap-label">
                        <span id="username">@{ this.state.username }</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-9 wrap-label">
                      <span id="bod">{ this.state.dob }</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-9 wrap-label">
                      <span id="email">{ this.state.email }</span>
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col-9">
                      <img src={IconGoogle} className="imgLogo"/>
                      <img src={IconFacebook} className="imgLogo"/>
                      <img src={IconTwitter} className="imgLogo"/>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </WrapContent>
      } />
    )
  }
}

function mapStateToProps(state: any) {
  const user = state.user
  return { user }
}

export default connect(mapStateToProps)(ContentProfile)
