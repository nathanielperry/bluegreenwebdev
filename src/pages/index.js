import React from "react";
import styled from 'styled-components';
import colors from '../styles/colors';

import ContactForm from "../components/contactform";
import Layout from "../components/layout";
import ProjectsList from "../components/projectslist";
import Section from "../components/section";
import SEO from "../components/seo";
import SkillsList from "../components/skillslist";
import Splash from '../components/splash';


const DarkSection = styled(Section)`
  background: linear-gradient(${colors.gray}, ${colors.dark});
  color: ${colors.light};

  h2 {
    text-align: left;
  }
`;

//TODO: Move to GraphQL query
const projects = [
  {
    title: 'Project 1',
    description: 'Project 1 description',
    url: '#',
  },
  {
    title: 'Project 2',
    description: 'Project 2 description',
    url: '#',
  },
];

const IndexPage = () => (
  <Layout>
    <SEO title="BlueGreenWebDev" />
    <Splash />
    <DarkSection
      slug="skills"
      subheader="I use modern tools...">
      <SkillsList/>
    </DarkSection>
    <Section
      slug="projects"
      subheader="...to make modern web apps.">
      <ProjectsList 
        projects={projects}/>
    </Section>
    <DarkSection
      slug="contact"
      subheader="Reach out below, and let's have a chat!">
      <ContactForm />
    </DarkSection>
  </Layout>
)

export default IndexPage
