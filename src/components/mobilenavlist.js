import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import NavListItems from "./navlistitems";

const navListVariants = {
    hidden: { opacity: 0, x: '100%' },
    shown: { opacity: 1, x: '10%' },
    hover: { x: '-10%' },
}

const itemHeight = 30;
const marginBottom = 8;

const MobileNavUl = styled(motion.ul)`
    position: absolute;
    display: flex;
    list-style: none;
    align-items: flex-end;
    flex-direction: column;
    right: 0;
    top: 5.5rem;

    li {
        margin-bottom: ${marginBottom}px;
    }

    a {
        display: block;
        text-align: right;
        box-shadow: 2px 2px 1px ${colors.dark};
        /* border-radius: 100%; */
        background: ${colors.dark};
        padding: 0 1.5rem 0 1rem;
        display: block;
        width: 120px;
        height: ${itemHeight}px;
        line-height: ${itemHeight}px;
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%);
    }

    //Active Link Indication Slider
    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
    }

    &::after {
        height: ${itemHeight + 2}px;
        bottom: 0;
        right: 0;
        left: -2px;
        top: ${props => (props.activeChild * itemHeight) + (props.activeChild * marginBottom)}px;
        background: linear-gradient(90deg, ${colors.orange} 20%, ${colors.dark});
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%);

        transition: top 0.2s ease-in-out 0.18s;
    }
`; 

export default function MobileNavList({ isHamburgerOpen }) {
    const [ activeChild, setActiveChild ] = React.useState(0);

    return (
        <MobileNavUl
            initial="hidden"
            animate={ isHamburgerOpen ? "shown" : "hidden" }
            variants={navListVariants}
            activeChild={activeChild}
            transition={{
                staggerChildren: 0.15}
            }
        >
            <NavListItems
                variants={navListVariants}
                setActiveChild={(i) => setActiveChild(i)}
            />
        </MobileNavUl>   
    )
}