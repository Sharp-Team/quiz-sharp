import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  IconBookMark as bookmark,
  IconTime as date
} from '../images'

const WrapContent = styled.div`
  .content {
    padding: 50px;

    .box {
      border: 0px solid;
      background-color: #FFFFFF;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 10px grey;
      border-radius: 5px;
      width: 40px;
      height: auto;

      .box-content {
        padding-top: 6px;
        padding-left: 8px;
        background-color: #FFFFFF;
        border-radius: 5px;
        width: 40px;
        height: 45px;
        color: grey;
      }
    }
  }
`

function SideBar() {
  return (
    <WrapContent>
      <div className="content">
        <div className="col-lg">
          <div className="box">
            <Link to="#">
              <div className="box-content"><img src={require('../images/icon/profile.png')}></img></div>
            </Link>
            <Link to="#">
              <div className="box-content"><img src={require('../images/icon/global.png')}></img></div>
            </Link>
            <Link to="#">
              <div className="box-content"><img src={require('../images/icon/setting.png')}></img></div>
            </Link>
            <Link to="#">
              <div className="box-content"><img src={require('../images/icon/infor.png')}></img></div>
            </Link>
          </div>
        </div>

        <div className="col-lg">
          <div className="box">
            <Link to="#">
              <div className="box-content"><img src={require('../images/icon/setting.png')}></img></div>
            </Link>
            <Link to="#">
              <div className="box-content"><img src={require('../images/icon/infor.png')}></img></div>
            </Link>
          </div>
        </div>
      </div>
    </WrapContent>
  )
}

export default SideBar
