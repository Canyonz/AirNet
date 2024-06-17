import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import styles from "./TodoAddTask.module.sass";
import cls from "classnames";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { getTodoAddTaskText } from "../../model/selectors/todoAddTaskSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { todoAddTaskActions } from "../../model/slices/todoAddTaskSlice";

interface TodoAddTaskProps {
	className?: string;
}

export const TodoAddTask = ({ className }: TodoAddTaskProps) => {
	const value = useSelector(getTodoAddTaskText);
	const dispatch = useAppDispatch();

	const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(todoAddTaskActions.setText(e.target.value));
	};

	return (
		<div className={cls(styles.todoAddTask, className)}>
			<div className={styles.todoAddTaskInputWrapper}>
				<TextUI variant="h3" text="Добавить новую задачу" />
				<input type="text" value={value} onChange={handleValueChange} className={styles.todoAddTaskInput} />
			</div>
			<ButtonUI variant="filled" size="small">
				Добавить задачу
			</ButtonUI>
		</div>
	);
};
