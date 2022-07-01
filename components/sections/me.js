import { Box, chakra } from "@chakra-ui/react";
import Image from 'next/image'

import DynamicText from "../dynamic-text/dynamic-text";


const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const MeSection = () => (
    <Box
        borderRadius="lg"
        p={3}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height={'90vh'}
    >
        <DynamicText />
        <Box
            borderColor="#3e3e3e"
            borderWidth={1}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            marginTop={10}
        >
            <ProfileImage
                src="/images/danylboiko.jpg"
                alt="Profile image"
                borderRadius="full"
                width="150px"
                height="150px"
            />
        </Box>
    </Box>
)

export default MeSection;