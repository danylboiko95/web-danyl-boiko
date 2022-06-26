import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#010101', '#202023')(props),
      letterSpacing: '1px',
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Container: {
    baseStyle: {
      maxW: '90vw',
      pX: 4,
      gt: 0,
    },
  },
  Section: {
    baseStyle: {
      color: '00ff00'
    }
  },
  Box: {
    baseStyle: {
      color: '#ffffff'
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Sora', sans-serif;",
  body: "'Sora', sans-serif"
}

const colors = {
  white: '#fefefe'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
