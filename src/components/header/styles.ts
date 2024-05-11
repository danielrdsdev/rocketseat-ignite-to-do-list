import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray["700"]};;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h1 {
    font-size: 40px;
    font-weight: 900;
    color: ${(props) => props.theme.colors.blue["500"]};

    span {
      color: ${(props) => props.theme.colors.purple["800"]};;
    }
  }
`;
