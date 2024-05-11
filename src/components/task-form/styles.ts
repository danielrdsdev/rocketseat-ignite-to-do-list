import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  color: inherit;
  background-color: ${(props) => props.theme.colors.gray["500"]};
  border: 1px solid ${(props) => props.theme.colors.gray["700"]};

  ::placeholder {
    color: ${(props) => props.theme.colors.gray["300"]};
  }

  &:focus, &:focus-visible {
    border: 1px solid ${(props) => props.theme.colors.purple["800"]};
  }
`;

export const Button = styled.button`
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.blue["800"]};
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.blue["500"]};
  }

  svg {
    margin-left: 8px;
  }
`;
