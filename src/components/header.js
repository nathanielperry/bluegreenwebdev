import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import zindex from '../styles/zindex';

import BlueGreenCircle from './circle';

const HomeLink = styled(Link)`
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
  return (
    <header>
      <Navbar
        initial={{ y: '-100%' }}
        animate={ isNavBarHidden ? "hidden" : "shown"}
        variants={navVariants}
      >
        <BlueGreenCircle size={35} border={2} distance={25} spinSpeed={0}/>
        <HomeLink to="/">
            {siteTitle}
        </HomeLink>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
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
