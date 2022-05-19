import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import devices from '../styles/devices';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Container = styled.section`
    min-height: 100vh;
    background-color: ${colors.light};
    color: ${colors.dark};
    padding-top: 6rem;
    border-top: 2px solid ${colors.light};
    overflow: hidden;

    @media ${devices.mobileL} {
        padding-top: 5rem;
    }
`;

const Inner = styled(motion.div)`
    max-width: 800px;
    margin: auto;

    @media ${devices.tablet} {
        max-width: 400px;
        padding: 0 20px;
    }    
`;

export default function Section({ slug, className, children }) {
    const [containerRef, inView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    const innerVariants = {
        hidden: { opacity: 0, y: '50px' },
        shown: { opacity: 1, y: '0' },
    };

    return (
        <Container
            className={className} 
            id={slug}
            ref={containerRef}
        >
            <Inner
                initial="hidden"
                variants={innerVariants}
                animate={inView ? "shown" : "hidden"}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                { children }
            </Inner>
        </Container>
    )
}