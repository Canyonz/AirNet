import { TodoTaskList } from "@/entities/todo";
import { ModalUI } from "@/shared/ui/modalUI/ModalUI";
import { useCallback, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useParams } from "react-router-dom";
import styles from "./TodoPage.module.sass";

const taskList = ["Сделать проект для вакансии", "Получить хороший фидбэк", "Получить оффер", "Устроиться на работу)"];

export const TodoPage = () => {
	const [selectDateDay, setSelectDateDay] = useState("");
	const [isTaskListOpen, setIsTaskListOpen] = useState(false);

	const { profile } = useParams<{ profile: string }>();

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
			<Calendar onClickDay={handleSelectDate} />
			{isTaskListOpen && (
				<ModalUI onClose={handleOnCloseModal}>
					<TodoTaskList selectDateDay={selectDateDay} tasks={taskList} />
				</ModalUI>
			)}
		</main>
	);
};
