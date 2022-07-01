import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

import AnimationWrapper from "../animation-wrapper/animation-wrapper";
import { Line, LineContent, LineNo, Pre } from "../bio";

const exampleCode = `{
    technologies: [
      React: { years: 5 },
      NodeJS: { years: 3 },
      NextJS: { years: 2 },
      CSharp: { years: 2 },
      Typescript: { years: 3 }
    ],
    databases: [ 
        'MongoDB',
        'PostgreSQL',
        'DynamoDB'
      ],
    infrastructure: [
      'Docker',
      'Kubernetes'
    ],
    clouds: [
      'AWS',
      'Azure', 
      'Vercel'
    ],
    methodologies: [
      'Agile',
      'Scrum',
      'Kanban',
      'Waterfall'
    ],
    other: [
      'Redis',
      'GoogleAPI',
      'D3',
      'Canvas'
    ],
    microservices: true,
    monolith: true
  }
  `;
const exampleCodeBig = `{
    technologies: [
      React: { years: 5 },
      NodeJS: { years: 3 },
      NextJS: { years: 2 },
      CSharp: { years: 2 },
      Typescript: { years: 3},

    ],
    databases: ['MongoDB', 'PostgreSQL', 'DynamoDB'],
    infrastructure: ['Docker', 'Kubernetes'],
    clouds: ['AWS', 'Azure', 'Vercel'],
    methodologies: ['Agile', 'Scrum', 'Kanban', 'Waterfall'],
    other: ['Redis', 'GoogleAPI', 'D3', 'Canvas']
    microservices: true,
    monolith: true
  }
  `;



const Technologies = () => {
    const [isLessThan800] = useMediaQuery('(max-width: 800px)')

    return (
        <AnimationWrapper>
            <Heading as="h3" variant="section-title">
                Technologies
            </Heading>
            <Box
                overflow="hidden"
            >
                <Highlight
                    {...defaultProps}
                    theme={theme}
                    code={isLessThan800 ? exampleCode : exampleCodeBig}
                    language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <Pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <Line key={i} {...getLineProps({ line, key: i })}>
                                    <LineNo>{i + 1}</LineNo>
                                    <LineContent>
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token, key })} />
                                        ))}
                                    </LineContent>
                                </Line>
                            ))}
                        </Pre>
                    )}
                </Highlight>
            </Box>
        </AnimationWrapper>
    )
}
export default Technologies;