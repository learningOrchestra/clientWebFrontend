import styled, { css } from 'styled-components';
import { Form as FormikForm } from 'formik';

export const SingUp = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
  `}
`;

export const Box = styled.main`
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 32px;

  & > p {
    margin: 0;
    margin-left: 12px;
  }
`;

export const Form = styled(FormikForm)`
  padding: 32px;
  width: 352px;

  & > button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;

    & > svg {
      position: absolute;
      left: 16px;
    }
  }
`;
