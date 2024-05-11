import { Logo } from "../icons/logo";
import { HeaderContainer, Title } from "./styles";

export const Header = () => {
	return (
		<HeaderContainer>
			<Title>
				<Logo />
				<h1>
					to<span>do</span>
				</h1>
			</Title>
		</HeaderContainer>
	);
};
