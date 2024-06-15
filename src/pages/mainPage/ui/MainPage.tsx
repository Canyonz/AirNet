import { ProfileCardPreview } from "@/entities/profile";
import styles from "./MainPage.module.sass";
import { getRouteTODO } from "@/shared/consts/routes";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
	const navigate = useNavigate();

	return (
		<main className={styles.mainPage}>
			<ProfileCardPreview
				text="Работа"
				img="/images/jobTodo.jpg"
				onClick={() => navigate(getRouteTODO("job"))}
				className={styles.mainPageLeftCard}
			/>
			<ProfileCardPreview
				text="Дом"
				img="/images/homeTodo.jpg"
				onClick={() => navigate(getRouteTODO("home"))}
				className={styles.mainPageRightCard}
			/>
		</main>
	);
};
