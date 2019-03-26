import React from 'react'
import { SmallLayout } from '../../layout'
import { SideBarSmall } from '..'
import Content from './content'

function HomePageGuest({ page }: any) {
  return <SmallLayout sidebar={<SideBarSmall />} content={<Content page={page} />} />
}

export default HomePageGuest
