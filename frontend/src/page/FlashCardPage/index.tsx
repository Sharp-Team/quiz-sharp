import React from 'react'
import { Navigation } from '../../components'
import Content from './content'
import SideBar from './sidebar'


class FlashCardPage extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      quizCurrent: 0,
      listQuiz: [
        { id: 1, term: "hello", definition: "xin chao"  },
        { id: 2, term: "goodby", definition: "tam biet" },
        { id: 3, term: "sorry", definition: "xin loi" },
        { id: 4, term: "cong hoa xa hoi chu nghia viet nam", definition: "doc lap tu do hanh phuc" }
      ]
    }
  }

  changeQuizCurrent = (quizId: number) => {
    this.setState ({
      quizCurrent: quizId
    })
  }
  
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2"><SideBar
              listQuiz={this.state.listQuiz}
              quizCurrent={this.state.quizCurrent}/></div>
            <div className="col-10">
              <Content
                listQuiz={this.state.listQuiz}
                changeQuizCurrent={this.changeQuizCurrent}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlashCardPage
