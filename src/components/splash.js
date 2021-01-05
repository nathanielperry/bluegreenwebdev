import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import zindex from '../styles/zindex';

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
    height: 50vh;
    z-index: ${zindex.overlay + 100};
    text-align: left;
`;

const SplashTextLine = styled.p`
    width: 100%;
    padding: 0 6rem;
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

export default function Splash({ setIsNavBarHidden, setIsAnimationComplete }) {
    const [ isBackdropShown, setIsBackdropShown ] = React.useState(false);
    const [ isCircleShown, setIsCircleShown ] = React.useState(true);
    const [ isDotsShown, setIsDotsShown ] = React.useState(true);

    const [ distance, setDistance ] = React.useState(200);
    const [ distanceSpeed, setDistanceSpeed ] = React.useState(5);
    const [ splashTextList, setSplashTextList ] = React.useState([[]]);
    const [ spinSpeed, setSpinSpeed ] = React.useState(6);

    const addSplashText = (text, isNewLine = false) => {
        //copy the text list to a temporary mutable rows array
        const rows = splashTextList.slice(0);
        if (!isNewLine) {
            //Add new text to end of last row.
            rows[rows.length - 1].push(text);
        } else {
            //Add new row at end with text inside.
            rows.push([text]);
        }
        setSplashTextList(rows);
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
        await setDistanceAsync(50, 5.5);
        addSplashText('Hello,');
        await setDistanceAsync(30, 2);
        addSplashText('my name is Nathaniel.');
        await setSpinSpeed(0.5);
        await setDistanceAsync(200, 0.5);
        await setDistanceAsync(0, 5);
        addSplashText('I am a full stack web developer with a passion for design.', true);
        setIsBackdropShown(true);
        setIsCircleShown(false);
        setIsDotsShown(false);
        await timer(1);
        setIsNavBarHidden(false);
        setIsAnimationComplete(true);
        localStorage.setItem("bgwd_animation-complete", "yes");
    };

    const sequenceQuick = async () => {
        setIsAnimationComplete(true);
        setIsDotsShown(false);
        setSpinSpeed(1);
        setDistanceAsync(0, 1);
        await timer(0.955);
        setIsCircleShown(false);
        setIsBackdropShown(true);
        addSplashText('Hello,');
        addSplashText('my name is Nathaniel.');
        addSplashText('I am a full stack web developer with a passion for design.', true);
        setIsNavBarHidden(false);
    }

    const testSequence = async () => {
        addSplashText('Hello,');
        await timer(0.5);
        addSplashText('my name is Nathaniel.');
        await timer(0.5);
        addSplashText('I am a full stack web developer with a passion for design.', true);
    }

    React.useEffect(() => {
        if (localStorage.getItem("bgwd_animation-complete") === "yes") {
            sequenceQuick();
        } else {
            sequence();
        }
    }, []);

    return (
        <Section>
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
                {
                    splashTextList.map((line, i) => (
                        <SplashTextLine
                        key={`line-${i}`}
                        >
                            { 
                                line.map((text, j) => (
                                    <>
                                        <SplashText key={`st-${i}-${j}`}>{text}</SplashText>
                                    </>
                                ))
                            }
                            { isDotsShown && i === splashTextList.length -1 && <Dots/> }
                        </SplashTextLine>
                    ))
                }
            </TextContainer>
        </Section>
    )
}