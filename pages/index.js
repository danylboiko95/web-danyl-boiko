import {
  Container,
  Box
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'

import ParticlesBackground from '../components/particle'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import Logo from '../components/logo/logo'
import PreviewVideo from '../components/preview-video/preview-video'
import AnimationWrapper from '../components/animation-wrapper/animation-wrapper'
import MeSection from '../components/sections/me'
import Greetings from '../components/sections/greetings'
import AboutMe from '../components/sections/about-me'
import Journey from '../components/sections/journey'
import Technologies from '../components/sections/technologies'
import Links from '../components/sections/links'
import BoxWrapper from '../components/box-wrapper'
import { ContactUs } from '../components/contact-us/contact-us'

const Home = () => {

  const [showPreviewVideo, setShowPreviewVideo] = useState(false);

  const [percent, setPercent] = useState(0);
  const [isSkip, setIsSkip] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 0 },
    enter: { opacity: 1, y: 0 },
  }

  useEffect(() => {

    if (percent >= 95 || isSkip) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 300)
    }

    if (percent >= 95.0001 || isSkip) {
      setTimeout(() => {
        setShowPreviewVideo(true)

        window.scrollTo(0, 0)

      }, 500)
      setTimeout(() => {
        document.body.style.overflow = 'auto'
      }, 1000)
    }
  }, [percent, isSkip])

  return (
    <Layout>
      <Container
        css={{
          height: '100vh'
        }}
        color={'white'}>
        {showPreviewVideo
          ? (<PreviewVideo setPercent={setPercent} percent={percent} setIsSkip={setIsSkip} />)
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
                  <ParticlesBackground isFullSize />
                </Box>

                <MeSection />

                <AnimationWrapper>
                  <Greetings />
                </AnimationWrapper>
                <AboutMe />

                <BoxWrapper>
                  <Technologies />
                </BoxWrapper>

                <BoxWrapper>
                  <Journey />
                </BoxWrapper>
                <ContactUs />
                <BoxWrapper>
                  <Links />
                </BoxWrapper>
              </motion.article>
            </>)
        }
      </Container >
    </Layout >
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
