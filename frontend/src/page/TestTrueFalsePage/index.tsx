import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarSmall } from '../../components'
import Content from './content'
import queryString from 'query-string'

class ListQuizPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      idQuiz: 0
    }
  }

  componentDidMount() {
    const idQuiz = queryString.parse(this.props.location.search).id
    this.setState({
      idQuiz: idQuiz
    })
  }

  render() {
    return <SmallLayout
      sidebar={<SideBarSmall />}
      content={<Content idQuiz={this.state.idQuiz}/>} />
  }
}

export default ListQuizPage
