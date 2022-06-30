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
            <Heading as="h1" fontSize={{ base: "22px", md: "24px" }}>
                Danyl Boiko
            </Heading>
            <Heading as="h2" fontSize={{ base: "22px", md: "24px" }}>
                <Box
                    textShadow={'red -2px 0, cyan 2px 0'} display={{ base: 'inline-block' }} ref={el}></Box>
                <Box display={{ base: 'block', md: 'inline-block' }} >
                    developer
                </Box>
            </Heading >
        </Box >)
}

export default DynamicText