import { Box } from "@chakra-ui/react"

const BoxWrapper = ({ children }) => (
    <Box
        borderRadius="lg"
        p={3}
    >
        {children}
    </Box>
)

export default BoxWrapper