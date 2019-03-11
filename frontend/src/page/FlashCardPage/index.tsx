import React from 'react'
import { Navigation } from '../../components'
import Content from './content'
import SideBar from './sidebar'

function FlashCardPage() {
  const listQuiz = [
    { id: 1, term: "hello", definition: "xin chao"  },
    { id: 2, term: "goodby", definition: "tam biet" },
    { id: 3, term: "sorry", definition: "xin loi" }
  ]
  
  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"><SideBar /></div>
          <div className="col-10"><Content /></div>
        </div>
      </div>
    </div>
  )
}

export default FlashCardPage
