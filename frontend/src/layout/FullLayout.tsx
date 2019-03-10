import React from 'react'
import { Navigation } from '../components'

function FullLayout({ sidebar, content }: any) {
  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">{sidebar}</div>
          <div className="col-10">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default FullLayout
