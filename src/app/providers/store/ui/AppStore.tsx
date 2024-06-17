import { Provider } from "react-redux";
import { configStore } from "../config/configStore";
import { ReactNode } from "react";

interface AppStoreProps {
	children: ReactNode;
}

export const AppStore = ({ children }: AppStoreProps) => {
	return <Provider store={configStore}>{children}</Provider>;
};
