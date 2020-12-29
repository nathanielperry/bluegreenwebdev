import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    height: 100vh;
`;

export default function Section({ slug, subheader, children }) {
    return (
        <Container id={slug}>
            { subheader && (<p>{subheader}</p>)}
            { children }
        </Container>
    )
}