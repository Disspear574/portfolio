import './nav.css'

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#top')

    
  return (
    <nav>
        <a href="#top" onClick={() => setActiveNav('#top')} className={activeNav === '#top' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav