import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  IconProfile,
  IconGlobal,
  IconSetting,
  IconInformation,
  IconSettingGray,
  IconEditGray
} from '../images'

const WrapContent = styled.div`
  .content {
    margin-top: 3rem;
    .box {
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 15px grey;
      border-radius: 5px;
      padding: 1rem;

      .box-content {
        border-radius: 5px;
        height: 37px;
        color: grey;
        text-align: center;
        margin-bottom: 3px;
        line-height: 37px;
        &:hover {
          box-shadow: 0 2px 15px grey;
          border-radius: 5px;
        }
      }
    }
  }
`

function SideBar() {
  return (
    <WrapContent>
      <div className="content">
        <div className="box">
          <Link to="#">
            <div className="box-content"><img src={IconProfile}></img></div>
          </Link>
          <Link to="#">
            <div className="box-content"><img src={IconGlobal}></img></div>
          </Link>
          <Link to="#">
            <div className="box-content"><img src={IconSetting}></img></div>
          </Link>
          <Link to="#">
            <div className="box-content"><img src={IconInformation}></img></div>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="box">
          <Link to="#">
            <div className="box-content"><img src={IconEditGray}></img></div>
          </Link>
          <Link to="#">
            <div className="box-content"><img src={IconSettingGray}></img></div>
          </Link>
        </div>
      </div>
    </WrapContent>
  )
}

export default SideBar
