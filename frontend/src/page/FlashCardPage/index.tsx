import React from 'react'
import { Navigation } from '../../components'
import { Circle } from 'rc-progress'
import styled from 'styled-components'
import Slider from 'react-slick'
import './styles.css'

const WrapperSideBar = styled.div`
  margin-top: 3rem;
  position: relative;
  height: 100%;
  .circle-progress {
    position: relative;
  }
  .progress {
    text-align: center;
    font-size: 3.2rem;
    font-weight: bold;
    color: #636363;
    background: none;
    height: 197px;
    line-height: 197px;
    margin-top: -210px;
    justify-content: center;
  }
`

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

class FlashCardPage extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      quizCurrent: 1,
      restart: false,
      listQuiz: [
        { id: 1, term: "hello", definition: "xin chao"  },
        { id: 2, term: "goodby", definition: "tam biet" },
        { id: 3, term: "sorry", definition: "xin loi" },
        { id: 4, term: "sad", definition: "buon" },
        { id: 4, term: "cute", definition: "de thuong" }
      ]
    }
  }

  flip = (indexQuiz: number): void => {
    const quiz = document.getElementById('flip-' + indexQuiz)
    if (quiz !== null) {
      if(!quiz.classList.contains('flip')) {
        quiz.classList.add('flip')
      } else {
        quiz.classList.remove('flip')
      } 
    }
  }

  presskey = (event: any) => {
    if(event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault()
      const quiz = document.getElementsByClassName('slick-active')[0].children[0].children[0].children[0].id.split('-')[1]
      this.flip(parseInt(quiz))
    } else if (event.keyCode === 37) {
      if(this.state.quizCurrent > 1) {
        this.setState({
          quizCurrent: this.state.quizCurrent - 1
        })
      }
    } else if (event.keyCode === 39) {
      if(this.state.quizCurrent < this.state.listQuiz.length) {
        this.setState({
          quizCurrent: this.state.quizCurrent + 1
        })
      }
    }
  }

  checkAutoPlay = () => {
    return this.state.autoplay
  }

  componentDidMount() {
    const slickPrev = document.getElementsByClassName('slick-prev')[0]
    slickPrev.addEventListener('click', () => {
      if(this.state.quizCurrent > 1) {
        this.setState({
          quizCurrent: this.state.quizCurrent - 1
        })
      }
    })

  const slickNext = document.getElementsByClassName('slick-next')[0]
    slickNext.addEventListener('click', () => {
      if(this.state.quizCurrent < this.state.listQuiz.length) {
        this.setState({
          quizCurrent: this.state.quizCurrent + 1
        })
      }
    })
  }

  render() {
    let percent = this.state.quizCurrent / this.state.listQuiz.length * 100;
    const settings = {
      dots: false,
      infinite: false,
      speed: 400,
      slidesToShow: 1
    }
    return (
      <div onKeyUp={this.presskey}>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <WrapperSideBar >
                <Circle
                  percent={percent}
                  strokeWidth="3"
                  strokeColor="#f100a8"
                  className="circle-progress"
                />
                <p className="progress">{percent}%</p>
              </WrapperSideBar>
            </div>
            <div className="col-10">
              <Slider {...settings} className="wrap-slick">
                {this.state.listQuiz.map((quiz: any, index: number) => (
                  <WrapContent key={quiz.id} className="px-5">
                    <div
                      className="warp-quiz"
                      onClick={(): void => this.flip(index)}
                      id={`flip-${index}`}
                    >
                      <span className="text-front">{ quiz.term }</span>
                      <span className="text-back">{ quiz.definition }</span>
                    </div>
                  </WrapContent>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlashCardPage
