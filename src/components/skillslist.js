import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SkillIcon from './skillicon';

const List = styled.ul`
    width: 16rem;
    list-style: none;
    columns: 3;

    li {
        width: 4rem;
        height: 4rem;
    }
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
    `)

    //Format data into list of skills objects
    const skills = data.allFile.edges.map(edge => ({
        name: edge.node.name,
        publicURL: edge.node.publicURL,
    }));

    return (
        <List>
            {skills.map(skill => (
                <li><SkillIcon skill={skill} /></li>
            ))}
        </List>
    )
}