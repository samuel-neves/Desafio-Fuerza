import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 26px;
  height: 100vh;

  margin: 0 auto;
  max-width: 500px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;

  img {
    margin-right: auto;
  }
`;

export const EmptyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 246px;

  button {
    margin-top: 80px;
    font-weight: 600;
  }
`;
