import React from 'react';
import { Navigation } from '../components';

function FullLayout({ SideBar, Content }: any) {
  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            {SideBar}
          </div>
          <div className="col-9">
            {Content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullLayout
