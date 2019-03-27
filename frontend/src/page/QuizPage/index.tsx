import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarSmall } from '../../components'
import Content from './content'
import queryString from 'query-string'

class ListQuizPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      quiz: 0
    }
  }

  componentDidMount() {
    // get information quiz from paramerter
    const quiz = queryString.parse(this.props.location.search)
    this.setState({
      quiz: quiz
    })
  }

  render() {
    return <SmallLayout
      sidebar={<SideBarSmall />}
      content={<Content quiz={this.state.quiz}/>} />
  }
}

export default ListQuizPage
