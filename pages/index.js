import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  useMediaQuery
} from '@chakra-ui/react'

import VoxelComputerLoader from '../components/computer-loader'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import ParticlesBackground from '../components/particle'
import dynamic from 'next/dynamic'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import DynamicText from '../components/dynamic-text/dynamic-text'
import Logo from '../components/logo/logo'
import PreviewVideo from '../components/preview-video/preview-video'
import AnimationWrapper from '../components/animation-wrapper/animation-wrapper'


const LazyComputer = dynamic(() => import('../components/computer-dog'), {
  ssr: false,
  loading: () => <VoxelComputerLoader />
})
console.log(LazyComputer)
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {

  const [showPreviewVideo, setShowPreviewVideo] = useState(false);

  // console.log(videoRef)
  const [refMain, inViewMain] = useInView();
  const [refSub, inViewSub] = useInView();

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

        window.scrollTo(0, 0)
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
                transition={{ duration: 1, type: 'easeInOut' }}
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
                  height={'100vh'}
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
                    height={'100vh'}
                    fontSize={'2.0rem'}
                    color={'white'}
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
                    <Box align="center" my={4}>
                      <NextLink href="/" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                          My portfolio
                        </Button>
                      </NextLink>
                    </Box>
                  </Box>

                </AnimationWrapper>

                <AnimationWrapper>
                  <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                  >

                    <Heading as="h3" variant="section-title">
                      About my experience
                    </Heading>
                    <BioSection>
                      <BioYear>1995</BioYear>
                      Born in Kharkiv, Ukraine.
                    </BioSection>
                    <BioSection>
                      <BioYear>Nov 2015</BioYear>
                      As a 3D’s Max artist I had a huge experience related not only for 3D’s Max but for additional fields.
                      As a TeamLead, Mentor, Project Manager. For part time I was a tutor in 3D max.
                      Also had a small experience with Unreal Engine.
                    </BioSection>
                    <BioSection>
                      <BioYear>Mar 2017</BioYear>
                      Full-stack developer - TEAMinterantional, Ukraine
                      The previous project was a backend on C# Web.api,
                      front end on Angular.js, the database on MSSQL, the cloud environment on AZURE.
                      Main project was related to improvement of ecology based on blockchain technology with own tokens and work with Metamask.
                      Also was two MVP projects.
                    </BioSection>
                    <BioSection>
                      <BioYear>Feb 2019</BioYear>
                      High loaded 2D/3D charts created by WebAssembly
                    </BioSection>
                    <BioSection>
                      <BioYear>Dec 2020 </BioYear>
                      World leaders in predicting and improving ad effectiveness
                    </BioSection>
                  </Box>

                </AnimationWrapper>

                <AnimationWrapper yValue={0} scale={1}>
                  <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                  >
                    <Heading as="h3" variant="section-title">
                      On the web
                    </Heading>
                    <List>
                      <ListItem>
                        <Link href="https://github.com/danylboiko95" target="_blank">
                          <Button
                            variant="ghost"
                            colorScheme="teal"
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
                            colorScheme="teal"
                            leftIcon={<IoLogoInstagram />}
                          >
                            @danyl_boiko
                          </Button>
                        </Link>
                      </ListItem>
                    </List>
                  </Box>

                </AnimationWrapper>
              </motion.article>
            </>)
        }
      </Container>
    </Layout >
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
