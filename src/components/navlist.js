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

const itemWidth = 6;

const NavUl = styled(motion.ul)`
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-left: auto;
    
    width: ${itemWidth * 4}rem;
    padding: 0;

    list-style: none;

    li {
      margin: 0;
      padding: 0;
    }

    //Active Link Indication Slider
    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
    }

    &::after {
        width: ${itemWidth}rem;
        top: 0;
        bottom: 0;
        left: ${props => props.activeChild * itemWidth}rem;
        background: linear-gradient(45deg, ${colors.green}, ${colors.blue});
        clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

        transition: left 0.2s ease-in-out 0.18s;
    }
`; 

export default function MobileNavList({ isNavBarHidden }) {
    const [ activeChild, setActiveChild ] = React.useState(0);

    return (
        <NavUl
            initial="hidden"
            animate={isNavBarHidden ? "hidden" : "shown"}
            variants={variants}
            transition={{
                staggerChildren: 0.15,
            }}
            activeChild={activeChild}
        >
            <NavListItems
                variants={variants}
                itemWidth={itemWidth}
                setActiveChild={(i) => setActiveChild(i)}
            />
        </NavUl>   
    )
}