import styled from 'styled-components';
import media from 'styled-media-query';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  & .card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${media.lessThan('medium')`
    & > nav .signup {
      display: none;
    }

    & .card-body {
      flex-direction: column;

      & > button {
        margin-top: 32px;
        margin-bottom: 16px;
      }
    }
  `}
`;
