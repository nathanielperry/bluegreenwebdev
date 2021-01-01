import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import zindex from '../styles/zindex'; 

const Container = styled.span`
    display: inline;
    margin-left: 1.5rem;
    
    width: 80%;
    
    font-family: 'Fredericka the Great', cursive;
    font-size: 3rem;
    line-height: 3rem;

    color: ${colors.light};
    text-shadow: 2px 2px 2px ${colors.dark};
`;

const Dot = styled(motion.span)`
    display: inline-block;
    padding: 0 0.3rem;
`;

const animate = {
    y: ['0px', '-10px', '0px', '0px'],
}

const transition = (delay) => ({
    ease: "easeOut",
    duration: 0.7,
    loop: Infinity,
    delay: delay,
});

export default function Dots() {
    return (
        <Container>
            <Dot animate={animate} transition={transition(0)}>.</Dot>
            <Dot animate={animate} transition={transition(0.1)}>.</Dot>
            <Dot animate={animate} transition={transition(0.2)}>.</Dot>
        </Container>
    )
}