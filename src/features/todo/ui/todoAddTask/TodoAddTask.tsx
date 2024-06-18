import { addTodoTask } from "@/entities/todo";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import cls from "classnames";
import { ChangeEvent, useCallback } from "react";
import { useSelector } from "react-redux";
import { getTodoAddTaskText } from "../../model/selectors/todoAddTaskSelectors";
import { todoAddTaskActions } from "../../model/slices/todoAddTaskSlice";
import styles from "./TodoAddTask.module.sass";

interface TodoAddTaskProps {
	todoListId?: string;
	selectedDate: string;
	className?: string;
}

export const TodoAddTask = ({ todoListId, selectedDate, className }: TodoAddTaskProps) => {
	const value = useSelector(getTodoAddTaskText);
	const dispatch = useAppDispatch();

	const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(todoAddTaskActions.setText(e.target.value));
	};

	const handleAddTaskClick = useCallback(() => {
		if (!value) return;

		dispatch(todoAddTaskActions.setText(""));
		dispatch(
			addTodoTask({
				todoListId: todoListId,
				selectedDate,
				task: { id: Date.now().toString(), value: value, completed: false },
			})
		);
	}, [dispatch, selectedDate, todoListId, value]);

	return (
		<div className={cls(styles.todoAddTask, className)}>
			<div className={styles.todoAddTaskInputWrapper}>
				<TextUI variant="h3" text="Добавить новую задачу" />
				<input
					type="text"
					name="addTaskField"
					value={value}
					autoComplete="off"
					onChange={handleValueChange}
					className={styles.todoAddTaskInput}
				/>
			</div>
			<ButtonUI variant="filled" size="small" onClick={handleAddTaskClick}>
				Добавить задачу
			</ButtonUI>
		</div>
	);
};
