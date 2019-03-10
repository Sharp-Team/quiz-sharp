import React from 'react'
import { Navigation } from '../components'

function SimpleLayout({ content }: any) {
  return (
    <div>
      <Navigation />
      <div className="container-fluid">{content}</div>
    </div>
  )
}

export default SimpleLayout
