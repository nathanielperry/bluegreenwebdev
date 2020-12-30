import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const ProjectLi = styled.li`
    a {
        text-decoration: none;
        padding: 0.2rem 0.8rem;
        border-radius: 12px;
        color: ${colors.light};
        background: ${colors.green};
        text-shadow: 1px 1px 1px ${colors.dark};
        transition: all 0.1s ease-in-out;

        &:hover {
            box-shadow: 2px 2px 2px black;
        }

        &:active {
            box-shadow: none;
        }
    }
`;

export default function ProjectItem({ project }) {
    return (
        <ProjectLi>
            <h2>{ project.title }</h2>
            <p>{ project.description }</p>
            <img src="https://source.unsplash.com/random/400x200" alt="project image" />
            <a href={ project.url }>Live Demo</a>
        </ProjectLi>
    )
}