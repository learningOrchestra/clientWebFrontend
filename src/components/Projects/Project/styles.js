import styled from 'styled-components';

export const Project = styled.div`
  cursor: default;
  min-width: 256px;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  & > svg {
    margin-right: 8px;
  }

  &:hover {
    border-color: green !important;
  }
`;
