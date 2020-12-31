import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import zindex from '../styles/zindex';

import { motion, useAnimation, useMotionValue } from 'framer-motion';
import getRotate from '../lib/getRotate';

const Wrapper = styled(motion.div)`
    position: absolute;
    transform: rotate(-45deg);
    z-index: ${zindex.overlay};
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Circle = styled(motion.div)`
    position: absolute;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 100%;
    border: ${props => props.border}px solid ${colors.dark};
    box-shadow: 1px 1px 10px ${colors.black};
`;
const BlueCircle = styled(Circle)`
    border-color: ${colors.blue};
`;
const GreenCircle = styled(Circle)`
    border-color: ${colors.green};
    overflow: hidden;
`;
const InnerCircle = styled(Circle)`
    top: -3px;
    left: -3px;
    background: linear-gradient(45deg, ${colors.green}, ${colors.blue});
    border: none;
`;

export default function BlueGreenCircle(props) {
    const { size, border, distance, spin, } = props;
    const [ prevSpin, setPrevSpin ] = React.useState(spin);
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
        setPrevSpin(duration);
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

    const changeSpeed = (rate) => {
        rotate.set(rate);
    }

    React.useEffect(() => {
        changeDistance(distance, 0.2);
        setSpin(spin);
        // setInterval(() => console.log(getRotate(wrapperRef.current)), 10);
    }, [ distance, spin ]);
    
    return (
        <Wrapper
            animate={wrapperControls}
            style={{ rotate }}
            ref={wrapperRef}
        >
            <BlueCircle 
                size={size}
                border={border}
                animate={blueControls}
            />
            <GreenCircle
                size={size}
                border={border}
                animate={greenControls}
            >
                <InnerCircle 
                    size={size}
                    border={border}
                    animate={innerControls}
                />
            </GreenCircle>
        </Wrapper>
    )
}