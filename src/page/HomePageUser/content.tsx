import React from 'react'
import styled from 'styled-components'

const WrapContent = styled.div`
  .content {
    background-color: pink;
    color: white;
    text-align: center;
  }
`

function Content() {
  return(
    <WrapContent>
      <p className="content">
        Hiệp
      </p>
    </WrapContent>
  )
}

export default Content
