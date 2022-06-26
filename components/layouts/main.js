import Head from 'next/head'
import dynamic from 'next/dynamic'
// import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { useViewportScroll, motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


const Main = ({ children, router }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [hide, setHide] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const videoRef = useRef()

  // console.log(videoRef)
  const [currentTime, setCurrentTime] = useState(null);
  const [percent, setPercent] = useState(0);
  const videoSrc = './videos/m2.MOV'

  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  useEffect(() => {
    yRange.onChange(v => {
      if (videoRef && videoRef.current) {

        var minutes = parseInt(videoRef.current.duration / 60, 10);
        var seconds = videoRef.current.duration % 60
        const onePercent = (seconds / 100)
      }
      setIsComplete(v >= 1)
    })
  }, [yRange]);

  useEffect(() => {

    if (percent >= 100) {

      window.scrollTo(0, 0)
      setHide(true)
    }
  }, [percent])

  return (
    <>
      <Box as="main" pb={1}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Danyl Boiko homepage" />
          <meta name="author" content="Danyl Boiko" />
          <meta name="author" content="danylboiko" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="twitter:title" content="Danyl Boiko" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@danylboiko" />
          <meta name="twitter:creator" content="@danylboiko" />
          <meta name="twitter:image" content="/images/danylboiko.jpg" />
          <meta property="og:site_name" content="Danyl Boiko" />
          <meta name="og:title" content="Danyl Boiko" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/danylboiko.jpg" />
          <title>Danyl Boiko - Homepage</title>
        </Head>

        {/* <NavBar path={router.asPath} /> */}

        <Container>
          {children}

          {/* <Footer /> */}
        </Container>
      </Box >
    </>

  )
}

export default Main
