import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const Container = styled.section`
    min-height: 100vh;
    background-color: ${colors.light};
    color: ${colors.dark};
    padding-top: 6rem;
    border-top: 2px solid ${colors.light};
`;

const Inner = styled.div`
    max-width: 800px;
    min-width: 800px;
    margin: auto;
`;

export default function Section({ slug, subheader, className, children }) {
    return (
        <Container
            className={className} 
            id={slug}>
            <Inner>
                { children }
            </Inner>
        </Container>
    )
}