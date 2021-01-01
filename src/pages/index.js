import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import colors from '../styles/colors';

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
    line-height: 2.3rem;
    text-align: right;
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
  justify-content: space-between;
  margin-top: 4rem;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  
  height: 5rem;
  padding: 2rem;

  background-color: ${colors.dark};
  color: ${colors.gray};
`;

//TODO: Move to GraphQL query
const projects = [
  {
    title: 'Project 1',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
    url: '#',
  },
  {
    title: 'Project 2',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
    url: '#',
  },
];

const IndexPage = () => {
  const [ isNavBarHidden, setIsNavBarHidden ] = React.useState(true);
  const toggleNavBar = () => setIsNavBarHidden(!isNavBarHidden);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="BlueGreenWebDev" />
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        isNavBarHidden={isNavBarHidden}
      />
      <main>
        <Splash 
          setIsNavBarHidden={setIsNavBarHidden}/>
        <DarkSection slug="skills">
          <Subheader>I use modern tools...</Subheader>
          <SkillsList/>
        </DarkSection>
        <Section slug="projects">
          <Subheader>...to make modern web apps.</Subheader>
          <ProjectsList projects={projects}/>
        </Section>
        <DarkSection slug="contact">
          <Subheader style={{ textAlign: 'center' }}>I would love to hear from you!</Subheader>
          <Flex>
            <ContactForm />
            <SocialMedia />
          </Flex>
        </DarkSection>
      </main>
      <Footer>
        © {new Date().getFullYear()} Nathaniel Perry
      </Footer>
    </>
  )
};

export default IndexPage
