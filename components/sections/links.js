import { Box, Heading, List, ListItem } from "@chakra-ui/react"
import { IoDownload, IoLogoGithub, IoLogoInstagram, IoMail } from "react-icons/io5"

const Links = () => (
    <>
        <Heading as="h3" variant="section-title">
            Links
        </Heading>
        <List
            display='flex'
            justifyContent={'space-around'}
            gap={4}
            flexDirection={{ base: "column", md: "row" }} mb={5} >
            <ListItem>
                <a href="mailto:danylboiko@gmail.com">
                    <Box
                        alignItems={"center"}
                        color={'blue'}
                        display={'flex'}
                        gap="5px"
                    >
                        <IoMail /> danylboiko@gmail.com
                    </Box>
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://github.com/danylboiko95" rel="noreferrer">
                    <Box
                        alignItems={"center"}
                        color={'blue'}
                        display={'flex'}
                        gap="5px"
                    >
                        <IoLogoGithub /> danylboiko95
                    </Box>
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://instagram.com/danyl_boiko" rel="noreferrer">
                    <Box
                        alignItems={"center"}
                        color={'blue'}
                        display={'flex'}
                        gap="5px"
                    >
                        <IoLogoInstagram /> danyl_boiko
                    </Box>
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="./pdf/Danyl_Boiko_CV.pdf">
                    <Box
                        alignItems={"center"}
                        color={'blue'}
                        display={'flex'}
                        gap="5px"
                    >
                        <IoDownload /> Download CV
                    </Box>
                </a>
            </ListItem>
        </List>
    </>
)

export default Links