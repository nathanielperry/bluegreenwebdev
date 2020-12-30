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
  background-color: ${colors.dark};
  color: ${colors.light};

  .subheader {
    text-align: right;
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
    <Section
      slug="skills"
      subheader="I use modern tools...">
      <SkillsList/>
    </Section>
    <DarkSection
      slug="projects"
      subheader="...to make modern web apps.">
      <ProjectsList 
        projects={projects}/>
    </DarkSection>
    <Section
      slug="contact"
      subheader="Reach out below, and let's have a chat!">
      <ContactForm />
    </Section>
  </Layout>
)

export default IndexPage
