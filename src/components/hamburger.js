import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import devices from '../styles/devices';
import zindex from '../styles/zindex';

const burgerContainer = 40;
const burgerSize = 25;
const burgerBorderSize = 5;
const burgerAnimationDuration = 0.2;

const HamburgerDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: ${burgerSize}px;
  height: ${burgerSize}px;
  margin: ${(burgerContainer-burgerSize)/2};
  margin-left: auto;
  border: ${burgerBorderSize}px solid;
  border-color: ${props => props.isHamburgerOpen ? colors.dark : colors.light };
  border-left: 0;
  border-right: 0;

  transition: all ${burgerAnimationDuration}s ease-in-out;  

  &::before {
    display: block;
    position: absolute;
    content: ' ';
    width: ${burgerSize}px;
    height: ${burgerBorderSize}px;
    background: ${colors.light};
    top: ${burgerSize / 2 - burgerBorderSize / 2 - burgerBorderSize}px;
    transform: ${props => props.isHamburgerOpen ? 'rotate(135deg)' : 'rotate(0)'};
    transition: all ${burgerAnimationDuration}s ease-in-out;
  }
  
  &::after {
    display: block;
    position: absolute;
    content: ' ';
    width: ${burgerSize}px;
    height: ${burgerBorderSize}px;
    background: ${colors.light};
    top: ${burgerSize / 2 - burgerBorderSize / 2 - burgerBorderSize}px;
    transform: ${props => props.isHamburgerOpen ? 'rotate(-135deg)' : 'rotate(0)'};
    transition: all ${burgerAnimationDuration}s ease-in-out;
  }
`;

export default function Hamburger({ isHamburgerOpen, setIsHamburgerOpen }) {
    return (
        <HamburgerDiv
            isHamburgerOpen={isHamburgerOpen}
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        />
    )
};