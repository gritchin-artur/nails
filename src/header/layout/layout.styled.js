import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DivHeader = styled.div`
  @media only screen and (max-width: 600px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  margin-left: 100px;
  margin-right: 100px;
`;

export const H2 = styled.h2`
  //   text-align: center;
  color: #ddd;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
`;

export const Li = styled.li`
  //   text-align: center;
  color: #ddd;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
`;

export const Ul = styled.ul`
  @media only screen and (max-width: 600px) {
    gap: 10px;
  }
  list-style: none;
  display: flex;
  gap: 40px;
`;

export const Navigation = styled(NavLink)`
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
  color: #4444448f;
  font-size: 1.5rem;
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

export const NavigationHome = styled(NavLink)`
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
  color: #4444448f;
  font-size: 1.8rem;
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

const blink = keyframes`
0% {background-color: #44444487;}
 50 % {background-color: #cfcfcf; }
 100% {background-color: #ddd;}
`;

export const DivOrder = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;

  border-radius: 50%;
  width: 50px;
  display: inline-block;
  height: 50px;
  // background-color: #44444487;
  text-align: center;
  line-height: 75%;
  text-decoration: none;
  padding: 15px;

  animation: ${({ blinking }) =>
    blinking
      ? css`
          ${blink} 1s infinite
        `
      : "none"};
`;

export const NavigateBottomOrder = styled(NavLink)`
  color: #282c34;
  font-size: 10px;
  font-weight: 700;
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
