import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ disabled }) => css`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 12px;
    margin: 0;
    border-radius: 0.25rem;
    border: 1px solid #CED4DA;
    background-color: ${disabled ? '#E9ECEF' : 'transparent'};
  `}
`;

export const ColorItem = styled.div`
  ${({ color, disabled }) => css`
    cursor: ${disabled ? 'default' : 'pointer'};
    width: 30px;
    height: 30px;
    background-color: ${color};
    border-radius: 4px;

    &.selected {
      box-shadow: ${color} 0 0 4px;
    }
  `}
`;
