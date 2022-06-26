import { Box, Heading } from "@chakra-ui/react"
import Typed from 'typed.js';
import { useEffect, useRef } from "react";


const DynamicText = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["React", "Node.JS", "Full-stack", "Software"],
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
            <Heading as="h2" >
                <Box color={'blue'} display={{ base: 'inline-block' }} ref={el}></Box>
                <Box display={{ base: 'block', md: 'inline-block' }} >
                    developer
                </Box>
            </Heading>
        </Box>)
}

export default DynamicText