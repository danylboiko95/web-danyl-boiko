import { Box, Heading } from "@chakra-ui/react"
import styled from '@emotion/styled'
import Typed from 'typed.js';
import { useEffect, useRef } from "react";


export const ProgrammingText = styled.span`
    color: #fefe22
`


const DynamicText = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["React", "Node.JS", "Full-stack", "Software"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <Box textAlign='center'>
            <Heading as="h1" fontSize='35px' variant="page-title">
                Danyl Boiko
            </Heading>
            <Heading as="h2" fontSize='35px' variant="page-title">
                <ProgrammingText ref={el}></ProgrammingText> developer
            </Heading>
        </Box>)
}

export default DynamicText