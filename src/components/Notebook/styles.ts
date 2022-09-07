import styled from "styled-components";

interface NotebookProps {
  type: 'primary' | 'secondary' | 'creation';
}

export const Container = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div<NotebookProps>`
  display: flex;
  align-items: center;

  height: ${props => props.type !== 'creation' ? '200px' : '332px'};
  width: ${props => props.type !== 'creation' ? '144px' : '240px'};
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  border-radius: 2px 12px 12px 2px;
  background-color: ${props => {
    if (props.type === 'primary') return '#b8e5e3'
    if (props.type === 'secondary') return '#3b4e8d'
  }};
  position: relative;
  z-index: 1;

  p {
    width: 100%;
    text-align: center;
    color: ${props => props.type === 'secondary' ? '#ffffff' : '#000000'};
    font-weight: 700;
    font-size: 24px;
    font-family: 'Abhaya Libre';
  }
`;

export const SideBarSection = styled.div<NotebookProps>`
  border-radius: 2px 0 0 2px;
  box-shadow: 2px 0px 4px 0px rgb(0 0 0 / 25%);
  height: ${props => props.type !== 'creation' ? '200px' : '332px'};
  width: ${props => props.type !== 'creation' ? '12px' : '18px'};
  background-color: ${props => props.type !== 'creation' && '#5091D6'};
  position: relative;
  z-index: 2;
`;
