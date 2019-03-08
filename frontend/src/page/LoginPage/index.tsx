import React from 'react'
import { SimpleLayout } from '../../layout'
import styled from 'styled-components'

const WrapContent = styled.div`
  .content {
    background-color: pink;
    color: white;
    text-align: center;
  }
`

function ContentLogin() {
  return(
    <WrapContent>
      <p className="content">
        Hiệp
      </p>
    </WrapContent>
  )
}

function LoginPage() {
  return(
    <SimpleLayout content={ <ContentLogin /> } />
  )
}

export default LoginPage
  