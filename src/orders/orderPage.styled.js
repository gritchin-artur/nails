import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  width: 340px;
  //   height: 440px;
  background: #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  // margin: calc(50vh - 220px) auto;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
`;

export const H2 = styled.h2`
  margin: 10px 0;
  padding-bottom: 10px;
  width: 180px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;

  &:focus {
    border-bottom: 2px solid #78788c;
  }
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;

  &:focus {
    border-bottom: 2px solid #78788c;
  }
  }
`;

export const P = styled.p`
  &:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #5a5a5a;
  }
`;

export const Button = styled.button`
  float: right;
  padding: 8px 12px;
  margin: 8px 0 0;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #78788c;
  background: 0;
  color: #5a5a6e;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #78788c;
    color: #fff;
  }
`;

export const Div = styled.div`
  content: "Hi";
  position: absolute;
  bottom: -15px;
  right: -20px;
  background: #50505a;
  color: #fff;
  width: 320px;
  padding: 16px 4px 16px 0;
  border-radius: 6px;
  font-size: 13px;
  box-shadow: 10px 10px 40px -14px #000;
`;

export const Span = styled.span`
  margin: 0 5px 0 15px;
`;
