import React, { Component } from 'react'
import styled from 'styled-components'

const WrapUnLogin = styled.div`
  .btn-login {
    font-weight: bold;
    background: transparent;
    color: #f5f5f5;
    font-size: 20px;
    padding: 0.1rem 2rem;
  }

  .btn-signup {
    font-weight: bold;
    border-radius: 3.25rem;
    padding: 0.1rem 2rem;
    color: #f100a8;
    background: white;
    font-size: 20px;
    margin-left: 0.5rem;
    box-shadow: 0 5px 17px #0000009e;
  }
`

function UnLogin() {
  return(
    <WrapUnLogin>
      <button
        className="btn btn-login my-2 my-sm-0 btn-login"
        type="submit"
        data-toggle="modal"
        data-target="#loginModal"
      >
        Log In
      </button>
      <button
        className="btn btn-signin my-2 my-sm-0 btn-signup"
        type="submit"
        data-toggle="modal"
        data-target="#signupModal"
      >
        Sign Up
      </button>
    </WrapUnLogin>
  )
}

export default UnLogin
