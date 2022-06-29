import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin-bottom: 2.4em;

  @media (max-width: 420px) {
    font-size: 14px;
    padding-left: 1.4em;
  }
`

export const BioHeader = styled(Box)`
  margin-bottom: 0.6em;

`

export const BioYear = styled.span`
  margin-right: 1em;
  font-size: 12px;
`

export const BioCompany = styled.span`
  font-weight: bold;
  margin-right: 1em;
  font-size: 18px;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  background-color: transparent !important;

  @media (max-width: 550px) {

    padding: 0em;
    font-size: 12px;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1.5em;
  padding-left: 2em;
  user-select: none;
  opacity: 0.5;
  margin-left: 1em;

  @media (max-width: 550px) {
    font-size: 0;
  }
`;

export const LineContent = styled.span`
  display: table-cell;
`;