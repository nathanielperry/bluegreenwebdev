import React from 'react';
import styled from 'styled-components';

import ProjectItem from '../components/projectitem';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding-bottom: 4rem;
`;

export default function ProjectsList({ projects }) {
    return (
        <List>
            { projects.map(project => (
                <ProjectItem
                    project={project}/>
            ))}
        </List>
    )
} 