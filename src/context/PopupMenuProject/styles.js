import styled, { css } from 'styled-components';

export const PopupMenu = styled.ul`
  ${({ clientClick }) => css`
    position: absolute;
    top: ${clientClick.clientY}px;
    left: ${clientClick.clientX}px;
    padding: 8px 0;

    & > li {
      cursor: pointer;
      display: flex;
      align-items: center;
      border: none !important;
      padding: 12px 20px;

      & > svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
  `}
`;
