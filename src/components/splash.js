import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import devices from '../styles/devices';
import zindex from '../styles/zindex';
import { motion } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';

import BlueGreenCircle from './circle';
import Dots from './dots';
import SplashText from './splashtext';

const Section = styled.section`
    height: 100vh;
    background: linear-gradient(${colors.dark}, ${colors.gray});

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const TextContainer = styled.div`
    width: 100%;
    height: 50vh;
    z-index: ${zindex.overlay + 100};
    text-align: left;
`;

const SplashTextLine = styled.p`
    width: auto;
    padding: 0 6rem;
    @media ${devices.mobileL} {
        padding: 0 2rem;
    }
`;

const ReplayLink = styled(motion.a)`
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    padding: 0rem 1rem;
    color: black;
    opacity: 0.4;
    line-height: 1.8rem;
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;

    img {
        width: 1.8rem;
        height: 1.8rem;
    }
`;

const Backdrop = styled.div`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, ${colors.green}, ${colors.blue});
    clip-path: circle(75px);
    animation: 0.3s splashIn ease-in forwards;

    @keyframes splashIn {
        25% {
            opacity: 1;
        }
        100% {
            opacity: 1;
            clip-path: circle(100%);
        }
    }
`;

export default function Splash({ setIsNavBarHidden, isAnimationComplete, setIsAnimationComplete }) {
    const [ isBackdropShown, setIsBackdropShown ] = React.useState(false);
    const [ isCircleShown, setIsCircleShown ] = React.useState(true);

    const initialDistance = 200;
    const initialDistanceSpeed = 5;
    const initialSpinSpeed = 6;
    const [ distance, setDistance ] = React.useState(initialDistance);
    const [ distanceSpeed, setDistanceSpeed ] = React.useState(initialDistanceSpeed);
    const [ spinSpeed, setSpinSpeed ] = React.useState(initialSpinSpeed);

    const [ splashCount, setSplashCount ] = React.useState(0);

    const data = useStaticQuery(graphql`
        query RefreshIcon {
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);

    const refreshIconUrl = data.allFile.edges[0].node.publicURL;

    const clearSplashText = () => {
        setSplashCount(0);
    }

    const setDistanceAsync = (newDistance, newSpeed) => {
        setDistanceSpeed(newSpeed);
        setDistance(newDistance);
        return timer(newSpeed);
    }

    const timer = (seconds) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

    const sequence = async () => {
        await setDistanceAsync(50, 2.5);
        setSplashCount(1);
        await setDistanceAsync(30, 2);
        setSplashCount(2);
        await setSpinSpeed(0.8);
        await setDistanceAsync(150, 1);
        await setDistanceAsync(0, 1);
        setSplashCount(3);
        setIsBackdropShown(true);
        setIsCircleShown(false);
        await timer(1);
        setIsNavBarHidden(false);
        setIsAnimationComplete(true);
    };

    const sequenceQuick = async () => {
        setSpinSpeed(1);
        setDistanceAsync(0, 1);
        await timer(0.955);
        setIsCircleShown(false);
        setIsBackdropShown(true);
        setSplashCount(3);
        setIsNavBarHidden(false);
        setIsAnimationComplete(true);
    }

    const replay = async () => {
        await timer(0.4);
        setIsBackdropShown(false);
        clearSplashText();
        await setDistanceAsync(initialDistance, 0.1);
        setSpinSpeed(initialSpinSpeed);
        setIsNavBarHidden(true);
        setIsCircleShown(true);
        setIsAnimationComplete(false);
        sequence();
    }

    React.useEffect(() => {
        if (isAnimationComplete) {
            sequenceQuick();
        } else {
            sequence();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    return (
        <Section id="intro">
            { isBackdropShown && <Backdrop/> }
            { isCircleShown && 
                <BlueGreenCircle
                    size={150} 
                    border={3} 
                    distance={distance}
                    distanceSpeed={distanceSpeed}
                    spinSpeed={spinSpeed}
                />
            }
            <TextContainer>
                <SplashTextLine>
                    {splashCount >= 1 && <SplashText>Hello,</SplashText>}
                    {splashCount >= 2 && <SplashText>my name is Nathaniel.</SplashText>}
                    {splashCount < 2 && <Dots />}
                </SplashTextLine>
                <SplashTextLine>
                    {splashCount >= 3 && <SplashText>I am a full stack web developer with a passion for design.</SplashText>}
                    {splashCount === 2 && <Dots />} 
                </SplashTextLine>
            </TextContainer>
            { isBackdropShown && 
                <ReplayLink
                    to="intro"
                    smooth={true}
                    duration={300}
                    onClick={replay}
                    initial="rest"
                    animate="rest"
                    whileHover="spin"
                    variants={{
                        rest: { opacity: 0.4 },
                        spin: { opacity: 1 }
                    }}
                >
                    Replay
                    <motion.img 
                        src={refreshIconUrl}
                        variants={{
                            rest: { rotate: 0 },
                            spin: { rotate: 360 }
                        }}
                    />
                </ReplayLink>
            }   
        </Section>
    )
}