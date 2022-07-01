import { Box } from "@chakra-ui/react"
import styled from "@emotion/styled"
import { IoDownload } from "react-icons/io5"

const LogoWrapper = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    justify-content: space-around;
    color: white;
    right: 0;
    bottom: 0;
    height: 100vh;
    z-index: 99999;
`
const TextLogo = styled.span`
    transform: rotate(-90deg) translate(0%, 0%);
    color: white;
    margin: 0 20px;
    font-size: 8px;
    white-space: nowrap;
`
const LeftLine = styled.span`
    flex: 8;
    background-color: #4e4e4e;
    width: 1px; 
    margin: 40px 0;
`
const RightLine = styled.span`
    background-color: #4e4e4e;
    width: 1px;
    margin: 40px 0;
    flex: 1;
`
const Logo = () => (
    <LogoWrapper width={{ sm: '40px', md: '60px' }}>
        <LeftLine />
        <TextLogo>
            <a target="_blank" href="./pdf/Danyl_Boiko_CV.pdf">
                <Box
                    fontSize="10px"
                    display={'flex'}
                    gap="5px"
                >
                   <IoDownload /> Download CV
                </Box>
            </a>
        </TextLogo>
        <RightLine />
    </LogoWrapper >
)

export default Logo;