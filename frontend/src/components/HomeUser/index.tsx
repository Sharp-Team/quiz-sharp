import React from 'react'
import { FullLayout } from '../../layout'
import { SideBarFull } from '../../components'
import Content from './content'

function HomePageUser({ page }: any) {
  return <FullLayout
    sidebar={<SideBarFull />} content={<Content page={page} />} />
}

export default HomePageUser
