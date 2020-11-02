// you use setState when you want to update the state of something.
// prevState is and object that is a copy of the state as it is NOW. (that means ANYthing inside the {} in state -see
  // line 11)
/* setState is a function that we use to update the state of our component. It takes 
a function with an argument of prevState (this is by convention). So depending on the property
in state that you want to change, you will select that property by chaining the property name 
to prevState (i.e prevState.counter, etc) */


import React, { Component, useState } from 'react'
import './Navbar.css'

// FUNCTIONAL COMPONENT OF A NAVBAR
const Navbar = () => {
    return (
        <nav className="navbar_wrapper">
            <ul>
                <li>STORIES</li>
                <li>PRODUCTS</li>
                <li>SUPPORT</li>
            </ul>
        </nav>
    )
}

export default Navbar
