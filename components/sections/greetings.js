import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import VoxelComputerLoader from '../computer-loader'

const LazyComputer = dynamic(() => import('../voxel-computer'), {
    ssr: false,
    loading: () => <VoxelComputerLoader />
})

const Greetings = () => (

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

)

export default Greetings;