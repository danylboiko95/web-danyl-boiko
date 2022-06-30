import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`

  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 25px;

  @media (max-width: 460px) {
    font-size: 14px;
    padding-left: 1.4em;
    gap: 0;
    margin-bottom: 35px;
  }
`

export const BioHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6em;

`

export const BioYear = styled.div`
  margin-right: 1em;
  font-size: 12px;
  white-space: nowrap;
  @media (max-width: 460px) {
    transform: rotate(-90deg) translate(-52px, -10px);
    width: 10px;
  }
`

export const BioCompany = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 10px;
  @media (max-width: 460px) {
    font-size: 16px;
  }
`
export const BioCompanyAbout = styled.div`
  line-height: 1.2;
  margin-bottom: 10px;
  max-width: 90vw;
  font-size: 16px;

  @media (max-width: 460px) {
    font-size: 15px;
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
    font-size: 12px;
  }
  @media (max-width: 400px) {

    padding-right: 0.5em;
    padding-left: 0em;
  }
`;

export const LineContent = styled.span`
  display: table-cell;
`;