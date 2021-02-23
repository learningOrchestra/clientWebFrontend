import styled from 'styled-components';

export const Main = styled.div`
  width: calc(100vw - var(--sidebar-width));
  height: calc(100vh - var(--navbar-height) - var(--control-bar-height));
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  & > nav > ol {
    margin: 0;

    & > li > a {
      text-decoration: none;
      color: green;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  padding: 32px;
  overflow-y: auto;
`;
