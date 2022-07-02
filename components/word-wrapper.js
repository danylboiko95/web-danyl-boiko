import { Box } from "@chakra-ui/react";

const WordWrapper = ({ text }) => (
    <Box
        display={"inline"}
        // color={"#101010"}
        // px={1}
        // mx={1}
        borderRadius={2}
        textDecoration="underline"
        // backgroundColor={"#fefefe"}
        whiteSpace={"nowrap"}
        fontWeight={600}
        fontSize={14}
        fontFamily={"'Major Mono Display', monospace"}
    >
        {text}
    </Box>
)

export default WordWrapper;