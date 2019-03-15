import React from 'react'
import { Navigation } from '../../components'
import { Circle } from 'rc-progress'
import styled from 'styled-components'
const WrapperSideBar = styled.div`
  margin-top: 3rem;
`

const WrapContent = styled.div`
  .warp-quiz {
    box-shadow: 0 2px 15px grey;
    margin-top: 3rem;
    border-radius: 10px;
    height: 70vh;
    cursor: pointer;
    .one-quiz {
      position: absolute;
      line-height: 70vh;
      width: 100%;
      font-size: 2.5rem;
      backface-visibility: hidden;
      text-align: center;
    }
  }
`

class LearnWritePage extends React.Component<any, any> {

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

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <WrapperSideBar >
                <p>sidebar</p>
              </WrapperSideBar>
            </div>
            <div className="col-10">
              {this.state.listQuiz.map((quiz: any, index: number) => (
                <WrapContent key={quiz.id} className="px-5">
                  <div
                    className="warp-quiz"
                    id={`flip-${index}`}
                  >
                    <span className="one-quiz">{ quiz.term }</span>
                  </div>
                </WrapContent>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LearnWritePage
