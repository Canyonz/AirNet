import { useEffect } from "react";
import { AppRouter } from "./providers/routes";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchAllProfiles } from "@/entities/profile";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchAllProfiles());
	}, [dispatch]);

	return (
		<div className="app">
			<AppRouter />
		</div>
	);
}

export default App;
