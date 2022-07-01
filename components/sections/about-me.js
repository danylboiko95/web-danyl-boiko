import {
    Heading,
    Box,
} from '@chakra-ui/react'
import Paragraph from '../paragraph'

const AboutMe = () => (
    <Box
        borderRadius="lg"
        mb={6}
        p={3}
    >
        <Heading as="h3" variant="section-title">
            About me
        </Heading>
        <Paragraph>
            <Box mb={5}>
                I am an experienced software engineer with 5 years of experience in the IT industry. I started my career
                in the field of 3D graphics (3ds MAX) and Unreal Engine with C++ basics.
            </Box>

            <Box mb={5}>
                After 2 years in this domain, I decided to dig deeper into programming, and found that creating products is
                my passion. I worked as a Full-stack developer (C#, SQL, React/Angular.js) and have completed the migration
                from Angular.js. to React. I had experience with blockchain technologies. I developed it from
                scratch to production as a team lead. I worked on high-performance WebAssembly JS charts with 2D/3D
                WebGL. As a contact point from the development team, continuously supported customer requests and
                enhancements.
            </Box>

            <Box mb={5}>
                On a volunteer basis, I gathered and taught a group of 15 beginner programmers.
                Mentored the middle developer to the senior level.
                The upcoming goals are to study DevOps and pass AWS architect certification.
            </Box>
        </Paragraph>
    </Box>
)

export default AboutMe;