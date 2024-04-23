import React from 'react';
import './Layout.css';
import Button from '../components/Button';
import Cards from '../components/Cards';

function Layout() {
  return (
    <div className='layout'>
      <div className='sidebar'>
        <Button />
      </div>
      <div className='page'>
        <Cards />
      </div>
    </div>
  );
}

export default Layout;
