import { useContext } from "react";
import { TaskContext } from "../../contexts/task";
import { Clipboard } from "../icons/clipboard";
import {
	NoTaskFoundContainer,
	NoTaskFoundTextContainer,
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

			{tasks.length === 0 && (
				<NoTaskFoundContainer>
					<Clipboard />
					<NoTaskFoundTextContainer>
						<h3>Você ainda não tem tarefas cadastradas</h3>
						<p>Crie tarefas e organize seus itens a fazer</p>
					</NoTaskFoundTextContainer>
				</NoTaskFoundContainer>
			)}
		</TaskListContainer>
	);
};
