import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { Logo }from '../../images'
import { Link } from 'react-router-dom'
import * as UserActions from '../../actions'
import Login from './login'
import Register from './register'
import UnLogin from './unlogin'
import Logined from './logined'

const WrapNav = styled.div`
  .bg-light {
    background-color: #f100a8 !important;
  }

  .navbar {
    padding: 1.1rem 8rem;
    .navbar-brand {
      color: #fff;
      margin-left: 1rem;
      font-weight: bold;
      margin-right: 3rem;
      font-size: 1.6rem;
    }
    .title-logo {
      margin-bottom: 0;
      margin-left: 20px;
      line-height: 49px;
    }
  }

  .form-group {
    margin-bottom: 0rem;
  }

  .has-search {
    .form-control {
      padding-left: 2.375rem;
      padding-top: 4px;
      padding-bottom: 4px;
    }
    .form-control-feedback {
      position: absolute;
      z-index: 2;
      display: block;
      width: 2rem;
      height: 2.375rem;
      line-height: 2.1rem;
      text-align: center;
      pointer-events: none;
      color: #aaa;
    }
  }

  .form-control {
    padding: 0.1rem 0.75rem;
    border: 0.25px solid #ced4da;
    border-radius: 3.25rem;
  }

  .navi-active {
    width: 20rem;
  }
`

class Navigaion extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <WrapNav>
        <Login addUser={this.props.actions.addUser}/>
        <Register />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand my-title d-flex" to="/">
            <img src={Logo} alt="logo" />
            <p className="title-logo">QuizSharp {this.props.user}</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active navi-active">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input type="search" className="form-control" />
                </div>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {
                this.props.user === null && 
                <UnLogin />
              }
              {
                this.props.user !== null && 
                <Logined username={this.props.user}/>
              }
            </div>
          </div>
        </nav>
      </WrapNav>
    )
  }
}

function mapStateToProps(state: any) {
  const user = state.user
  return { user }
}
function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigaion)
