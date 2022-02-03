import React from 'react';
import HeaderFirst from './headers/HeaderFirst';
import HeaderSecond from './headers/HeaderSecond';

const Header = () => {
  return <div className='fixed-top'>

      <HeaderFirst />
      <HeaderSecond />
  </div>;
};

export default Header;
