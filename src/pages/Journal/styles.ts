import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 26px;

  margin: 0 auto;
  max-width: 500px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    margin-left: -4px;
    margin-top: 32px;

    h2 {
      font-size: 24px;
      font-family: 'Abhaya Libre';
      font-weight: 700;
      margin-left: 12px;
    }

    svg {
      position: relative;
      top: -1px;
      font-size: 34px;
      font-weight: 400;
    }
  }

  button + button {
    border: 1px solid #834825;
  }
`;

export const EmptyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 124px;

  h2 {
    margin: 0 auto;
    font-family: 'Abhaya Libre';
    font-weight: 700;
    font-size: 24px;
  }

  img {
    margin-top: 70px;
  }

  button {
    margin-top: 80px;
    font-weight: 600;
  }
`;

export const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 42px;
`;

export const NoteContainer = styled.div`
  margin-bottom: 24px;
`;
