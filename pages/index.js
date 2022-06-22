import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an software developer from Ukraine 🇺🇦
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Danyl Boiko
          </Heading>
          <p>Software developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/danylboiko.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
          , remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Kharkiv, Ukraine.
        </BioSection>
        <BioSection>
          <BioYear>Nov 2015</BioYear>
          As a 3D’s Max artist I had a huge experience related not only for 3D’s Max but for additional fields.
          As a TeamLead, Mentor, Project Manager. For part time I was a tutor in 3D max.
          Also had a small experience with Unreal Engine.
        </BioSection>
        <BioSection>
          <BioYear>Mar 2017</BioYear>
          Full-stack developer - TEAMinterantional, Ukraine
          The previous project was a backend on C# Web.api,
          front end on Angular.js, the database on MSSQL, the cloud environment on AZURE.
          Main project was related to improvement of ecology based on blockchain technology with own tokens and work with Metamask.
          Also was two MVP projects.
        </BioSection>
        <BioSection>
          <BioYear>Feb 2019</BioYear>
          High loaded 2D/3D charts created by WebAssembly
        </BioSection>
        <BioSection>
          <BioYear>Dec 2020 </BioYear>
          World leaders in predicting and improving ad effectiveness
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/danylboiko95" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
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
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @danyl_boiko
              </Button>
            </Link>
          </ListItem>
        </List>

       
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
