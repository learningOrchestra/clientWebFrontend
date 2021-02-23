import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100vw;
  height: var(--navbar-height) !important;
  padding: 0 !important;
  display: flex;
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;

  & > .navbar-brand {
    height: var(--navbar-height);
    display: flex;
    align-items: center;
    padding-left: 8px !important;
    color: white;
  }

  & > .item {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    
    & > svg {
      fill: white;
    }
    &:hover {
      background-color: #00000020;
    }
  }
`;
