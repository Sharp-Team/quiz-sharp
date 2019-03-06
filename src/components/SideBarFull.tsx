import React from 'react'
import styled from 'styled-components'

const WrapContent = styled.div`
  .content {
    background-color: pink;
    color: white;
    text-align: center;
  }
`

function SideBar() {
  return(
    <WrapContent>
      <p className="content">
        Hoàng
      </p>
    </WrapContent>
  )
}

export default SideBar
