import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import devices from '../styles/devices';

const Container = styled.div`
    form {
        width: 400px;

        input, textarea {
            width: 100%;
            margin: 0 0 0 1rem;
            padding: 0;
            box-sizing: border-box;
            border-radius: 12px;
        }

        textarea {
            height: 200px;
        }

        div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        label {
            width: 4rem;
            text-align: right;
        }

        @media ${devices.tablet} {
            width: 100%;
            margin: auto;
            padding-right: 4rem;
        }

        @media ${devices.mobileL} {
            width: 100%;
            padding: 0;
            input, textarea {
                margin: 0;
            }
            div {
                flex-direction: column;
                margin-bottom: 0.3rem;
            }
            label {
                width: auto;
                text-align: left;
                padding: 0;
                margin: 0;
            }       
        }
    }
`;

const SubmitDiv = styled.div`
    button {
        margin: 0;
        margin-left: 5rem;
        padding: 0;
        width: 100%;
        border-radius: 12px;
        border: none;
        background-color: ${colors.blue};
        color: ${colors.light};

        text-shadow: 1px 1px 0 ${colors.dark};

        @media ${devices.mobileL} {
            margin: 0;        
        }
    }
`;

export default function ContactForm() {
    return (
        <Container>
            <form
                name="contact"
                method="POST"
                netlify-honeypot="honey"
                data-netlify="true"
                enctype="application/x-www-form-urlencoded"
                >
                <input name="contact" value="Netlify" type="hidden" />
                <div>
                    <label for="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        />
                </div>
                <div>
                    <label for="subject">Subject</label>
                    <input
                        type="subject"
                        id="subject"
                        name="subject"
                        />
                </div>
                <div>
                    <label for="body">Message</label>
                    <textarea
                        type="body"
                        id="body"
                        name="body"
                        />
                </div>
                <div style={{ height: 0, opacity: 0, overflow: 'hidden', }}>
                    <label for="honey">Don't fill this part if you are human:</label>
                    <input
                        id="honey"
                        name="honey"
                        />
                </div>
                <SubmitDiv>
                    <button type="submit">Send</button>
                </SubmitDiv>
            </form>
        </Container>
    )
}