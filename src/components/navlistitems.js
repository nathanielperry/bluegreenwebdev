import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinkItem = styled(ScrollLink)``;

const links = [
    'skills',
    'projects',
    'contact',
];

export default function NavListItems({ variants }) {
    return (
        <>
            {links.map(slug => (
                <motion.li
                    variants={variants}
                    whileHover="hover"
                >
                    <NavLinkItem
                        activeClass="active"
                        to={slug}
                        spy={true}
                        duration={300}
                        smooth={true}
                    >
                        {slug.charAt(0).toUpperCase() + slug.slice(1)}
                    </NavLinkItem>
                </motion.li>
            ))}
        </>
    )
}