import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import devices from '../styles/devices';
import zindex from '../styles/zindex';
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from "react-scroll";

import Logo from './bluegreenlogo';
import MobileNavList from './mobilenavlist';
import NavList from './navlist';
import Hamburger from './hamburger';

const HomeLink = styled(ScrollLink)`
  z-index: ${zindex.overlay + 100};
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 2px 2px 0 ${colors.light};
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
`;

const navVariants = {
  hidden: { y: '-5rem', },
  shown: { y: '-1rem', },
}

export default function Header({ siteTitle, isNavBarHidden }) {
  const [ isHamburgerOpen, setIsHamburgerOpen ] = React.useState(false);
  const isMobile = useMediaQuery({ query: devices.mobileL });

  return (
    <header>
      <Navbar
        initial={{ y: '-100%' }}
        animate={ isNavBarHidden ? "hidden" : "shown"}
        variants={navVariants}
      >
      <ScrollLink 
          to="splash"
          duration={300}
          smooth={true}
      >
        <Logo 
          size={35}
          border={3}
          distance={25}
          rotation={-45}
        />
      </ScrollLink>


      {/* Desktop View */}
      { !isMobile &&
        <>
          <HomeLink 
            to="splash"
            duration={300}
            smooth={true}
          >
              {siteTitle}
          </HomeLink>
          <NavList />
        </>
      }

      {/* Mobile View */}
      { isMobile && 
        <>
          <Hamburger 
            isHamburgerOpen={isHamburgerOpen}
            setIsHamburgerOpen={setIsHamburgerOpen}
          />
          <MobileNavList
            isHamburgerOpen={isHamburgerOpen}
          />
        </>
      }

      </Navbar>
    </header>
  )
}
