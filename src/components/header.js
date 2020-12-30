import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import colors from '../styles/colors';
import zindex from '../styles/zindex';

import Logo from "./logo"

const Navbar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${zindex.header};

  width: 100%;
  height: 4rem;
  padding: 0 4rem;
  background: ${colors.light};
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

const Header = ({ siteTitle }) => (
  <header>
      <Navbar>
        <Logo 
          siteTitle={siteTitle}/>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
