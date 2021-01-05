import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import devices from '../styles/devices';
import zindex from '../styles/zindex';

const navListVariants = {
    hidden: { opacity: 0, x: '100%' },
    shown: { opacity: 1, x: '0%' },
}

const NavUl = styled(motion.ul)`
    display: flex;
    justify-content: space-between;
    
    width: 12rem;
    margin: 0;
    padding: 0;

    list-style: none;

    li {
      margin: 0;
      padding: 0;
    }
`; 

export default function MobileNavList({ isHamburgerOpen }) {

    return (
        <NavUl>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </NavUl>   
    )
}