import styled, { css } from 'styled-components';

export const ItemsContainer = styled.div`
  position: relative;
  width: var(--sidebar-width);
  transition: width .5s;
  overflow: hidden;
`;

export const ItemContainer = styled.div`
  cursor: pointer;
  height: 48px;
  display: flex;
  align-items: center;

  & > .item-container {
    height: 28px;
    display: flex;
    align-items: center;
    transition: width .5s;

    & > p {
      margin: 0;
      margin-left: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &:hover {
    background-color: #e9e8e7;
  }

  &.selected {
    background-color: #bbbbbb;
    & > .item-container {
      & > p, & > svg path {
        color: black;
      }
      & .item-svg:hover {
        background-color: #bbbbbb;
      }
    } 
  }
`;

export const GroupItemContainer = styled(ItemContainer)`
  ${({ theme }) => css`
    & > .item-container {
      background-color: ${theme.colors.background};
      z-index: 1;

      & .item-svg:hover {
        background-color: transparent;
      }
    }
    &:hover {
      background-color: transparent;
    }
  `}
`;

export const LogoutContainer = styled(ItemContainer)`
  position: absolute;
  margin-bottom: 8px;
  bottom: 0;
`;
