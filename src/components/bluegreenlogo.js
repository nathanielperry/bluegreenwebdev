import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import zindex from '../styles/zindex';

import { motion, useAnimation } from 'framer-motion';

const size = 35;
const border = 3;
const distance = 25;
const initialRotation=-135;

const Wrapper = styled(motion.div)`
    /* position: absolute; */
    width: 50px;
    height: 50px;
    transform: rotate(${initialRotation}deg);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Circle = styled(motion.div)`
    position: absolute;
    z-index: ${zindex.overlay};
    width: ${size}px;
    height: ${size}px;
    border-radius: 100%;
    border: ${border}px solid ${colors.dark};
    /* box-shadow: 0 0 5px ${colors.black}; */
    /* background: ${colors.dark} */
`;
const BlueCircle = styled(Circle)`
    border-color: ${colors.blue};
    background: ${colors.blue};
    transform: translateX(${distance}%);
`;
const GreenCircle = styled(Circle)`
    border-color: ${colors.green};
    background: ${colors.green};
    overflow: hidden;
    transform: translateX(-${distance}%);
`;
const InnerCircle = styled(Circle)`
    top: -3px;
    left: -3px;
    background: linear-gradient(20deg, ${colors.green}, ${colors.blue});
    transform: translateX(${distance * 2}%);
    border: none;
`;

export default function BlueGreenCircle(props) {
    const { size, border, distance, rotation } = props;
    const animation = useAnimation();

    React.useEffect(() => {
        animation.start({
            rotate: initialRotation + rotation + 'deg',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [ rotation ]);

    return (
        <Wrapper
            animate={animation}
            initialRotation={initialRotation}
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
