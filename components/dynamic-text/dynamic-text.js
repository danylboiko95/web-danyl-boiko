import { Box } from "@chakra-ui/react"
import Typed from 'typed.js';
import { useEffect, useRef } from "react";


const DynamicText = ({ text, loop = false, startDelay = 300, typeSpeed = 200, showCursor = false }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: text,
            startDelay,
            typeSpeed,
            backSpeed: 100,
            backDelay: 100,
            showCursor,
            loop
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <Box textShadow={'red -2px 0, cyan 2px 0'} display={{ base: 'inline' }} ref={el}></Box>
    )
}

export default DynamicText