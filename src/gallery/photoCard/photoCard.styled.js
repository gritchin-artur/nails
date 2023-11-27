import { styled } from "styled-components";

export const Div = styled.div`
  height: 80vh;
  border-radius: 20px;
  margin: 15px;
  cursor: pointer;
  color: #ddd;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: 0.5s ease-in-out;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));

  &:active {
    flex: 8;
    /* scale: 1.03; */
  }
  &:hover {
    box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.9);
    filter: brightness(90%);
    scale: 1.02;
  }
  //   background-image: url("https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80");
`;

export const DivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const H3 = styled.div`
  position: absolute;
  font-size: 24px;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:last-child h3 {
    color: #444;
  }

  &:active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
`;
