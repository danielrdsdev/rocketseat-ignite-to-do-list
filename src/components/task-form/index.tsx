import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TaskContext } from "../../contexts/task";
import { Plus } from "../icons/plus";
import { Button, Form, Input } from "./styles";

const formSchema = z.object({
	name: z
		.string()
		.min(2, "Minimo de 2 caracteres")
		.max(50, "maixmo de 50 caracteres"),
});

type FormSchema = z.infer<typeof formSchema>;

export const TaskForm = () => {
	const { addTask } = useContext(TaskContext);
	const { register, handleSubmit, reset } = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
		},
	});

	const onSubmit = (values: FormSchema) => {
		addTask(values);

		reset();
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Input {...register("name")} placeholder="Adicione uma tarefa" />
			<Button type="submit">
				Criar
				<Plus />
			</Button>
		</Form>
	);
};
