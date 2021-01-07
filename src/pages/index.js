import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import colors from '../styles/colors';
import devices from '../styles/devices';
import { useMediaQuery } from 'react-responsive';

import SEO from "../components/seo";
import Section from "../components/section";

import Splash from '../components/splash';
import SkillsList from "../components/skillslist";
import ProjectsList from "../components/projectslist";
import ContactForm from "../components/contactform";
import SocialMedia from '../components/social';
import Header from "../components/header";
import "../components/index.css";

const Subheader = styled.h2`
    font-size: 2.3rem;
    text-align: right;
    text-shadow: 1px 1px 1px ${colors.dark};
    margin-bottom: 0.5rem;

    @media ${devices.mobileL} {
      font-size: 1.8rem;
    }
`;

const Highlight = styled.em`
  font-style: normal;
  color: ${colors.orange};
`;

const DarkSection = styled(Section)`
  background: linear-gradient(${colors.gray}, ${colors.dark});
  color: ${colors.light};

  h2 {
    text-align: left;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;

  @media ${devices.tablet} {
    flex-direction: column;
  }

  @media ${devices.mobileL} {
    margin-top: 2rem;          
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  
  margin-top: -5rem;
  height: 5rem;
  padding: 2rem;

  color: ${colors.gray};
`;

const IndexPage = () => {
  const [ isNavBarHidden, setIsNavBarHidden ] = React.useState(true);
  const [ isAnimationComplete, setIsAnimationComplete ] = React.useState(
    localStorage.getItem("bgwd_animation-complete") === "yes" ? true : false
  );

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isMobile = useMediaQuery({ query: devices.mobileL });
  const skillListIntersects = {

  }

  return (
    <>
      <SEO title="BlueGreenWebDev" />
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        isNavBarHidden={isNavBarHidden}
      />
      <main>
        <Splash 
          setIsNavBarHidden={setIsNavBarHidden}
          setIsAnimationComplete={setIsAnimationComplete}/>
        { isAnimationComplete && 
          <>
            <DarkSection slug="skills">
              <Subheader>I use <Highlight>modern</Highlight> tools...</Subheader>
              <SkillsList
                xIntersect={isMobile ? 35 : 90}
                yIntersect={isMobile ? 80 : 35}
              />
            </DarkSection>
            <Section slug="projects">
              <Subheader>...to make <Highlight>modern</Highlight> web apps.</Subheader>
              <ProjectsList/>
            </Section>
            <DarkSection slug="contact">
              <Subheader style={{ textAlign: isMobile ? 'left' : 'center' }}>Have an interesting project?</Subheader>
              <Subheader style={{ textAlign: isMobile ? 'left' : 'center' }}> I would love to hear from you!</Subheader>
              <Flex>
                <ContactForm />
                <SocialMedia />
              </Flex>
            </DarkSection>
          </>
        }
        </main>
        <Footer>
          © {new Date().getFullYear()} Nathaniel Perry
        </Footer>
    </>
  )
};

export default IndexPage
