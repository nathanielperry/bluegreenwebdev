import React from "react"
import styled from 'styled-components';
import colors from '../styles/colors';
import zindex from '../styles/zindex';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";


const NavListItem = styled(motion.li)`
    z-index: ${zindex.header};
    width: ${props => props.itemWidth}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-shadow: 1px 1px 1px ${colors.dark};
    }
`;

const links = [
    'intro',
    'skills',
    'projects',
    'contact',
];

export default function NavListItems({ variants, itemWidth, setActiveChild }) {
    return (
        <>
            {links.map((slug, i) => (
                <NavListItem
                    variants={variants}
                    itemWidth={itemWidth}
                    whileHover="hover"
                >
                    <ScrollLink
                        activeClass="active"
                        onSetActive={() => setActiveChild(i)}
                        to={slug}
                        spy={true}
                        duration={300}
                        smooth={true}
                        key={'nav-link' + i}
                    >
                        {slug.charAt(0).toUpperCase() + slug.slice(1)}
                    </ScrollLink>
                </NavListItem>
            ))}
        </>
    )
}