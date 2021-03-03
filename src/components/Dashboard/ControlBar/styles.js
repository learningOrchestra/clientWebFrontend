import styled, { css } from 'styled-components';

export const ControlBar = styled.nav`
  ${({ theme }) => css`
    width: 100vw;
    height: var(--control-bar-height);
    display: flex;
    align-items: center;
    background-color: ${theme.colors.background};
  `}
`;

export const Control = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  transition: width .5s;

  &:hover, & > .item-svg:hover {
    background-color: #e9e8e7;
  }
`;
