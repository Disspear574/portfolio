import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareDribbble } from "react-icons/fa6";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="linkedin.com" target='_blank'><FaLinkedin/></a>
        <a href="github.com" target='_blank'><FaGithub/></a>
        <a href="dribbble.com" target='_blank'><FaSquareDribbble/></a>
    </div>
  )
}

export default HeaderSocials