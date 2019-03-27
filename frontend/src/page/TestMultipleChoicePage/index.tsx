// import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarSmall } from '../../components'
import React, { Component } from 'react'
import ContentMultipleChoice from './content'
import queryString from 'query-string'

class TestMultipleChoicePage extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      idQuiz: 0
    }
  }

  componentDidMount() {
    const idQuiz = queryString.parse(this.props.location.search).id
    console.log(idQuiz)
    this.setState({
      idQuiz: idQuiz
    })
  }

  render() {
    return (
      <SmallLayout
        sidebar={<SideBarSmall />}
        content={<ContentMultipleChoice idQuiz={this.state.idQuiz} />}
      />
    )
  }
}

export default TestMultipleChoicePage
