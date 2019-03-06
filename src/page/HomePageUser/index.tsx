import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarFull } from '../../components'
import Content from './content'


function HomePageUser() {
  return(
    <SmallLayout
      sidebar={<SideBarFull />}
      content={<Content />}
    />
  )
}

export default HomePageUser
