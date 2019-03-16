import React, { Component } from 'react'
import styled from 'styled-components'
import social from '../../images/social.png'

const WrapContent = styled.div`
  .wrap-content {
    padding-left: 8rem;
    padding-right: 8rem;
    .content-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .group-member {
        color: #f100a8;
      }
    }
    .image-content {
      max-width: 100%;
    }
    .title-content {
      color: #f100a8;
    }
  }
`

function ContentHomePage() {
  return (
    <WrapContent>
      <div className="wrap-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 content-left">
              <h1 className="title-content">QuizSharp</h1>
              <p>
              Nowadays, we have a lot of website to learn quiz online, but lack of desktop app to learn quiz offline and online. Then my team decided to create a desktop app to service it ! 
              </p>
              <h5 className="group-member">Group member</h5>
              <ul>
                <li>Pham Ngoc Hoa</li>
                <li>Tran Quang Nhat</li>
                <li>Do Quang Hiep</li>
                <li>Nguyen Huy Hoang</li>
                <li>Nguyen Thi Trang</li>
              </ul>
            </div>
            <div className="col-6 content-right">
              <img src={social} alt="" className="image-content" />
            </div>
          </div>
        </div>
      </div>
    </WrapContent>
  )
}

export default ContentHomePage
