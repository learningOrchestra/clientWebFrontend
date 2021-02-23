import styled, { css } from 'styled-components';

import { ItemContainer } from './SidebarGroupItem/styles';

export const Sidebar = styled.aside`
  ${({ theme }) => css`
    width: var(--sidebar-width);
    height: calc(100vh - var(--navbar-height) - var(--control-bar-height));
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.background};
    transition: width .5s;
  `}
`;

export const LogoutContainer = styled(ItemContainer)`
  position: absolute;
  margin-bottom: 8px;
  bottom: 0;
`;
