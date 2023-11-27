import styled from "styled-components";

export const Img = styled.img`
  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 450px;
  }
  width: 500px;
  height: 750px;
`;

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const DivModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
