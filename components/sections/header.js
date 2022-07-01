import { Box, Heading } from "@chakra-ui/react"
import DynamicText from "../dynamic-text/dynamic-text";


const Header = () => {

    return (
        <Box textAlign='center'>
            <Heading as="h1" fontSize={{ base: "22px", md: "24px" }}>
                Danyl Boiko
            </Heading>
            <Heading as="h2" fontSize={{ base: "22px", md: "24px" }}>
                <DynamicText loop showCursor text={["React", "Node.JS", "Full-stack", "Software"]} />
                <Box display={{ base: 'block', md: 'inline-block' }} >
                    developer
                </Box>
            </Heading >
        </Box >)
}

export default Header