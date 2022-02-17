import styled from 'styled-components'
import { BIG_SCREEN_DEVICES } from './defaults/Breakpoints'

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  & > * {
    flex: 1;
    margin: 0 50px;
  }

  @media only screen and (min-width: ${BIG_SCREEN_DEVICES}px) {
    flex-direction: row;
  }
`
