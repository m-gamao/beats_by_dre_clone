// the beats logo
// I located a transparent logo for this online so that there is no background color on the actual
  // logo.

import React from 'react'
import beats_logo from '../Images/beats_logo.png' 
import './Logo.css'

export const Logo = () => {
    return (
        <div className="beats_logo_wrapper">
            <div className="image">
                <img src={beats_logo} alt="pic"/>
            </div>
        </div>
    )
}
