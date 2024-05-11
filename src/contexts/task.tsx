import { ReactNode, createContext, useState } from "react";
import { toast } from "sonner";

export type Task = {
	name: string;
	isCompleted?: boolean;
};

type TaskContext = {
	tasks: Task[];
	addTask: (values: Task) => void;
	deleteTask: (id: string) => void;
	completeTask: (id: string) => void;
};

export const TaskContext = createContext<TaskContext>({
	tasks: [],
	addTask: () => {},
	deleteTask: () => {},
	completeTask: () => {},
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState<Task[]>([]);

	const addTask = (values: Task) => {
		const sameName = tasks.filter((task) => task.name === values.name);

		if (sameName.length > 0) {
			toast.error("Uma tarefa com o mesmo nome já foi adicionada.");

			return;
		}

		setTasks((prev) => [...prev, values]);

		toast.success("Tarefa adicionada!");
	};

	const deleteTask = (id: string) => {
		setTasks((prev) => prev.filter((task) => task.name !== id));

		toast.success("Tarefa removida com sucesso!");
	};

	const completeTask = (id: string) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.name === id ? { ...task, isCompleted: true } : task,
			),
		);

		toast.success("Parabéns!! Voce concluiu uma tarefa.");
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask, deleteTask, completeTask }}>
			{children}
		</TaskContext.Provider>
	);
};
