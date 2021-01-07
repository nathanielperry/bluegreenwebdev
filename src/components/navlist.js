import React from "react"
import styled from 'styled-components';
import colors from '../styles/colors';
import { motion } from 'framer-motion';
import NavListItems from "./navlistitems";

const variants = {
    hidden: { opacity: 0, y: '100%'},
    shown: { opacity: 1, y: '0%'},
    hover: { y: '-10%' },
}

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

export default function MobileNavList({ isNavBarHidden }) {

    return (
        <NavUl
            initial="hidden"
            animate={isNavBarHidden ? "hidden" : "shown"}
            variants={variants}
            transition={{
                staggerChildren: 0.15,
            }}
        >
            <NavListItems
                variants={variants}
            />
        </NavUl>   
    )
}