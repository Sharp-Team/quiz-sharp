import React from 'react'
import styled from 'styled-components'

const WrapContent = styled.div`
    .warp-quiz {
        box-shadow: 0 2px 15px grey;
        margin-top: 3rem;
        border-radius: 10px;
        height: 70vh;
        position: relative;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        cursor: pointer;
        .text-front {
            line-height: 70vh;
            width: 100%;
            font-size: 2.5rem;
            position: absolute;
            backface-visibility: hidden;
            z-index: 2;
            transform-origin: 100% 150px;
            text-align: center;
        }
        .text-back {
            line-height: 70vh;
            width: 100%;
            font-size: 2.5rem;
            position: absolute;
            backface-visibility: hidden;
            z-index: 1;
            transform: rotateX(180deg);
            text-align: center;
        }
    }
    .flip {
        transform: rotateX(180deg);
    }
`

const flip = (): void => {
    const quiz = document.getElementsByClassName('warp-quiz')[0]
    if(!quiz.classList.contains('flip')) {
        quiz.classList.add('flip')
    } else {
        quiz.classList.remove('flip')
    }        
}

function Content() {
    return(
        <WrapContent>
            <div className="container-fluid warp-quiz" onClick={(): void => flip()}>
                <span className="text-front">Cong hoa xa hoi chu nghia Viet Nam</span>
                <span className="text-back">Doc lap tu do hanh phuc</span>
            </div>
            <div className="slider demo">
                <div> Slide  1 </div>
                <div> Slide  2 </div>
                <div> Slide  3 </div>
            </div>

        </WrapContent>
    )
}

export default Content
