import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import devices from '../styles/devices';
import zindex from '../styles/zindex';

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function NavListItems() {
    return (
        <>
            <li>
                <ScrollLink
                    activeClass="active"
                    to="skills"
                    spy={true}
                    duration={300}
                    smooth={true}
                >
                    Skills
                </ScrollLink>
            </li>
            <li>
                <ScrollLink
                    activeClass="active"
                    to="projects"
                    spy={true}
                    duration={300}
                    smooth={true}
                >
                    Projects
                </ScrollLink>
            </li>
            <li>
                <ScrollLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    duration={300}
                    smooth={true}
                >
                    Contact
                </ScrollLink>
            </li>
        </>
    )
}