import { Box } from "@chakra-ui/react";

const WordWrapper = ({ text }) => (
    <Box
        display={"inline"}
        color={"#101010"}
        px={1}
        mx={1}
        borderRadius={4}
        backgroundColor={"white"}
        whiteSpace={"nowrap"}
    >
        {text}
    </Box>
)

export default WordWrapper;