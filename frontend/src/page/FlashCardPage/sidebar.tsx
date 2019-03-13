import React from 'react'
import { Circle } from 'rc-progress'
import styled from 'styled-components'

const WrapperSideBar = styled.div`
    margin-top: 3rem;
    .progress {
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        color: #636363;
        height: 30px;
        justify-content: center;
    }
`

function SideBar({ listQuiz, quizCurrent }: any) {
    let percent = quizCurrent / listQuiz.length * 100;
    return(
        <WrapperSideBar >
            <Circle percent={percent} strokeWidth="3" strokeColor="#f100a8" />
            <p className="progress">Progress: {percent}%</p>
        </WrapperSideBar>
    )
}

export default SideBar
