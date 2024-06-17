import { TextUI } from "@/shared/ui/textUI/TextUI";
import cls from "classnames";
import { ReactElement } from "react";
import styles from "./TodoTask.module.sass";

interface TodoTaskProps {
	index: number;
	task: string;
	actions: ReactElement;
	classname?: string;
}

export const TodoTask = ({ index, task, actions, classname }: TodoTaskProps) => {
	const taskText = `${index}. ${task}`;

	return (
		<div className={cls(styles.todoTask, classname)}>
			<TextUI title={task} text={taskText} className={styles.todoTaskText}/>
			{actions}
		</div>
	);
};
