import styled, { css } from 'styled-components';

export const ControlBar = styled.nav`
  ${({ theme }) => css`
    width: 100vw;
    height: var(--control-bar-height);
    display: flex;
    background-color: ${theme.colors.background};
  `}
`;

export const Control = styled.div`
  ${({ theme }) => css`
    width: ${theme.sidebarWidth.open};
    display: flex;
    align-items: center;
    margin: 16px 0;

    &> .item-svg:hover {
      background-color: #e9e8e7;
    }

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      height: 32px;
      margin-left: 8px;
    }
  `}
`;
