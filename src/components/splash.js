import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const Section = styled.section`
    height: 100vh;
    background-color: ${colors.dark};
`;

const introMessage = [
    'Hello,',
    'my name is Nathaniel.',
    'I am a full stack web developer with a passion for design.',
];

export default function Splash() {
    return (
        <Section>
            <p>{introMessage.join(' ')}</p>
        </Section>
    )
}