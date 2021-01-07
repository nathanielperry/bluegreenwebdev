import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import zindex from '../styles/zindex';

import { motion, useAnimation, useMotionValue } from 'framer-motion';
import getRotate from '../lib/getRotate';

const Wrapper = styled(motion.div)`
    position: absolute;
    transform: rotate(-45deg);
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
    box-shadow: 1px 1px 10px ${colors.black};
`;
const BlueCircle = styled(Circle)`
    border-color: ${colors.blue};
    transform: translateX(${props => props.distance}px);
`;
const GreenCircle = styled(Circle)`
    border-color: ${colors.green};
    overflow: hidden;
    transform: translateX(-${props => props.distance}px);
`;
const InnerCircle = styled(Circle)`
    top: -3px;
    left: -3px;
    background: linear-gradient(45deg, ${colors.green}, ${colors.blue});
    transform: translateX(${props => props.distance * 2}px);
    border: none;
`;

export default function BlueGreenCircle(props) {
    const { size, border, distance, distanceSpeed, spinSpeed, } = props;
    const wrapperRef = React.useRef();

    const blueControls = useAnimation();
    const greenControls = useAnimation();
    const innerControls = useAnimation();

    const wrapperControls = useAnimation();
    const rotate = useMotionValue(0);

    const changeDistance = async (offset, timing) => {
        const transition = { duration: timing };
        
        blueControls.start({
            x: offset + '%',
            transition,
        });
        greenControls.start({
            x: -offset + '%',
            transition,
        });
        return await innerControls.start({
            x: (offset * 2) + '%',
            transition: {
                duration: timing,
            },
        });
    };

    const setSpin = async (duration) => {
        await wrapperControls.start(
            {
                rotate: 360,
            },
            {
                repeat: 0,
                ease: "linear",
                duration: duration * ((360 - getRotate(wrapperRef.current)) / 360),
            }
        );
        // reset spin to 0. causes slight jitter
        await wrapperControls.start(
            {
                rotate: 0,
            },
            {
                repeat: 0,
                ease: "linear",
                duration: 0,
            }
        );
        return await wrapperControls.start(
            {
                rotate: 360,
            },
            {
                repeat: Infinity,
                ease: "linear",
                duration,
            }
        );
    }

    React.useEffect(() => {
        changeDistance(distance, distanceSpeed);
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [ distance ]);

    React.useEffect(() => {
        setSpin(spinSpeed);
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [ spinSpeed ]);
    
    return (
        <Wrapper
            animate={wrapperControls}
            style={{ rotate }}
            ref={wrapperRef}
        >
            <BlueCircle 
                size={size}
                border={border}
                initial={{ x: distance + '%' }}
                animate={blueControls}
            />
            <GreenCircle
                size={size}
                border={border}
                initial={{ x: '-' + distance + '%' }}
                animate={greenControls}
            >
                <InnerCircle 
                    size={size}
                    border={border}
                    initial={{ x: (distance * 2) + '%' }}
                    animate={innerControls}
                />
            </GreenCircle>
        </Wrapper>
    )
}