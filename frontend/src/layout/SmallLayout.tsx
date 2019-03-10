import React from 'react'
import { Navigation } from '../components'

function SmallLayout({ sidebar, content }: any) {
  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">{sidebar}</div>
          <div className="col-11">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default SmallLayout
