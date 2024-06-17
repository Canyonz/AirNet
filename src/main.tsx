import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { AppStore } from "./app/providers/store";
import "./app/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppStore>
			<App />
		</AppStore>
	</React.StrictMode>
);
