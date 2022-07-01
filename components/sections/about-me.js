import {
    Heading,
    Box,
} from '@chakra-ui/react'
import BoxWrapper from '../box-wrapper';
import Paragraph from '../paragraph'
import WordWrapper from '../word-wrapper';

const AboutMe = () => (
    <BoxWrapper>
        <Heading as="h3" variant="section-title">
            About me
        </Heading>
        <Paragraph>
            <Box mb={5}>
                I am an experienced software engineer with 5 years of experience in the IT industry. I started my career
                in the field of <WordWrapper text={'3D graphics (3ds MAX)'} /> and Unreal Engine with C++ basics.
            </Box>

            <Box mb={5}>
                After 2 years in this domain, I decided to dig deeper into programming, and found that creating products is
                my passion. I worked as a <WordWrapper text={'Full-stack'} /> developer (C#, SQL, React/Angular.js) and have completed the migration
                from Angular.js to React. I had experience with blockchain technologies. I developed it from
                scratch to production as a team lead. I worked on high-performance <WordWrapper text={'WebAssembly JS '} />
                charts with 2D/3D WebGL. As a contact point from the development team, continuously supported customer requests and
                enhancements.
            </Box>

            <Box mb={5}>
                On a volunteer basis, I gathered and taught a group of 15 beginner programmers.
                Mentored the middle developer to the <WordWrapper text={'senior level.'} />
                The upcoming goals are to study DevOps and pass AWS architect certification.
            </Box>
        </Paragraph>
    </BoxWrapper>
)

export default AboutMe;