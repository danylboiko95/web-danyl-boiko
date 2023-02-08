import {
    Heading,
    Box,
} from '@chakra-ui/react'
import AnimationWrapper from '../animation-wrapper/animation-wrapper';
import BoxWrapper from '../box-wrapper';
import Paragraph from '../paragraph'
import WordWrapper from '../word-wrapper';

const AboutMe = () => (
    <BoxWrapper>
        <AnimationWrapper>
            <Heading as="h3" variant="section-title">
                About me
            </Heading>
        </AnimationWrapper>
        <Paragraph>
            <AnimationWrapper>
                <Box mb={5}>
                    I am an experienced software engineer with 6 years of experience in the IT industry.
                    Before starting my journey in the programming world, I worked on <WordWrapper text={'3D graphics (3ds MAX)'} /> and Unreal Engine with C++ basics.
                    After 2 years working at 3D domain, I decided to dig deeper into programming and found that creating products is my passion.
                </Box>
            </AnimationWrapper>

            <AnimationWrapper>
                <Box mb={5}>
                    I have been working as a <WordWrapper text={'Full-Stack'} /> developer (C#, SQL, React/Angular.js)
                    and have completed the migration from Angular.js to React.
                    I had experience with blockchain technologies on the product
                    I developed from scratch to production as a <WordWrapper text={'Team-leader'} />.
                    I have got a high level of experience working on
                    high-performance <WordWrapper text={'WebAssembly'} /> JS charts with 2D/3D WebGL.
                    As a contact point from the development team, my responsibility was to support customer requests and enhancements.
                </Box>
            </AnimationWrapper>

            <AnimationWrapper>
                <Box mb={5}>
                    On a volunteer basis, I have gathered a group of 15 junior engineers and taught them
                    the basics of programming language.
                    Also, I have experience in mentoring a middle developer
                    to the <WordWrapper text={'Senior'} /> level.
                    I am non stop learner, so my upcoming goal is to explore DevOps and pass
                    AWS architect certification.
                </Box>
            </AnimationWrapper>
        </Paragraph>
    </BoxWrapper>
)

export default AboutMe;