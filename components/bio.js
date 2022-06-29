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
export const BioTechnologiesList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`
export const BioTechnologiesListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
