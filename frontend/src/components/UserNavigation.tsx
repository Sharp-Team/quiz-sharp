import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

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
      margin-left: 10px;
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

  .wrap-avatar {
    .img-avatar {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
    .username {
      color: white;
      font-size: 0.9rem;
      font-weight: bold;
      padding-left: 10px;
    }
  }
  .dropbtn {
    background-color: #f100a8;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    border: 0px;
    cursor: pointer;
  }
  
  .dropbtn:hover, .dropbtn:focus {
    outline: none;
  }

  #dropdown-items {
    color: grey;
  }
  #dropdown-items:hover {
    background-color: #f100a8;
    color: white;
  }
`

class Navigaion extends Component {
  render() {
    return (
      <WrapNav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand my-title d-flex" to="/">
            <img src={logo} alt="logo" />
            <p className="title-logo">QuizSharp</p>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active navi-active">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input type="search" className="form-control" />
                </div>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <div className="wrap-avatar">
                <div className="dropdown">
                  <button className="dropbtn" type="button" data-toggle="dropdown">
                    <img src={require(`../images/avatar.png`)} className="img-avatar" />
                    <span className="username">Username <span className="fa fa-caret-down"></span></span>

                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" id="dropdown-items" href="#">My Profile</a>
                    <a className="dropdown-item" id="dropdown-items" href="#">Log out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </WrapNav>
    )
  }
}

export default Navigaion
