import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import devices from '../styles/devices';

const Form = styled.form`
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
        display: inline-block;
        width: 5rem;
        text-align: right;
    }

    @media ${devices.tablet} {
        width: 80%;
        margin: auto;
        padding-right: 4rem;
    }
`;

const Submit = styled.button`
    margin: 0;
    margin-left: 5rem;
    padding: 0;
    width: 100%;
    border-radius: 12px;
    border: none;
    background-color: ${colors.blue};
    color: ${colors.light};

    text-shadow: 1px 1px 0 ${colors.dark};
`;

export default function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        //TODO: Handle form submission here.
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                />
            </div>
            <div>
                <label htmlFor="subject">Subject</label>
                <input
                    type="subject"
                    id="subject"
                    name="subject"
                />
            </div>
            <div>
                <label htmlFor="body">Message</label>
                <textarea
                    type="body"
                    id="body"
                    name="body"
                />
            </div>
            <div>
                <Submit>Send</Submit>
            </div>
        </Form>
    )
}