import Calendar from "react-calendar";
import styles from "./TodoPageContent.module.sass";
import cls from "classnames";
import { ModalUI } from "@/shared/ui/modalUI/ModalUI";
import { Todo } from "@/widgets/todo";
import { useCallback, useEffect, useState } from "react";
import { fetchTodoById, getTodoList } from "@/entities/todo";
import "react-calendar/dist/Calendar.css";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";

interface TodoPageContentProps {
	id: string;
	className?: string;
}

export const TodoPageContent = ({ id, className }: TodoPageContentProps) => {
	const [selectDateDay, setSelectDateDay] = useState("");
	const todos = useSelector(getTodoList);
	const dispatch = useAppDispatch();

	const todo = todos?.find((todo) => todo.date === selectDateDay);

	const handleSelectDate = useCallback((value: Date) => {
		const formattedDate = new Intl.DateTimeFormat("ru-RU", { year: "numeric", month: "long", day: "numeric" }).format(value);

		setSelectDateDay(formattedDate);
	}, []);

	const handleOnCloseModal = useCallback(() => {
		setSelectDateDay("");
	}, []);

	useEffect(() => {
		dispatch(fetchTodoById(id));
	}, [dispatch, id]);

	return (
		<div className={cls(styles.todoPageContent, className)}>
			<Calendar onClickDay={handleSelectDate} className={styles.todoPageContentCalendar} />
			{selectDateDay && (
				<ModalUI onClose={handleOnCloseModal}>
					<Todo todo={todo} />
				</ModalUI>
			)}
		</div>
	);
};
