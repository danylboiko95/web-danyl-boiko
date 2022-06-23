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

import VoxelDogLoader from '../components/voxel-dog-loader'
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
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'


const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
console.log(LazyVoxelDog)
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {


  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const [isComplete, setIsComplete] = useState(false);
  const [hide, setHide] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const videoRef = useRef()

  // console.log(videoRef)
  const [currentTime, setCurrentTime] = useState(null);
  const [percent, setPercent] = useState(0);
  const videoSrc = './videos/m2.MOV'

  const [isLessThan600] = useMediaQuery('(max-width: 600px)')
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

      setHide(true)
    }
    console.log(percent)
    if (percent >= 95.0001) {
      setTimeout(() => {

        window.scrollTo(0, 0)
        document.body.style.overflow = 'auto'
      }, 1000)
    }
  }, [percent])

  useEffect(() => {
    setAutoplay(false)
    // videoRef.current.currentTime = 1

    setInterval(() => {

      if (typeof window !== "undefined") {
        var h = document.documentElement,
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';

        var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        if (videoRef && videoRef.current && !hide) {

          videoRef.current.currentTime = 0.01
        }
        if (videoRef && videoRef.current && percent && !hide) {


          var seconds = videoRef.current.duration % 60
          setPercent(percent)

          videoRef.current.currentTime = ((seconds * percent) / 100).toFixed(2)

        }
      }
    }, 33.7);
  }, [])

  const topVideoTransForm = 90
  return (
    <Layout>
      {!hide && <Box height='4000' />}
      <Container
        css={{
          scrollSnapType: isLessThan600 ? 'y ' : 'none',
          overflowY: isLessThan600 ? 'scroll' : 'none',
          height: '100vh'
        }}
        color={'white'}>

        {
          !hide && (
            <>
              <Box
                // className='div-video'
                css={{
                  position: 'fixed',
                  zIndex: '999999',
                  background: '#000000',
                  height: '100vh',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: percent >= topVideoTransForm
                    ? `-${(((percent - topVideoTransForm) * 100 / (100 - topVideoTransForm))).toFixed(2)}%`
                    : '0',
                  left: 0,
                }}>

                <video
                  ref={videoRef}
                  muted
                  autoPlay={true}
                  loop
                  // poster="./images/preview.png"
                  style={{
                    top: percent >= 80
                      ? `${50 - (((percent - 80) * 100 / (100 - 80))).toFixed(2)}%`
                      : '50%',
                  }}
                >
                  <source
                    src={videoSrc}
                    type="video/mp4"
                  />
                </video>
              </Box>
            </>)
        }

        {hide &&
          <>
            <motion.article
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ duration: 1, delay: 0.5, type: 'easeInOut' }}
              style={{ position: 'relative' }}
            >
              <Box
                borderRadius="lg"
                p={3}
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                // bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')}
                css={{
                  background: '#000000',
                  scrollSnapAlign: 'start'
                }}
                height={'100vh'}>

                <Box textAlign='center'>
                  <Heading as="h2" variant="page-title">
                    Danyl Boiko
                  </Heading>
                  <p>Software developer</p>
                </Box>

                <Box
                  borderColor="whiteAlpha.800"
                  borderWidth={2}
                  borderStyle="solid"
                  w="100px"
                  h="100px"
                  display="inline-block"
                  borderRadius="full"
                  overflow="hidden"
                >
                  <ProfileImage
                    src="/images/danylboiko.jpg"
                    alt="Profile image"
                    borderRadius="full"
                    width="100%"
                    height="100%"
                  />
                </Box>
                <Box
                  position='absolute'>

                  <ParticlesBackground id='5' />
                </Box>

              </Box>
            </motion.article>
            <Box
              borderRadius="lg"
              p={3}
              textAlign="center"
              display='flex'
              flexDirection='column'
              justifyContent='center'
              // bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')}
              css={{
                // scrollSnapAlign: 'start'
              }}
              height={'100vh'}
              fontSize={'2.0rem'}
              color={'white'}
            >
              Hello, I&apos;m a software developer from Ukraine 🇺🇦
              <LazyVoxelDog />

            </Box>



            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              // bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')}
              css={{
                backdropFilter: 'blur(5px)',
                // scrollSnapAlign: 'start'
              }}>
              <ParticlesBackground id='4' />

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
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              // bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')}
              css={{
                backdropFilter: 'blur(5px)',
                // scrollSnapAlign: 'start'
              }}>
              <ParticlesBackground id='2' />

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

            <Section delay={0.3}>
              <Box
                borderRadius="lg"
                mb={6}
                p={3}
                // bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(5px)' }}>
                <ParticlesBackground id='1' />

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
            </Section>
          </>
        }
      </Container>
    </Layout >
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
