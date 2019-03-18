import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { 
  IconGlobal,
  IconProfile,
  IconSetting,
  IconInformation
} from '../../images'

const WrapContent = styled.div`
  .box {
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 15px grey;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 3rem;

    .link-nav {
      text-decoration: none;
    }

    .box-content {
      height: 37px;
      justify-content: center;
      text-align: center;
      margin-bottom: 3px;
      padding-right: 10px;
      color: #525252;
      .text-nav {
        margin-left: 25px;
        line-height: 37px;
        text-decoration: none;
        &:hover {
          text-decoration: none;
        }
      }
      &:hover {
        box-shadow: 0 2px 15px grey;
        border-radius: 5px;
      }
    }
  }
`

function SideBar() {
  return (
    <WrapContent>
      <div className="box">
        <Link to="/list-quiz" className="link-nav">
          <div className="box-content">
            <img
              className="image-nav"
              src={IconGlobal}
            />
            <span className="text-nav">My Quiz</span>
          </div>
        </Link>
        <Link to="/list-quiz" className="link-nav">
          <div className="box-content">
            <img
              className="image-nav"
              src={IconProfile}
            />
            <span className="text-nav">Discover</span>
          </div>
        </Link>
        <Link to="#" className="link-nav">
          <div className="box-content">
            <img
              className="image-nav"
              src={IconSetting}
            />
            <span className="text-nav">Settings</span>
          </div>
        </Link>
        <Link to="/home-page" className="link-nav">
          <div className="box-content">
            <img
              className="image-nav"
              src={IconInformation}
            />
            <span className="text-nav">Support</span>
          </div>
        </Link>
      </div>
    </WrapContent>
  )
}

export default SideBar
