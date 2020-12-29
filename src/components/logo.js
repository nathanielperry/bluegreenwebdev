import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

export default function Logo({ siteTitle }) {
    return (
        <div>
            <Link to="/">
                {siteTitle}
            </Link>
        </div>
    )
}