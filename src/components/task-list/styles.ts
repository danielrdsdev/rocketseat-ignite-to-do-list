import styled from "styled-components";

export const TaskListContainer = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TaskLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TaskLabel = styled.h2<{ $variant: "primary" | "secondary" }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) =>
		props.$variant === "primary"
			? props.theme.colors.blue["500"]
			: props.theme.colors.purple["500"]};

  span {
    padding: 2px 8px;
    border-radius: 999px;
    color: ${(props) => props.theme.colors.gray["200"]};
    background-color: ${(props) => props.theme.colors.gray["400"]};
    font-size: 12px;
    font-weight: 700;
  }
`;

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TaskItemStyled = styled.div<{ $isCompleted?: boolean }>`
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.gray["500"]};
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: ${(props) =>
		props.$isCompleted
			? props.theme.colors.gray["500"]
			: props.theme.colors.gray["400"]};

  h2 {
    color: ${(props) =>
			props.$isCompleted
				? props.theme.colors.gray["300"]
				: props.theme.colors.gray["100"]};
    font-size: 14px;
    text-decoration: ${(props) =>
			props.$isCompleted ? "line-through" : "none"};
    line-clamp: 1;
  }
`;

export const ToggleButton = styled.button<{ $isCompleted?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 999px;
  border: 2px solid ${(props) =>
		props.$isCompleted
			? props.theme.colors.purple["800"]
			: props.theme.colors.blue["500"]};
  background-color: ${(props) =>
		props.$isCompleted ? props.theme.colors.purple["800"] : "transparent"};
  transition: background-color 100ms ease;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.blue["800"]};
  }

  &:disabled {
    cursor: default;
  }

  svg {
    opacity: ${(props) => (props.$isCompleted ? 100 : 0)};
  }
`;

export const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray["300"]};
  transition: all 100ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray["400"]};
    color: ${(props) => props.theme.colors.danger};
  }
`;
