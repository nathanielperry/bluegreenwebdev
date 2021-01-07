import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import NavListItems from "./navlistitems";

const navListVariants = {
    hidden: { opacity: 0, x: '100%' },
    shown: { opacity: 1, x: '0%' },
}

const MobileNavUl = styled(motion.ul)`
    position: absolute;
    display: flex;
    list-style: none;
    align-items: center;
    flex-direction: column;
    right: 1rem;
    top: 5.5rem;

    li {
        margin-bottom: 0.5rem;
    }

    a {
        display: block;
        text-align: center;
        box-shadow: 2px 2px 1px ${colors.dark};
        border-radius: 100%;
        background: ${colors.light};
        display: block;
        width: 60px;
        height: 60px;
        line-height: 60px;
    }
`; 

export default function MobileNavList({ isHamburgerOpen }) {

    return (
        <MobileNavUl
            initial="hidden"
            animate={ isHamburgerOpen ? "shown" : "hidden" }
            variants={navListVariants}
            transition={{
            staggerChildren: 0.15,
        }}>
            <NavListItems
                variants={navListVariants}
            />
        </MobileNavUl>   
    )
}