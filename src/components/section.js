import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const Container = styled.section`
    height: 100vh;
    background-color: ${colors.light};
    color: ${colors.dark};
`;

const Subheader = styled.h2`
    font-size: 2.3rem;
    line-height: 2.3rem;
    padding: 2rem;
`;

export default function Section({ slug, subheader, className, children }) {
    return (
        <Container
            className={className} 
            id={slug}>
            { subheader && (<Subheader className="subheader">{subheader}</Subheader>)}
            { children }
        </Container>
    )
}