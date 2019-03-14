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

const flip = (indexQuiz: number): void => {
    const quiz = document.getElementById('flip-' + indexQuiz)
    if (quiz !== null) {
        if(!quiz.classList.contains('flip')) {
            quiz.classList.add('flip')
        } else {
            quiz.classList.remove('flip')
        } 
    }
}

const hander = (event: any): void => {
    console.log(event.keyCode                )
    if(event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 40) {
        const quiz = document.getElementsByClassName('slick-active')[0].children[0].children[0].children[0].id.split('-')[1]
        flip(parseInt(quiz))
    } else if (event.keyCode === 37) {
        console.log('left')
    } else if (event.keyCode === 39) {
        console.log('right')
    }
}

function Content({ listQuiz, changeQuizCurrent, quizCurrent }: any) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
      }

      window.addEventListener("keyup", hander)

      window.addEventListener('load', function () {
        changeQuizCurrent(quizCurrent + 1);
        quizCurrent += 1;

        const slickPrev = document.getElementsByClassName('slick-prev')[0]
        slickPrev.addEventListener('click', function() {
            if(quizCurrent > 0) {
                changeQuizCurrent(quizCurrent - 1);
                quizCurrent -= 1;
            }
        })

        const slickNext = document.getElementsByClassName('slick-next')[0]
        slickNext.addEventListener('click', function() {
            if(quizCurrent < listQuiz.length) {
                changeQuizCurrent(quizCurrent + 1);
                quizCurrent += 1;
            }
        })
      })

    return(
        <div>
            <Slider {...settings} className="wrap-slick">
                {listQuiz.map((quiz: any, index: number) => (
                    <WrapContent key={quiz.id} className="px-5">
                        <div
                            className="warp-quiz"
                            onClick={(): void => flip(index)}
                            id={`flip-${index}`}
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
