import { TextUI } from "@/shared/ui/textUI/TextUI";
import cls from "classnames";
import { ReactElement } from "react";
import styles from "./TodoTask.module.sass";

interface TodoTaskProps {
	index: number;
	task: string;
	actions: ReactElement;
	className?: string;
}

export const TodoTask = ({ index, task, actions, className }: TodoTaskProps) => {
	const taskText = `${index}. ${task}`;

	return (
		<div className={cls(styles.todoTask, className)}>
			<TextUI title={task} text={taskText} className={styles.todoTaskText}/>
			{actions}
		</div>
	);
};
