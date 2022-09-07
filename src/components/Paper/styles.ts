import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  background-color: #ffffff;
  height: 178px;
  width: 154px;
  border-radius: 4px;


  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: relative;
  top: -4px;
  left: 4px;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;

  textarea {
    color: #333438;
    background-color: transparent;
    border: none;
    resize: none;
    font-weight: 400;
    font-size: 20px;
  }
`;
