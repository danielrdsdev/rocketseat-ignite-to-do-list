import { useContext } from "react";
import { TaskContext } from "../../contexts/task";
import {
	TaskItemContainer,
	TaskLabel,
	TaskLabelContainer,
	TaskListContainer,
} from "./styles";
import { TaskItem } from "./task-item";

export const TaskList = () => {
	const { tasks } = useContext(TaskContext);

	const isCompleted = tasks.filter((task) => task.isCompleted);

	return (
		<TaskListContainer>
			<TaskLabelContainer>
				<TaskLabel $variant="primary">
					Tarefas criadas<span>{tasks.length}</span>
				</TaskLabel>

				<TaskLabel $variant="secondary">
					Concluídas
					<span>
						{isCompleted.length} de {tasks.length}
					</span>
				</TaskLabel>
			</TaskLabelContainer>

			<TaskItemContainer>
				{tasks.map((task) => (
					<TaskItem key={task.name} task={task} />
				))}
			</TaskItemContainer>
		</TaskListContainer>
	);
};
