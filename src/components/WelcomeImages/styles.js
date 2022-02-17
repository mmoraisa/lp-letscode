import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`

export const Image = styled.img`
  border-radius: 5px;
  box-shadow: -3px 3px 30px rgba(0,0,0,.35);
  position: absolute;
  width: 25vw;

  ${({ i }) => `
    left: ${30 * i}px;
    top: ${30 * i}px;
  `}
`
