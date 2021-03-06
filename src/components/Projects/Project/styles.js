import styled from 'styled-components';

export const Project = styled.div`
  cursor: default;
  min-width: 256px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 8px;

  &:hover {
    border-color: #407439 !important;
  }
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & > p {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > svg {
    margin-right: 8px;
  }
`;
