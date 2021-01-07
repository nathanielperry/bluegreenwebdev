import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import devices from '../styles/devices';
import zindex from '../styles/zindex';
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink } from "react-scroll";
import { throttle } from 'underscore';

import Logo from './bluegreenlogo';
import MobileNavList from './mobilenavlist';
import NavList from './navlist';
import Hamburger from './hamburger';

const Navbar = styled(motion.nav)`
  position: fixed;
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: ${zindex.header};

  width: 100%;
  height: 5rem;
  padding: 1rem 4rem 0;
  background: ${colors.dark};
  border-bottom: 2px solid ${colors.light};

  @media ${devices.mobileL} {
    padding: 1rem 1rem 0;
  }

  a {
    text-decoration: none;
    color: ${colors.light};
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
`;

const HomeLink = styled(ScrollLink)`
  z-index: ${zindex.overlay + 100};
  padding-left: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 2px 2px 0 ${colors.dark};
  color: ${colors.light};
  text-align: left;
  justify-self: left;
`;

const navVariants = {
  hidden: { y: '-5rem', },
  shown: { y: '-1rem', },
}

export default function Header({ siteTitle, isNavBarHidden }) {
  const [ isHamburgerOpen, setIsHamburgerOpen ] = React.useState(false);
  const [ scroll, setScroll ] = React.useState();
  const isMobile = useMediaQuery({ query: devices.mobileL });

  //Update scroll height on scroll.
  React.useEffect(() => {
    const handleScroll = throttle(() => {
      setScroll(window.scrollY);
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <Navbar
        initial={{ y: '-100%' }}
        animate={ isNavBarHidden ? "hidden" : "shown"}
        variants={navVariants}
      >
      <ScrollLink 
          to="intro"
          duration={300}
          smooth={true}
      >
        <Logo
          rotation={scroll / 10}
        />
      </ScrollLink>


      {/* Desktop View */}
      { !isMobile &&
        <>
          <HomeLink 
            to="intro"
            duration={300}
            smooth={true}
          >
              {siteTitle}
          </HomeLink>
          <NavList 
            isNavBarHidden={isNavBarHidden}
          />
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
            isNavBarHidden={isNavBarHidden}
          />
        </>
      }
      </Navbar>
    </header>
  )
}
