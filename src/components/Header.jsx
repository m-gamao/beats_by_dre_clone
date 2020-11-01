// type 'rafce' + tab, to generate a functional component.
// (fyi)- to do a class component, type 'rcc' + tab.
// This file calls together all the components of the Header of the home page- the logo, navbar, 
  // and search components and arranges them onto the top of the home page.

import React from 'react'
import { Logo } from './Logo'
import Navbar from './Navbar'
import Search from './Search'
import './Header.css'

const Header = () => {
    return (
        <header>
            <Logo />
            <Navbar />
            <Search />
        </header>
    )
}

export default Header
