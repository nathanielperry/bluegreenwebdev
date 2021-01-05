import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import zindex from '../styles/zindex';

import { motion, useAnimation, useMotionValue } from 'framer-motion';

const Wrapper = styled(motion.div)`
    /* position: absolute; */
    width: 50px;
    height: 50px;
    transform: rotate(${props => props.rotation}deg);
    display: flex;
    justify-content: center;
    align-items: center;
    `;
const Circle = styled(motion.div)`
    position: absolute;
    z-index: ${zindex.overlay};
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 100%;
    border: ${props => props.border}px solid ${colors.dark};
    box-shadow: 1px 2px 1px ${colors.black};
    background: ${colors.dark}
`;
const BlueCircle = styled(Circle)`
    border-color: ${colors.blue};
    transform: translateX(${props => props.distance}%);
`;
const GreenCircle = styled(Circle)`
    border-color: ${colors.green};
    overflow: hidden;
    transform: translateX(-${props => props.distance}%);
`;
const InnerCircle = styled(Circle)`
    top: -3px;
    left: -3px;
    background: linear-gradient(45deg, ${colors.green}, ${colors.blue});
    transform: translateX(${props => props.distance * 2}%);
    border: none;
`;

export default function BlueGreenCircle(props) {
    const { size, border, distance, rotation } = props;

    return (
        <Wrapper
            animate={{ rotate: rotation }}
        >
            <BlueCircle 
                size={size}
                distance={distance}
                border={border}
            />
            <GreenCircle
                size={size}
                distance={distance}
                border={border}
            >
                <InnerCircle 
                    size={size}
                    distance={distance}
                    border={border}
                />
            </GreenCircle>
        </Wrapper>
    )
}