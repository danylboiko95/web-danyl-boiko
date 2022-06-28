import { motion, useAnimation } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { forwardRef, useEffect } from 'react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children }) => {

  return (
    <StyledDiv
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
