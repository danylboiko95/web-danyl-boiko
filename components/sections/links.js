import { Button, Heading, Link, List, ListItem } from "@chakra-ui/react"
import { IoDownload, IoLogoGithub, IoLogoInstagram } from "react-icons/io5"

const Links = () => (
    <>
        <Heading as="h3" variant="section-title">
            Links
        </Heading>
        <List>
            <ListItem>
                <Link href="https://github.com/danylboiko95" target="_blank">
                    <Button
                        variant="ghost"
                        color={'blue'}
                        leftIcon={<IoLogoGithub />}
                    >
                        @danylboiko95
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://instagram.com/danyl_boiko" target="_blank">
                    <Button
                        variant="ghost"
                        color={'blue'}
                        leftIcon={<IoLogoInstagram />}
                    >
                        @danyl_boiko
                    </Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="./pdf/Danyl_Boiko_CV.pdf" target="_blank" download>
                    <Button
                        variant="ghost"
                        color={'blue'}
                        leftIcon={<IoDownload />}
                    >
                        Download CV
                    </Button>
                </Link>
            </ListItem>
        </List>
    </>
)

export default Links