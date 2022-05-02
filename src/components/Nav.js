import React, { useEffect, useState } from 'react';
import modules from './Nav.module.css'
import clsx from 'clsx';

const Nav = () => {
    const [show,setShow] = useState(false)
    useEffect(() => {
        const handleShow = () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else setShow(false)
        }
        window.addEventListener('scroll',handleShow)
        return () => {
            window.removeEventListener('scroll',handleShow)
        }
    },[])
    const navClasses = clsx(modules.nav,{
       [modules.navBlack]: show
    })
    return (
        <div className={navClasses}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
            alt="Netflix Logo" 
            className={modules.navLogo}/>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" 
            alt="Netflix avatar" 
            className={modules.navAvatar}/>
        </div>
    );
}

export default Nav;


