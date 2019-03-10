import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarSmall } from '../../components'
import Content from './content'

function ListQuizPage() {
  return (
    <SmallLayout
      sidebar={<SideBarSmall />}
      content={<Content title="List quiz of Thaycacac" />}
    />
  )
}

export default ListQuizPage
