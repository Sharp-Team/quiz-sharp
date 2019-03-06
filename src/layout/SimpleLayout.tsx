import React from 'react';
import { Navigation } from '../components';

function SimpleLayout({ content }: any) {
  return (
    <div>
      <Navigation />
      {content}
    </div>
  )
}

export default SimpleLayout
