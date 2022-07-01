import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra,
  useMediaQuery
} from '@chakra-ui/react'

import VoxelComputerLoader from '../components/computer-loader'

import Paragraph from '../components/paragraph'
import {
  BioCompany,
  BioWrapper,
  BioSection,
  Pre,
  Line,
  LineNo,
  LineContent,
  BioYear,
  BioCompanyAbout
} from '../components/bio'
import Layout from '../components/layouts/article'


import { IoLogoInstagram, IoLogoGithub, IoDownload } from 'react-icons/io5'

import Image from 'next/image'
import ParticlesBackground from '../components/particle'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import DynamicText from '../components/dynamic-text/dynamic-text'
import Logo from '../components/logo/logo'
import PreviewVideo from '../components/preview-video/preview-video'
import AnimationWrapper from '../components/animation-wrapper/animation-wrapper'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const LazyComputer = dynamic(() => import('../components/computer-dog'), {
  ssr: false,
  loading: () => <VoxelComputerLoader />
})

const exampleCode = `{
  technologies: [
    React: { years: 5 },
    NodeJS: { years: 3 },
    NextJS: { years: 2 },
    CSharp: { years: 2 },
    Typescript: { years: 3 }
  ],
  databases: [ 
      'MongoDB',
      'PostgreSQL'
    ],
  infrastructure: [
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure'
  ],
  clouds: [
    'AWS',
    'Azure', 
    'Vercel'
  ],
  methodologies: [
    'Agile',
    'Scrum',
    'Kanban',
    'Waterfall'
  ],
  microservices: true,
  monolith: true
}
`;
const exampleCodeBig = `{
  technologies: [
    React: { years: 5 },
    NodeJS: { years: 3 },
    NextJS: { years: 2 },
    CSharp: { years: 2 },
    Typescript: { years: 3},
    Canvas: { years: 1}
  ],
  databases: ['MongoDB', 'PostgreSQL', 'Redis'],
  infrastructure: ['Docker', 'Kubernetes'],
  clouds: ['AWS', 'Azure', 'Vercel'],
  methodologies: ['Agile', 'Scrum', 'Kanban', 'Waterfall'],
  microservices: true,
  monolith: true
}
`;

