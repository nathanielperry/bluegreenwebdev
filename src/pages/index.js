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
  //Stage of the splash animation.
  const [ stage, setStage ] = React.useState('start');

  return (
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
};

export default IndexPage
