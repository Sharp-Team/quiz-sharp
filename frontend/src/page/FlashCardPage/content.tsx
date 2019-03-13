import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import './styles.css'

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

const flip = (quizId: string): void => {
    const quiz = document.getElementById('flip-' + quizId)
    if (quiz !== null) {
        if(!quiz.classList.contains('flip')) {
            quiz.classList.add('flip')
        } else {
            quiz.classList.remove('flip')
        } 
    }
}

const hander = (event: any): void => { 
    if(event.key === ' ') {
        const quiz = document.getElementsByClassName('slick-active')[0].children[0].children[0].children[0].id.split('-')[1]
        flip(quiz)
    }
}

function Content({ listQuiz, changeQuizCurrent }: any) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
      }
      window.addEventListener('load', function () {
        const quiz = document.getElementsByClassName('slick-active')[0].children[0].children[0].children[0].id.split('-')[1]
        changeQuizCurrent(quiz)

        const slickPrev = document.getElementsByClassName('slick-prev')[0]
        slickPrev.addEventListener('click', function() {changeQuizCurrent(
            parseInt(document.getElementsByClassName('slick-active')[0].children[0].children[0].children[0].id.split('-')[1]) - 1
            ) })

        const slickNext = document.getElementsByClassName('slick-next')[0]
        slickNext.addEventListener('click', function() {changeQuizCurrent(
            parseInt(document.getElementsByClassName('slick-active')[0].children[0].children[0].children[0].id.split('-')[1]) + 1
            ) })
      })

    return(
        <div onKeyPress={hander}>
            <Slider {...settings} className="wrap-slick">
                {listQuiz.map((quiz: any) => (
                    <WrapContent key={quiz.id} className="px-5">
                        <div
                            className="warp-quiz"
                            onClick={(): void => { flip(quiz.id); changeQuizCurrent(quiz.id) }}
                            id={`flip-${quiz.id}`}
                        >
                            <span className="text-front">{ quiz.term }</span>
                            <span className="text-back">{ quiz.definition }</span>
                        </div>
                    </WrapContent>
                ))}
            </Slider>
            </div>
    )
}

export default Content
