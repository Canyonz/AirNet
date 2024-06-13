import { RouterProvider } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";

export const AppRouter = () => {
	return <RouterProvider router={routeConfig} />;
};
