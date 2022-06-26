import Head from 'next/head'
import dynamic from 'next/dynamic'
// import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'
import VoxelDogLoader from '../computer-loader'
import { useViewportScroll, motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';


const Main = ({ children }) => {

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
