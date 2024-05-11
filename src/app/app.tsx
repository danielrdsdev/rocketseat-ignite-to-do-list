import styled from "styled-components";
import { TaskForm } from "../components/task-form";
import { TaskList } from "../components/task-list";

export const App = () => {
	return (
		<Main>
			<Section>
				<TaskForm />
				<TaskList />
			</Section>
		</Main>
	);
};

const Main = styled.main`
  flex: 1;
`;

const Section = styled.section`
  width: 100%;
  max-width: 763px;
  padding-inline: 1.5rem;
  margin-inline: auto;
  margin-top: -24px;
`;
