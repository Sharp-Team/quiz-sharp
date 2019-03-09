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

function ContentRegister() {
  return(
    <WrapContent>
      <p className="content">
        Trang
      </p>
    </WrapContent>
  )
}

function RegisterPage() {
  return(
    <SimpleLayout content={ <ContentRegister /> } />
  )
}

export default RegisterPage