import React from "react"
import styled from 'styled-components';

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLinkItem = styled(ScrollLink)``;

export default function NavListItems() {
    return (
        <>
            <li>
                <NavLinkItem
                    activeClass="active"
                    to="skills"
                    spy={true}
                    duration={300}
                    smooth={true}
                >
                    Skills
                </NavLinkItem>
            </li>
            <li>
                <NavLinkItem
                    activeClass="active"
                    to="projects"
                    spy={true}
                    duration={300}
                    smooth={true}
                >
                    Projects
                </NavLinkItem>
            </li>
            <li>
                <NavLinkItem
                    activeClass="active"
                    to="contact"
                    spy={true}
                    duration={300}
                    smooth={true}
                >
                    Contact
                </NavLinkItem>
            </li>
        </>
    )
}