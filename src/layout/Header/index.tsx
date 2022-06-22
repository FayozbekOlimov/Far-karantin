import React from 'react'
import HeaderBody from './HeaderBody';
import HeaderMenu from './HeaderMenu';
import HeaderTop from './HeaderTop';

import "./style.scss";

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBody />
      <HeaderMenu />
    </header>
  )
}

export default Header