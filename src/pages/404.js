import React from "react"
import SEO from "../components/seo"
import Header from "../components/header";
import Section from "../components/section";
import colors from '../styles/colors';
import devices from '../styles/devices';

import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;

    @media ${devices.mobileL} {
      font-size: 1.8rem;
    }
`;

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404: Not found" />
      <Header 
          siteTitle="BlueGreenWebDev" 
          isNavBarHidden={false}
          noNav={true}
        />
      <Section>
        <Paragraph>You page you are trying to access does not exist.</Paragraph>
        <Paragraph>Click <a href="/">here</a> to return to the front page.</Paragraph>
      </Section>
    </>
  )
}

export default NotFoundPage;