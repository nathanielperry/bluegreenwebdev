import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import devices from '../styles/devices';
import zindex from '../styles/zindex';

import Logo from './bluegreenlogo';

const HomeLink = styled(Link)`
  z-index: ${zindex.overlay + 100};
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 2px 2px 0 ${colors.light};

  @media ${devices.mobileL} {
    display: none;
  }
`;

const Navbar = styled(motion.nav)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${zindex.header};

  width: 100%;
  height: 5rem;
  padding: 1rem 4rem 0;
  background: ${colors.lightgray};
  border-bottom: 2px solid ${colors.dark};

  @media ${devices.mobileL} {
    padding: 1rem 1rem 0;
  }

  a {
    text-decoration: none;
    color: ${colors.dark};
    transition: all 0.1s ease-in-out;
    &:hover {
      text-shadow: 0 0 1px ${colors.dark};
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    
    width: 12rem;
    margin: 0;
    padding: 0;

    list-style: none;

    li {
      margin: 0;
      padding: 0;
    }

    @media {devices.mobileL} {
      position: absolute;
      right: 1rem;
      margin-top: 4.5rem;
      flex-direction: column;
      width: auto; 
      height: auto;
      align-self: flex-start;
      
      
      li {
        margin-bottom: 0.5rem;
        
        a {
          display: block;
          text-align: center;
          border-radius: 100%;
          background: ${colors.light};
          display: block;
          width: 60px;
          height: 60px;
          line-height: 60px;
        }
      }
    }
  }
`;

const burgerContainer = 40;
const burgerSize = 25;
const burgerBorderSize = 5;
const burgerAnimationDuration = 0.2;

const Hamburger = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: ${burgerSize}px;
  height: ${burgerSize}px;
  margin: ${(burgerContainer-burgerSize)/2};
  border: ${burgerBorderSize}px solid;
  border-color: ${props => props.isHamburgerOpen ? colors.lightgray : colors.dark };
  border-left: 0;
  border-right: 0;

  transition: all ${burgerAnimationDuration}s ease-in-out;  

  &::before {
    display: block;
    position: absolute;
    content: ' ';
    width: ${burgerSize}px;
    height: ${burgerBorderSize}px;
    background: ${colors.dark};
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
    background: ${colors.dark};
    top: ${burgerSize / 2 - burgerBorderSize / 2 - burgerBorderSize}px;
    transform: ${props => props.isHamburgerOpen ? 'rotate(-135deg)' : 'rotate(0)'};
    transition: all ${burgerAnimationDuration}s ease-in-out;
  }
`;

const navVariants = {
  hidden: {
    y: '-5rem',
  },
  shown: {
    y: '-1rem',
  },
}

const Header = ({ siteTitle, isNavBarHidden }) => {
  const [ isMobile, setIsMobile ] = React.useState(true);
  const [ isHamburgerOpen, setIsHamburgerOpen ] = React.useState(false);

  return (
    <header>
      <Navbar
        initial={{ y: '-100%' }}
        animate={ isNavBarHidden ? "hidden" : "shown"}
        variants={navVariants}
      >
        <Logo 
          size={35}
          border={3}
          distance={25}
          rotation={-45}
        />
        <HomeLink to="/">
            {siteTitle}
        </HomeLink>
          { (isMobile) && <Hamburger 
            isHamburgerOpen={isHamburgerOpen}
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}/> 
          }
          { (!isMobile || isHamburgerOpen) &&
            <ul>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          }
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
