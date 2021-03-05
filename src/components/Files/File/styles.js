import styled from 'styled-components';

export const Folder = styled.div`
  cursor: default;
  min-width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    border-color: #407439 !important;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 56px;
    height: 56px;
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
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;
