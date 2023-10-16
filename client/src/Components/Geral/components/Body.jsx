import React from 'react';
import './body.css';
import Top from '../../Dashboard/Components/Body Section/Top Section/Top'
import Geral from './Geral/Geral';

function Body() {
  return (
    <div className='mainContent'>
        <Top />

        <div className="bottom flex">
          <Geral />
        </div>
       </div>
  )
}

export default Body