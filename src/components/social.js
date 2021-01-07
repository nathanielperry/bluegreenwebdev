import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import colors from '../styles/colors';
import devices from '../styles/devices';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;

    a {
        color: ${colors.light};
    }

    img {
        width: 192px;
        height: 192px;
    }

    @media ${devices.tablet} {
        width: 110px;
        margin: auto;
        flex-direction: row;
        justify-content: space-between;

        p {
            display: none;
        }

        img {
            width: 50px;
            height: 50px;
        }
    }

    @media ${devices.mobileL} {
        padding-top: 1rem;
        padding-bottom: 4rem;        
    }
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function SocialMedia() {
    const data = useStaticQuery(graphql`
        query SocialMediaQuery {
            allFile(filter: { sourceInstanceName: { eq: "social" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `)
    
    const socialMediaIcons = {};
    data.allFile.edges.forEach(edge => {
        socialMediaIcons[edge.node.name] = edge.node.publicURL; 
    });

    const socialMedia = [
        {
            name: "Github",
            icon: socialMediaIcons["github"],
            handle: "nathanielperry",
            url: "https://github.com/nathanielperry/",
        },
        {
            name: "Twitter",
            icon: socialMediaIcons["twitter"],
            handle: "@BlueGreenWebDev",
            url: "https://twitter.com/BlueGreenWebDev",
        },
    ]

    return (
        <Container>
            {socialMedia.map(media => (
                <div>
                    <a href={media.url}><img src={media.icon} alt={media.name}/></a>
                    <Flex>
                        <p>{media.name} </p>
                        <p><a href={media.url}>{media.handle}</a></p>
                    </Flex>
                </div>
            ))}
        </Container>
    )
}