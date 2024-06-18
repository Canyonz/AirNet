import { MainPage } from "@/pages/mainPage";
import { TodoPage } from "@/pages/todoPage";
import { getRouteMain, getRouteTODO } from "@/shared/consts/routes";
import { createBrowserRouter } from "react-router-dom";

export const routeConfig = createBrowserRouter(
	[
		{
			path: getRouteMain(),
			element: <MainPage />,
			errorElement: <div>Страница не найдена...</div>,
		},
		{
			path: getRouteTODO(":id"),
			element: <TodoPage />,
			errorElement: <div>Страница не найдена...</div>,
		},
	],
	{
		basename: "/AirNet/",
	}
);
