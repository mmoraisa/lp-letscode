import styled from 'styled-components'

export const StyledSection = styled.section`
  margin: 30px -30px;
  padding: 30px 80px;

  ${({ color }) => color && `
    color: ${color};
  `}
  ${({ backgroundColor }) => backgroundColor && `
    background-color: ${backgroundColor};
  `}
`
