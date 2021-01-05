import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';

const Span = styled(motion.span)`
    display: inline-block;
    
    font-family: 'Fredericka the Great', cursive;
    font-size: 3rem;
    line-height: 3rem;

    color: ${colors.light};
    text-shadow: 2px 2px 2px ${colors.dark};
`;

const initial = {
    opacity: 0,
    y: '3rem',
}

const animate = {
    opacity: 1,
    y: 0,
}

export default function SplashText({ children }) {
    return (
        <Span
            initial={initial}
            animate={animate}
        >
            {/* React ignores whitespace here so &nbsp is 
            used here to ensure a space between spans.*/}
            {children}&nbsp;
        </Span>
    )
}