import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarSmall } from '..'
import Content from './content'

function HomePageGuest() {
  return <SmallLayout sidebar={<SideBarSmall />} content={<Content />} />
}

export default HomePageGuest
