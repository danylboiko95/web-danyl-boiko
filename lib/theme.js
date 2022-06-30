import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: '#010101',
      letterSpacing: '1px',
    },
  })
}

const components = {
  Heading: {
    variants: {
      'page-title': {
        fontSize: 22
      },
      'section-title': {
        fontSize: 22,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
        textShadow: 'red -2px 0, cyan 2px 0',
        letterSpacing: '2px',
      }
    }
  },
  Container: {
    baseStyle: {
      maxW: '1200px',
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
  white: '#fefefe',
  blue: '#2997ff'
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}


const theme = extendTheme({ config, styles, components, fonts, colors, breakpoints })
export default theme
