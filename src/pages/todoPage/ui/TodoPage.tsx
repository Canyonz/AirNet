import { ModalUI } from "@/shared/ui/modalUI/ModalUI";
import { useCallback, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import styles from "./TodoPage.module.sass";
import { LinkUI } from "@/shared/ui/linkUI/LinkUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import { getRouteMain } from "@/shared/consts/routes";
import ArrowSVG from "@/shared/assets/icons/arrow-left.svg";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import { Todo } from "@/widgets/todo";

const taskList = ["Сделать проект для вакансии", "Получить хороший фидбэк", "Получить оффер", "Устроиться на работу)"];

export const TodoPage = () => {
	const [selectDateDay, setSelectDateDay] = useState("");
	const [isTaskListOpen, setIsTaskListOpen] = useState(false);

	const { profile } = useParams<{ profile: "job" | "home" }>();

	const pageText = profile === "home" ? "Дом" : "Работа";

	const handleSelectDate = useCallback((value: Date) => {
		const formattedDate = new Intl.DateTimeFormat("ru-RU", { year: "numeric", month: "long", day: "numeric" }).format(value);

		setSelectDateDay(formattedDate);
		setIsTaskListOpen(true);
	}, []);

	const handleOnCloseModal = useCallback(() => {
		setIsTaskListOpen(false);
	}, []);

	return (
		<main className={styles.todoPage}>
			<header className={styles.todoPageHeader}>
				<LinkUI to={getRouteMain()} className={styles.todoPageHeaderToBack}>
					<IconUI Svg={ArrowSVG} classNameIcon={styles.todoPageHeaderToBackIcon} />
					<TextUI text="Вернуться на страницу выбора профиля" className={styles.todoPageHeaderToBackText} />
				</LinkUI>
				<TextUI text={pageText} variant="h2" />
			</header>
			<section className={styles.todoPageContent}>
				<Calendar onClickDay={handleSelectDate} className={styles.todoPageContentCalendar} />
				{isTaskListOpen && (
					<ModalUI onClose={handleOnCloseModal}>
						<Todo selectDate={selectDateDay} tasks={taskList} />
					</ModalUI>
				)}
			</section>
		</main>
	);
};
