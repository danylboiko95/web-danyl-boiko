import { Box } from "@chakra-ui/react";

const WordWrapper = ({ text }) => (
    <Box
        display={"inline"}
        // color={"#101010"}
        // px={1}
        // mx={1}
        borderRadius={2}
        // textDecoration="underline"
        // backgroundColor={"#fefefe"}
        color="blue"
        letterSpacing={2}
        whiteSpace={"nowrap"}
        fontWeight="600"
        fontFamily={"'Oswald', sans-serif"}
        >
        {text}
    </Box>
)

export default WordWrapper;