import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import zindex from '../styles/zindex';

import { motion } from 'framer-motion';

const offset = 30;
const size = 35;

const Wrapper = styled(motion.div)`
    /* border: 1px solid pink; */
    position: absolute;
    transform: rotate(-45deg);
    z-index: ${zindex.overlay};
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Circle = styled(motion.div)`
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    border-radius: 100%;
    border: 2px solid ${colors.dark};
    box-shadow: 1px 1px 10px ${colors.black};
`;
const BlueCircle = styled(Circle)`
    border-color: ${colors.blue};
    transform: translateX(-${offset}%);
`;
const GreenCircle = styled(Circle)`
    border-color: ${colors.green};
    overflow: hidden;
    transform: translateX(${offset}%);
`;
const InnerCircle = styled(Circle)`
    top: -3px;
    left: -3px;
    background: linear-gradient(45deg, ${colors.green}, ${colors.blue});
    transform: translateX(-${offset * 2}%);
    border: none;
`;

export default function BlueGreenCircle({ offset }) {
    return (
        <Wrapper>
            <BlueCircle />
            <GreenCircle>
                <InnerCircle />
            </GreenCircle>
        </Wrapper>
    )
}