const Home = () => {
  const [isLessThan800] = useMediaQuery('(max-width: 800px)')

  const [showPreviewVideo, setShowPreviewVideo] = useState(false);

  const [percent, setPercent] = useState(0);

  const variants = {
    hidden: { opacity: 0, y: 0 },
    enter: { opacity: 1, y: 0 },
  }

  useEffect(() => {

    if (percent >= 95) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        window.scrollTo(0, 0)

      }, 300)

    }
    console.log(percent)
    if (percent >= 95.0001) {
      setTimeout(() => {
        setShowPreviewVideo(true)

        window.scrollTo(0, 0)

      }, 500)
      setTimeout(() => {


        document.body.style.overflow = 'auto'
      }, 1000)
    }
  }, [percent])

  return (
    <Layout>
      <Container
        css={{
          height: '100vh'
        }}
        color={'white'}>
        {!showPreviewVideo
          ? (<PreviewVideo setPercent={setPercent} percent={percent} />)
          : (
            <>
              <motion.article
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 1, type: 'easeInOut', delay: 1 }}
                style={{ position: 'relative' }}
              >
                <Logo />
                <Box
                  position='absolute' height="100vh" zIndex='-9999'>

                  <ParticlesBackground id='5' isFullSize />
                </Box>

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

                <AnimationWrapper>
                  <Box
                    borderRadius="lg"
                    p={3}
                    textAlign="center"
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    height={'90vh'}
                    color={'white'}
                    fontSize={{ base: "22px", md: "24px" }}
                  >
                    Hello, I&apos;m a software developer from Ukraine 🇺🇦
                    <LazyComputer />

                  </Box>

                </AnimationWrapper>
                <AnimationWrapper>
                  <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                  >
                    <Heading as="h3" variant="section-title">
                      Work
                    </Heading>
                    <Paragraph>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                      to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                      , remaining essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum
                    </Paragraph>
                  </Box>

                </AnimationWrapper>

                <Box
                  borderRadius="lg"
                  mb={6}
                  p={3}
                >
                  <AnimationWrapper>
                    <Heading as="h3" variant="section-title">
                      Journey
                    </Heading>
                  </AnimationWrapper>

                  <AnimationWrapper>
                    <BioSection>
                      <BioYear>Dec 2020</BioYear>
                      <BioWrapper>
                        <BioCompany>React developer - System1Group, Remote, United Kingdom 🇬🇧</BioCompany>
                        <BioCompanyAbout>
                          World leaders in predicting and improving ad effectiveness
                        </BioCompanyAbout>
                      </BioWrapper>
                    </BioSection>
                  </AnimationWrapper>

                  <AnimationWrapper>
                    <BioSection>
                      <BioYear>Feb 2019</BioYear>
                      <BioWrapper>
                        <BioCompany>Typescript developer - SciChart, Remote, United Kingdom 🇬🇧</BioCompany>
                        <BioCompanyAbout>
                          High loaded 2D/3D charts created by WebAssembly
                        </BioCompanyAbout>
                      </BioWrapper>
                    </BioSection>
                  </AnimationWrapper>

                  <AnimationWrapper>
                    <BioSection>
                      <BioYear>Mar 2017</BioYear>
                      <BioWrapper>
                        <BioCompany>Full-stack developer - TEAMinterantional, Ukraine 🇺🇦</BioCompany>
                        <BioCompanyAbout>
                          The previous project was a backend on C# Web.api,
                          front end on Angular.js, the database on MSSQL, the cloud environment on AZURE.
                          Main project was related to improvement of ecology based on blockchain technology with own tokens and work with Metamask.
                          Also was two MVP projects.
                        </BioCompanyAbout>
                      </BioWrapper>
                    </BioSection>
                  </AnimationWrapper>

                  <AnimationWrapper>
                    <BioSection>
                      <BioYear>Nov 2015</BioYear>
                      <BioWrapper>
                        <BioCompany>Self-employed</BioCompany>
                        <BioCompanyAbout>
                          As a 3D&apos;s Max artist I had a huge experience related not only for 3D&apos;s Max
                          but for additional fields.
                          As a TeamLead, Mentor, Project Manager. For part time I was a tutor in 3D max.
                          Also had a small experience with Unreal Engine.
                        </BioCompanyAbout>
                      </BioWrapper>
                    </BioSection>
                  </AnimationWrapper>

                  <AnimationWrapper>
                    <Heading as="h3" variant="section-title">
                      Technologies
                    </Heading>
                    <Box
                      overflow="hidden"
                    >
                      <Highlight
                        {...defaultProps}
                        theme={theme}
                        code={isLessThan800 ? exampleCode : exampleCodeBig}
                        language="jsx">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                          <Pre className={className} style={style}>
                            {tokens.map((line, i) => (
                              <Line key={i} {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                <LineContent>
                                  {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                  ))}
                                </LineContent>
                              </Line>
                            ))}
                          </Pre>
                        )}
                      </Highlight>
                    </Box>
                  </AnimationWrapper>
                </Box>

                <Box
                  borderRadius="lg"
                  mb={6}
                  p={3}
                >
                  <Heading as="h3" variant="section-title">
                    Links
                  </Heading>
                  <List>
                    <ListItem>
                      <Link href="https://github.com/danylboiko95" target="_blank">
                        <Button
                          variant="ghost"
                          color={'blue'}
                          leftIcon={<IoLogoGithub />}
                        >
                          @danylboiko95
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="https://instagram.com/danyl_boiko" target="_blank">
                        <Button
                          variant="ghost"
                          color={'blue'}
                          leftIcon={<IoLogoInstagram />}
                        >
                          @danyl_boiko
                        </Button>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="./pdf/Danyl_Boiko_CV.pdf" target="_blank" download>
                        <Button
                          variant="ghost"
                          color={'blue'}
                          leftIcon={<IoDownload />}
                        >
                          Download CV
                        </Button>
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </motion.article>
            </>)
        }
      </Container >
    </Layout >
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
