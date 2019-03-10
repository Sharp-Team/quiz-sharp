import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarSmall } from '../../components'
import Content from './content'

function HomePageGuest() {
  return <SmallLayout sidebar={<SideBarSmall />} content={<Content />} />
}

export default HomePageGuest
