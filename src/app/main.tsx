import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/header";
import { TaskProvider } from "../contexts/task";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import { App } from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<TaskProvider>
				<GlobalStyle />
				<Header />
				<App />

				<Toaster
					position="top-center"
					toastOptions={{
						style: {
							padding: 16,
							backgroundColor: theme.colors.gray["700"],
							border: `1px solid ${theme.colors.gray["400"]}`,
							color: theme.colors.gray["100"],
							gap: 16,
						},
					}}
				/>
			</TaskProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
