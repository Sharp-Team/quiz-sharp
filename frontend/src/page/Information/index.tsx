import React from 'react'
import { SimpleLayout } from '../../layout'
import Content from './content'

function HomePage() {
  return(
    <SimpleLayout content={ <Content /> } />
  )
}

export default HomePage
