import React from 'react'
import { FullLayout } from '../../layout'
import { SideBarFull } from '../../components'
import Content from './content'


function HomePageUser() {
  return(
    <FullLayout
      sidebar={<SideBarFull />}
      content={<Content />}
    />
  )
}

export default HomePageUser
