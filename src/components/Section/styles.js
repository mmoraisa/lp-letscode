import styled from 'styled-components'

export const StyledSection = styled.section.attrs({
  'data-test-id': 'secao'
})`
  margin: 0 -30px;
  padding: 30px 80px;

  ${({ color }) => color && `
    color: ${color};
  `}
  ${({ backgroundColor }) => backgroundColor && `
    background-color: ${backgroundColor};
  `}
`
