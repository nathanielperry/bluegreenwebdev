import React from 'react';
import styled from 'styled-components';

import ProjectItem from '../components/projectitem';

export default function ProjectsList({ projects }) {
    return (
        <ul>
            { projects.map(project => (
                <ProjectItem
                    project={project}/>
            ))}
        </ul>
    )
} 