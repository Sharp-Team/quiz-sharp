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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                delectus illum officia asperiores nulla sequi est, eum veritatis
                repudiandae optio eaque! Atque minima labore nulla! Hic nobis
                repellendus velit id.
              </p>
            </div>
            <div className="col-6 content-right">
              <img src={social} alt="" className="image-content"/>
            </div>
          </div>
        </div>
      </div>
    </WrapContent>
  )
}

export default ContentHomePage
