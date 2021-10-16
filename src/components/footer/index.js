import React from 'react'
import './style.scss'
import profile from '../../dist/images/profile.jpg'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

import { ExternalLink } from 'react-external-link'


function Footer() {
    return (
        <div className="wrappers" id='footer'>
            <div className="profile">
            <h2>Designed By </h2>
            <img src={profile} alt="" />
            <h2>Diwas Dhakal</h2>
            </div>
            
            <div className="links">
                <IconContext.Provider value={{className: 'icons', id :'icons'}}>
                <ExternalLink href="https://facebook.com/diwasdh"> <FaFacebook/> </ExternalLink>
                <ExternalLink href="https://github.com/Diwasdh"> <FaGithub/> </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/diwasdh"> <FaLinkedin/> </ExternalLink>
                <ExternalLink href="https://instagram.com/diwas.dhakal"> <FaInstagram/> </ExternalLink>

                </IconContext.Provider>
            </div>
            <IconContext.Provider value={{className: 'totop'}}>
            <a href="#home"><BsFillArrowUpCircleFill/> </a>
            </IconContext.Provider>
        </div>
    )
}

export default Footer
