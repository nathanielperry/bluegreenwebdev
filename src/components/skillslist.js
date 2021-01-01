import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import colors from '../styles/colors';

import SkillIcon from './skillicon';

const List = styled.ul`
    width: 275px;
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 100px);
    gap: 1rem;
`;

const OuterContainer = styled.div`
    position: relative;
    height: 800px;
    width: 800px;
    margin: auto;
`;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 425px;
    height: 325px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2.5rem;
    border: 3px solid ${colors.dark};
    border-radius: 25px;
    box-shadow: 4px 4px 0px ${colors.orange};
    
    background: linear-gradient(${colors.light}, ${colors.lightgray}); 
`;
const ContainerA = styled(Container)`

`;
const ContainerB = styled(Container)`
    transform: translate(85%, 80%);
    overflow: hidden;
`;
const InnerContainer = styled(Container)`
    top: -3px;
    left: -2px;
    transform: translate(-85%, -80%);
    background: linear-gradient(.85turn, ${colors.orange}, 25%, ${colors.light});
    box-shadow: none;
    border-color: ${colors.dark};
`;

export default function SkillsList() {
    const data = useStaticQuery(graphql`
        query IconsQuery {
            allFile(filter: { sourceInstanceName: { eq: "icons" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);

    //Format data into list of skills objects
    const skills = data.allFile.edges.map(edge => ({
        name: edge.node.name,
        publicURL: edge.node.publicURL,
    }));

    return (
        <OuterContainer>
            <ContainerA>
                <List>
                    {skills.slice(0, 6).map(skill => (
                        <li><SkillIcon skill={skill} /></li>
                    ))}
                </List>
            </ContainerA>
            <ContainerB>
                <InnerContainer />
                <List>
                    {skills.slice(6, 12).map(skill => (
                        <li><SkillIcon skill={skill} /></li>
                    ))}
                </List>
            </ContainerB>
        </OuterContainer>
    )
}