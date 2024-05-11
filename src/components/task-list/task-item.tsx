import { useContext } from "react";
import { Task, TaskContext } from "../../contexts/task";
import { Trash } from "../icons/trash";
import { TaskItemStyled, ToggleButton, TrashButton } from "./styles";
import { Check } from "../icons/check";

type TaskItemProps = {
	task: Task;
};

export const TaskItem = ({ task }: TaskItemProps) => {
	const { deleteTask, completeTask } = useContext(TaskContext);

	const handleDeleteTask = (id: string) => {
		deleteTask(id);
	};

	const handleCompleteTask = (id: string) => {
		completeTask(id);
	};

	return (
		<TaskItemStyled $isCompleted={task.isCompleted}>
			<ToggleButton
				$isCompleted={task.isCompleted}
				disabled={task.isCompleted}
				onClick={() => handleCompleteTask(task.name)}
			>
				<Check />
			</ToggleButton>
			<h2>{task.name}</h2>
			<TrashButton onClick={() => handleDeleteTask(task.name)}>
				<Trash />
			</TrashButton>
		</TaskItemStyled>
	);
};
