import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ComputerSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const ComputerContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-computer"
    m="auto"
    mt={['0px', '-0px', '-0px']}
    mb={['-10px', '-35px', '-50px']}
    w={[240]}
    h={[240]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <ComputerContainer>
      <ComputerSpinner />
    </ComputerContainer>
  )
}

export default Loader
