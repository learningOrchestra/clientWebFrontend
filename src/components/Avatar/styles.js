import styled, { css } from 'styled-components';

export const Avatar = styled.img`
  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
  `}
`;
