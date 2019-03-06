import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconShare from '../../images/icon/share.png'
import IconPlus from '../../images/icon/plus.png'

const WrapContent = styled.div`
  .wrap-box {
    box-shadow: 0 2px 15px grey;
    border-radius: 5px;
    padding: 30px 50px;
    margin: 20px 0;
    .title {
        margin-bottom: 10px;
    }
    .list-icon {
        .image-icon {
            width: 18px;
            margin-right: 8px;
        }
    }
  }

  .content {
    background-color: pink;
    color: white;
    text-align: center;
  }
`

function Content({ title }: any) {
  return(
    <WrapContent>
      <div className="wrap-box">
        <h4 className="title">{ title }</h4>
        <div className="list-icon">
            <Link to="#">
                <img
                    className="image-icon"
                    src={IconShare}
                    alt="icon share"/>
            </Link>
            <Link to="#">
                <img
                    className="image-icon"
                    src={IconPlus}
                    alt="icon share"/>
            </Link>
        </div>
      </div>
      <p className="content">
        Hiệp
      </p>
    </WrapContent>
  )
}

export default Content
  