import { Box } from "@chakra-ui/react"

const BoxWrapper = ({ children }) => (
    <Box
        borderRadius="lg"
        mb={6}
        p={3}
    >
        {children}
    </Box>
)

export default BoxWrapper