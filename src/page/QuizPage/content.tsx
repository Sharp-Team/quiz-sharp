import React from 'react'
import styled from 'styled-components'
import {
  IconShare,
  IconEditPink,
  IconInformation,
  IconFolder,
  IconMore,
  Avatar
} from '../../images'

const WrapContent = styled.div`
  .wrap-box {
    box-shadow: 0 2px 15px grey;
    border-radius: 5px;
    padding: 30px 50px;
    margin: 20px 0;
    .title {
        margin-bottom: 20px;
    }
    .list-icon {
      .image-icon {
          width: 18px;
          margin-right: 10px;
      }
    }
  }

  .content {
    background-color: pink;
    color: white;
    text-align: center;
  }
`

function Content() {
  return(
    <WrapContent>
      <div className="wrap-box">
        <div className="wrap-header">
          <p className="term">7 terms</p>
          <img src={Avatar} alt="avatar"/>
          <p className="username">Thaycacac</p>
        </div>
        <h3 className="title">Computer and the internet</h3>
        <div className="list-icon">
          <img
            className="image-icon"
            src={IconFolder}
            alt="icon folder"
          />
          <img
            className="image-icon"
            src={IconShare}
            alt="icon share"
          />
          <img
            className="image-icon"
            src={IconEditPink}
            alt="icon edit"
          />
          <img
            className="image-icon"
            src={IconInformation}
            alt="icon infor"
          />
          <img
            className="image-icon"
            src={IconMore}
            alt="icon more"
          />
        </div>
      </div>
      <p className="content">
        Nhật
      </p>
    </WrapContent>
  )
}

export default Content
  