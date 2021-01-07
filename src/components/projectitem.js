import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import devices from '../styles/devices';

const ProjectLi = styled.li`
    position: relative;
    display: block;
    list-style: none;
    margin: 0 0 4rem 0;
    padding: 0;
    width: 90%;

    @media ${devices.mobileL} {
        align-self: center;
    }

    &:nth-child(even) {
        align-self: flex-end;
        article {
            flex-direction: row;
        }

        div {
            justify-content: flex-start;
        }

        img {
            margin-left: 0;
        }

        @media ${devices.mobileL} {
            align-self: center;

            article {
                flex-direction: column;
            }

            div {
               justify-content: center; 
            }
        }
    }

    article {
        display: flex;
        align-items: flex-start;
        flex-direction: row-reverse;

        @media ${devices.mobileL} {
            flex-direction: column;

            p {
                margin: 1rem 0;
            }
        }
    }

    img {
        margin: 0 1rem 0 1rem;
        padding: 0;
        float: left;
        border-radius: 16px;
        box-shadow: 2px 2px 1px ${colors.dark};

        @media ${devices.mobileL} {
            margin-left: 0;
        }
    }
`;

const Flex = styled.div`
    display: flex;
    justify-content: flex-end;

    @media ${devices.mobileL} {
        justify-content: center;        
    }
`;

const Link = styled.a`
    display: block;
    text-decoration: none;
    padding: 0.2rem 0.8rem;
    border-radius: 12px;
    color: ${colors.light};
    text-shadow: 1px 1px 1px ${colors.dark};
    transition: all 0.1s ease-in-out;

    &:hover {
        box-shadow: 2px 2px 2px black;
    }

    &:active {
        box-shadow: none;
    }
`;

const DemoLink = styled(Link)`
    background: ${colors.green};
`;

const GitHubLink = styled(Link)`
    background: ${colors.blue};
    margin-left: 0.5rem;
`;

export default function ProjectItem({ project }) {
    const { title, description, demoUrl, githubUrl, imageUrl } = project;

    return (
        <ProjectLi>
            <h2>{ title }</h2>
            <article>
                <img src={imageUrl} alt="project screenshot" />
                <content>
                    <p>{ description }</p>
                    <Flex>
                        <DemoLink href={ demoUrl } target="_blank">Live Demo</DemoLink>
                        <GitHubLink href={ githubUrl } target="_blank">View on GitHub</GitHubLink>
                    </Flex>
                </content>
            </article>
        </ProjectLi>
    )
}