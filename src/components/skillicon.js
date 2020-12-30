import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Icon = styled.img`
    width: 100%;
    height: 100%;
`;

export default function SkillIcon({ skill }) {
    return (
        <Icon 
            src={skill.publicURL}
            alt={skill.name}/>
    )
}