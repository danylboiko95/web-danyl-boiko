import Head from 'next/head'
import dynamic from 'next/dynamic'
// import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useViewportScroll, motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [hide, setHide] = useState(false);
  const videoRef = useRef()

  // console.log(videoRef)
  const [currentTime, setCurrentTime] = useState(null);
  const [percent, setPercent] = useState(0);
  const videoSrc = './videos/me.mov'

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
    setInterval(() => {

      // if (typeof window !== "undefined") {
        var h = document.documentElement,
          b = document.body,
          st = 'scrollTop',
          sh = 'scrollHeight';

        var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        if (videoRef && videoRef.current && percent && !hide) {


          var seconds = videoRef.current.duration % 60
          console.log(((seconds * percent) / 100).toFixed(2))
          console.log(((seconds * percent) / 100).toFixed(2))

          setPercent(percent)
          videoRef.current.currentTime = ((seconds * percent) / 100).toFixed(2)

        }
      // }
    }, 33.7);
  }, [])

  useEffect(() => {
    console.log(percent)
    if (percent >= 100) {
      console.log('hi')
      window.scrollTo(0, 0)
      setHide(true)
    }
  }, [percent])

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = () => {
    console.log('hi')
  }
  return (
    <>

      <Box as="main" pb={8}>
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

        <Container maxW="container.md" pt={14}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  // value: "#cfcfcf",
                  value: "#cfcfcf",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#202023",
                },
                links: {
                  color: "#000000",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />

          <svg className='progress-icon' viewBox="0 0 60 60">
            <motion.path
              fill="none"
              strokeWidth="5"
              stroke="white"
              strokeDasharray="0 1"
              d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,1"
              style={{
                pathLength,
                rotate: 90,
                translateX: 5,
                translateY: 5,
                scaleX: -1 // Reverse direction of line animation
              }}
            />

            <motion.path
              fill="none"
              strokeWidth="5"
              stroke="white"
              d="M14,26 L 22,33 L 35,16"
              initial={false}
              strokeDasharray="0 1"
              animate={{ pathLength: isComplete ? 1 : 0 }}
            />
          </svg>


          <AnimatePresence>
            { (
              <motion.video
                ref={videoRef}
                muted
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <source
                  src={videoSrc}
                  type="video/mp4"
                />
              </motion.video>
            )}
          </AnimatePresence>

          <LazyVoxelDog />

          {children}

          {/* <Footer /> */}
        </Container>
      </Box>
    </>

  )
}

export default Main
