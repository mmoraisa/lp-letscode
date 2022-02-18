import styled from 'styled-components'

export const StyledSection = styled.section`
  margin: 0 -30px;
  padding: 30px 80px;

  ${({ color }) => color && `
    color: ${color};
  `}
  ${({ backgroundColor }) => backgroundColor && `
    background-color: ${backgroundColor};
  `}
`

export const Body = styled.div`
  ${({ display }) => display && `
    display: ${display};
  `}
  ${({ gridTemplateColumns }) => gridTemplateColumns && `
    grid-template-columns: ${gridTemplateColumns};
  `}
  ${({ columnGap }) => columnGap && `
    column-gap: ${columnGap};
  `}
  ${({ rowGap }) => rowGap && `
    row-gap: ${rowGap};
  `}
`
