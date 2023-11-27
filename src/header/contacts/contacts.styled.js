import { styled } from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20%;
`;

export const A = styled.a`
  color: #4444448f;
  font-size: 3rem;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;

  &:focus-visible {
    color: #cfcfcf;
  }
  &:hover {
    color: #cfcfcf;
  }
  &:active {
    color: grey;
  }
  &:disabled {
    background-color: #eee;
    color: #444;
    pointer-events: none;
  }
`;
