import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import colors from '../styles/colors';
import devices from '../styles/devices';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import SkillIcon from './skillicon';

const List = styled.ul`
    width: 275px;
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 100px);
    gap: 1rem;

    @media ${devices.mobileL} {
        grid-template-rows: repeat(2, 70px);
        gap: 0.5rem;
    }
`;

const OuterContainer = styled.div`
    position: relative;
    width: 600px;
    margin: auto;
`;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 425px;
    height: 325px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2.5rem;
    border: 3px solid ${colors.dark};
    border-radius: 25px;
    box-shadow: 4px 4px 0px ${colors.orange};
    
    background: linear-gradient(${colors.light}, ${colors.lightgray}); 

    @media ${devices.laptop} {
        width: 330px;
    }

    @media ${devices.tablet} {
        width: 300px;
    }

    @media ${devices.mobileL} {
        width: 270px;
        height: 250px;
    }

    @media ${devices.mobileM} {
        width: 240px;
        height: 250px;
    }

    @media ${devices.mobileS} {
        width: 200px;
        height: 225px;
        padding: 1rem 1rem 3rem;
    }
`;

const ContainerA = styled(Container)`

`;
const ContainerB = styled(Container)`
    transform: translate(${props => props.initialXIntersect}%, ${props => props.initialYIntersect}%);
    overflow: hidden;
    @media ${devices.mobileL} {
        padding: 3rem 1rem 1rem;
    }
`;
const InnerContainer = styled(Container)`
    top: -3px;
    left: -2px;
    transform: translate(-${props => props.initialXIntersect}%, -${props => props.initialYIntersect}%);
    background: linear-gradient(.85turn, ${colors.orange}, 25%, ${colors.light});
    box-shadow: none;
    border-color: ${colors.dark};
`;

export default function SkillsList({ xIntersect, yIntersect }) {
    const data = useStaticQuery(graphql`
        query IconsQuery {
            allFile(filter: { sourceInstanceName: { eq: "icons" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);

    //Format data into list of skills objects
    const skills = data.allFile.edges.map(edge => ({
        name: edge.node.name,
        publicURL: edge.node.publicURL,
    }));

    // const aControls = useAnimation();
    const bControls = useAnimation();
    const innerControls = useAnimation();

    const moveContainers = async (xIntersect, yIntersect, timing) => {
        const transition = { duration: timing };
        // aControls.start({
        //     x: xIntersect + '%',
        //     y: yIntersect + '%',
        //     transition,
        // });
        bControls.start({
            x: xIntersect + '%',
            y: yIntersect + '%',
            transition,
        });
        innerControls.start({
            x: -xIntersect + '%',
            y: -yIntersect + '%',
            transition,
        });
    };

    React.useEffect(() => {
        moveContainers(xIntersect, yIntersect, 200);
    }, [xIntersect, yIntersect])

    return (
        <OuterContainer>
            <ContainerA>
                <List>
                    {skills.slice(0, 6).map(skill => (
                        <li><SkillIcon skill={skill} /></li>
                    ))}
                </List>
            </ContainerA>
            <ContainerB
                initialXIntersect={xIntersect}
                initialYIntersect={yIntersect}
                animate={bControls}
            >
                <InnerContainer 
                    initialXIntersect={xIntersect}
                    initialYIntersect={yIntersect}
                    animate={innerControls}
                />
                <List>
                    {skills.slice(6, 12).map(skill => (
                        <li><SkillIcon skill={skill} /></li>
                    ))}
                </List>
            </ContainerB>
        </OuterContainer>
    )
}