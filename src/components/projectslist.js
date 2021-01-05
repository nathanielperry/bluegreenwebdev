import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import ProjectItem from '../components/projectitem';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding-bottom: 4rem;
`;

export default function ProjectsList() {
    const data = useStaticQuery(graphql`
        query projectBriefs {
            allMarkdownRemark(
                sort: { order:ASC, fields: [frontmatter___order]}
                limit: 1000
            ) {
                edges {
                    node{
                        id
                        frontmatter {
                            title
                            description
                            demoUrl
                            githubUrl
                            slug
                        }
                    }
                }
            }
            allImageSharp {
                edges {
                    node {
                        fluid(maxHeight: 200, maxWidth: 300, fit: COVER) {
                            src
                            originalName
                        }
                    }
                }
            }
        }
    `);

    const projects = data.allMarkdownRemark.edges.map(edge => {
        const node = edge.node;
        const imageUrl = data.allImageSharp.edges.find(edge => {
            return edge.node.fluid.originalName === node.frontmatter.slug + '.png';
        }).node.fluid.src;

        return {
            id: node.id,
            title: node.frontmatter.title,
            description: node.frontmatter.description,
            demoUrl: node.frontmatter.demoUrl,
            githubUrl: node.frontmatter.githubUrl,
            imageUrl,
        }
    });

    return (
        <List>
            { projects.map(project => (
                <ProjectItem
                    project={project}/>
            ))}
        </List>
    )
} 