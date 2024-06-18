import { TodoTask, getTodoList } from "@/entities/todo";
import { TodoActionsTask, TodoAddTask } from "@/features/todo";
import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import cls from "classnames";
import styles from "./Todo.module.sass";
import { useState } from "react";
import { useSelector } from "react-redux";

interface TodoProps {
	selectedDate: string;
	selectedWeek: { firstDay: string; lastDay: string };
	className?: string;
}

export const Todo = ({ selectedDate, selectedWeek, className }: TodoProps) => {
	const [isCompleted, setIsCompleted] = useState(false);
	const [isWeek, setIsWeek] = useState(false);

	const todos = useSelector(getTodoList);

	const filteredTodosDay = todos?.find((todo) => todo.date === selectedDate);

	const filteredTodosWeek = todos?.filter((todo) => {
		return todo.date >= selectedWeek.firstDay && todo.date <= selectedWeek.lastDay;
	});

	const filteredTasksDay = filteredTodosDay?.tasks && filteredTodosDay.tasks.filter((task) => task.completed === isCompleted);

	const filteredTasksWeek =
		filteredTodosWeek &&
		filteredTodosWeek
			.map((todo) =>
				todo.tasks
					.filter((task) => task.completed === isCompleted)
					.map((task, index) => (
						<TodoTask
							key={task.id}
							index={index + 1}
							task={task.value}
							actions={<TodoActionsTask taskId={task?.id} todoListId={todo?.id} isCompleted={isCompleted} />}
							className={cls(styles.todoTask, { [styles.isCompleted]: isCompleted })}
						/>
					))
			)
			.flat();

	const todoDate = isWeek ? `${selectedWeek.firstDay} - ${selectedWeek.lastDay}` : selectedDate;
	const todoTasksDay = filteredTasksDay?.length ? (
		filteredTasksDay.map((task, index) => (
			<TodoTask
				key={task.id}
				index={index + 1}
				task={task.value}
				actions={<TodoActionsTask taskId={task?.id} todoListId={filteredTodosDay?.id} isCompleted={isCompleted} />}
				className={cls(styles.todoTask, { [styles.isCompleted]: isCompleted })}
			/>
		))
	) : (
		<TextUI text={`${isCompleted ? "Выполненных з" : "З"}адач пока нет`} textAlign="center" variant="h3" />
	);

	const todoTasksWeek = filteredTasksWeek?.length ? (
		filteredTasksWeek
	) : (
		<TextUI text={`${isCompleted ? "Выполненных з" : "З"}адач пока нет`} textAlign="center" variant="h3" />
	);

	const todoList = isWeek ? todoTasksWeek : todoTasksDay;

	const handleIsCompletedClick = () => {
		setIsCompleted((prev) => !prev);
	};

	const handleIsWeekClick = () => {
		setIsWeek((prev) => !prev);
	};

	return (
		<div className={cls(styles.todo, className)}>
			<TextUI text={`Список задач на ${todoDate}`} variant="h2" />
			<TodoAddTask todoListId={filteredTodosDay?.id} selectedDate={selectedDate} />

			<div className={styles.todoFiltersWrapper}>
				<TextUI text="Фильтр задач по" />
				<div className={styles.todoFilters}>
					<ButtonUI onClick={handleIsWeekClick}>{isWeek ? "День" : "Неделя"}</ButtonUI>
					<ButtonUI onClick={handleIsCompletedClick}>{isCompleted ? "Не выполненные" : "Выполненные"}</ButtonUI>
				</div>
			</div>

			<div className={styles.todoTaskList}>{todoList}</div>
		</div>
	);
};
