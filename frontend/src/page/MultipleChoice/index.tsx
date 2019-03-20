// import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarSmall } from '../../components'
import React, { Component } from 'react'
import Content from './content'

class TestMultipleChoicePage extends Component<any, any> {
  render() {
    return <SmallLayout sidebar={<SideBarSmall />} content={<Content />} />
  }
}

export default TestMultipleChoicePage
