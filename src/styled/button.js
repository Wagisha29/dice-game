import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  line-height: 24px;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

export { Button, OutlineButton };
