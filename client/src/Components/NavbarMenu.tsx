import React, { useRef, useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { BiSolidContact } from 'react-icons/bi' 
import { TbTimelineEventFilled } from "react-icons/tb";
import { GrCircleInformation } from "react-icons/gr";

type Props = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarMenu = (props: Props) => {

  const navRef = useRef<HTMLDivElement>(null)
  
  
  useEffect((): void => {
    navRef.current?.addEventListener('click', (): void => {
      props.setMenu(false)
      navRef.current?.classList.add('hide-navbar-menu-list')
    })
  }, [])

  return (
    <div className='navbar-menu-list hide-navbar-menu-list' id='navbar-menu-list' ref={navRef}>
        <div>
          <FaHome className='menu-navbar-icon' />
          <a href='#home'>Home</a>
        </div>
        <div>
          <CgProfile className='menu-navbar-icon' />
          <a href='#about'>About</a>
        </div>
        <div>
          <FaReact className='menu-navbar-icon' />
          <a href='#skills'>Skills</a>
        </div>
        <div>
          <TbTimelineEventFilled className='menu-navbar-icon' />          
          <a href='#timeline'>Timeline</a></div>
        <div>
          <BiSolidContact className='menu-navbar-icon' />
          <a href='#contactme'>Contact Me</a>
        </div>
        <div>
          <GrCircleInformation className='menu-navbar-icon' />
          <a href='#aboutme'>About Me</a>
        </div>
    </div>
  )
}

export default NavbarMenu