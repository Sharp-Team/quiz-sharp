import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'

const WrapNav = styled.div`
    .bg-light {
      background-color: #f100a8 !important;
    }

    .navbar {
      padding: 1.5rem 8rem;
      .navbar-brand {
        color: #fff;
        margin-left: 1rem;
      }
    }

    .form-group {
      margin-bottom: 0rem;
    }

    .has-search {
      .form-control {
        padding-left: 2.375rem;
        padding-bottom: 8px;
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
      width: 30rem;
    }

    .btn-login {
      background: transparent;
      color: #f5f5f5;
      font-size: 25px;
      padding: 0.1rem 2rem;
    }

    .btn-signup {
      border-radius: 3.25rem;
      padding: 0.1rem 2rem;
      color: #f100a8;
      font-size: 20px;
      margin-left: 0.5rem;
    }
  `

class Navigaion extends Component {
  render() {
    return(
      <WrapNav >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={logo} alt="logo" />
          <a className="navbar-brand my-title" href="#">QuizSharp</a>
          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active navi-active">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback"></span>
                  <input type="search" className="form-control" />
                </div>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <button className="btn btn-login my-2 my-sm-0 btn-login" type="submit">
                Log In
              </button>
              <button className="btn btn-signin my-2 my-sm-0 btn-signup" type="submit">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
      </WrapNav>
    )
  }
}

export default Navigaion
