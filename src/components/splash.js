import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const Section = styled.section`
    height: 100vh;
    background: linear-gradient(45deg, ${colors.green}, ${colors.blue});

    display: flex;
    align-items: center;
    justify-content: space-around;

    p {
        width: 80%;
        
        font-family: 'Fredericka the Great', cursive;
        font-size: 3rem;
        line-height: 3rem;

        color: ${colors.light};
        text-shadow: 2px 2px 2px ${colors.dark};
    }
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