import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import NavListItems from "./navlistitems";

const NavUl = styled(motion.ul)`
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-left: auto;
    
    width: 12rem;
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
            <NavListItems/>
        </NavUl>   
    )
}