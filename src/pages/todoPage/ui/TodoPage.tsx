import { RootStateType } from "@/app/providers/store/config/configStore";
import { getIsLoadingProfile, getProfileById } from "@/entities/profile";
import ArrowSVG from "@/shared/assets/icons/arrow-left.svg";
import { getRouteMain } from "@/shared/consts/routes";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import { LinkUI } from "@/shared/ui/linkUI/LinkUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./TodoPage.module.sass";
import { TodoPageContent } from "./todoPageContent/TodoPageContent";

export const TodoPage = () => {
	const { id = "" } = useParams<{ id: string }>();

	const profile = useSelector((state: RootStateType) => getProfileById(id, state));
	const profileIsLoading = useSelector(getIsLoadingProfile);

	if (profileIsLoading) {
		return (
			<main className={styles.todoPage}>
				<TextUI text="Загрузка" variant="h1" textAlign="center" />
			</main>
		);
	}

	if (!profile) {
		return (
			<main className={styles.todoPage}>
				<TextUI text="Страница профиля не найдена" variant="h1" textAlign="center" />
			</main>
		);
	}

	return (
		<main className={styles.todoPage}>
			<header className={styles.todoPageHeader}>
				<LinkUI to={getRouteMain()} className={styles.todoPageHeaderToBack}>
					<IconUI Svg={ArrowSVG} classNameIcon={styles.todoPageHeaderToBackIcon} />
					<TextUI text="Вернуться на страницу выбора профиля" className={styles.todoPageHeaderToBackText} />
				</LinkUI>
				<TextUI text={profile?.name} variant="h2" />
			</header>
			<section className={styles.todoPageContentWrapper}>
				<TodoPageContent id={id} />
			</section>
		</main>
	);
};
