import { fetchTodoById } from "@/entities/todo";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ModalUI } from "@/shared/ui/modalUI/ModalUI";
import { Todo } from "@/widgets/todo";
import cls from "classnames";
import { useCallback, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./TodoPageContent.module.sass";

interface TodoPageContentProps {
	id: string;
	className?: string;
}

const getFirstAndLastDayOfWeek = (date: Date) => {
	const dayOfWeek = date.getDay();
	const firstDayOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek + 1);
	const lastDayOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek + 7);

	return { firstDayOfWeek, lastDayOfWeek };
};

const getDateFormated = (date: Date) => {
	const formatedDate = new Intl.DateTimeFormat("ru-RU", { year: "numeric", month: "long", day: "numeric" }).format(date);

	return formatedDate;
};

export const TodoPageContent = ({ id, className }: TodoPageContentProps) => {
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedWeek, setSelectedWeek] = useState<{ firstDay: string; lastDay: string }>({
		firstDay: "",
		lastDay: "",
	});

	const dispatch = useAppDispatch();

	const handleSelectedDate = useCallback((value: Date) => {
		const formattedDate = getDateFormated(value);

		const { firstDayOfWeek, lastDayOfWeek } = getFirstAndLastDayOfWeek(value);
		const formattedFirstDay = getDateFormated(firstDayOfWeek);
		const formattedLastDay = getDateFormated(lastDayOfWeek);

		setSelectedDate(formattedDate);
		setSelectedWeek({ firstDay: formattedFirstDay, lastDay: formattedLastDay });
	}, []);

	const handleOnCloseModal = useCallback(() => {
		setSelectedDate("");
	}, []);

	useEffect(() => {
		dispatch(fetchTodoById(id));
	}, [dispatch, id]);

	return (
		<div className={cls(styles.todoPageContent, className)}>
			<Calendar onClickDay={handleSelectedDate} className={styles.todoPageContentCalendar} />
			{selectedDate && (
				<ModalUI onClose={handleOnCloseModal}>
					<Todo selectedDate={selectedDate} selectedWeek={selectedWeek} />
				</ModalUI>
			)}
		</div>
	);
};
