import React from 'react'
import { UserNavigation } from '../components'

function FullLayout({ sidebar, content }: any) {
  return (
    <div>
      <UserNavigation />
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
