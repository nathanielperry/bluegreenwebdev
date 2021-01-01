import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const ProjectLi = styled.li`
    position: relative;
    display: block;
    list-style: none;
    margin: 0 0 4rem 0;
    padding: 0;
    width: 90%;

    &:nth-child(even) {
        align-self: flex-end;
        article {
            flex-direction: row;
        }

        a {
            float: left;
        }
    }

    article {
        display: flex;
        align-items: flex-start;
        flex-direction: row-reverse;
    }

    img {
        margin: 0 1rem 0 1rem;
        padding: 0;
        float: left;
        border-radius: 16px;
        box-shadow: 2px 2px 1px ${colors.dark};
    }

    a {
        display: block;
        text-decoration: none;
        padding: 0.2rem 0.8rem;
        border-radius: 12px;
        color: ${colors.light};
        background: ${colors.green};
        text-shadow: 1px 1px 1px ${colors.dark};
        transition: all 0.1s ease-in-out;
        float: right;

        &:hover {
            box-shadow: 2px 2px 2px black;
        }

        &:active {
            box-shadow: none;
        }
    }
`;

export default function ProjectItem({ project }) {
    const { title, description, demoUrl, imageUrl } = project;

    return (
        <ProjectLi>
            <h2>{ title }</h2>
            <article>
                <img src={imageUrl} alt="project image" />
                <content>
                    <p>{ description }</p>
                    <a href={ demoUrl }>Live Demo</a>
                </content>
            </article>
        </ProjectLi>
    )
}