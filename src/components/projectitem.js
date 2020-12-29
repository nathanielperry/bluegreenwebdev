import React from 'react';
import styled from 'styled-components';

export default function ProjectItem({ project }) {
    return (
        <li>
            <h2>{ project.title }</h2>
            <p>{ project.description }</p>
            <img src="https://source.unsplash.com/random/400x200" alt="project image" />
            <a href={ project.url }>Live Demo</a>
        </li>
    )
}