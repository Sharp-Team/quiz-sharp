import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUser } from '../../actions'
import { withRouter } from 'react-router-dom'

const WrapLogined = styled.div`
  .wrap-avatar {
    .img-avatar {
      height: 40px;
      width: 40px;
      position: absolute;
      border-radius: 50%;
      margin-top: -5px;
      margin-left: -40px;
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
    font-size: 16px;
    border: none;
    border: 0px;
    cursor: pointer;
    width: 150px;
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

class Logined extends React.Component<any, any> {

  addUser = () => {
    this.props.addUser({
      username: null
    })
    this.props.history.push("/");
  }

  render() {
    return(
      <WrapLogined>
        <div className="wrap-avatar">
          <div className="dropdown">
            <button
              className="dropbtn"
              type="button"
              data-toggle="dropdown">
              <img
                src="https://avatars.servers.getgo.com/2205256774854474505_medium.jpg"
                className="img-avatar" />
              <span className="username">
                { this.props.username }
              <span className="fa fa-caret-down"></span></span>
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton">
              <Link
                className="dropdown-item"
                id="dropdown-items"
                to="/profile">My Profile</Link>
              <a
                className="dropdown-item"
                id="dropdown-items"
                onClick={() => this.addUser()}>Log out</a>
            </div>
          </div>
        </div>
      </WrapLogined>
    )
  }
}

export default  connect(null, {addUser})(withRouter(Logined))
