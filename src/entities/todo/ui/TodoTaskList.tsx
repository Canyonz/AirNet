import { TextUI } from "@/shared/ui/textUI/TextUI";
import { TodoTask } from "./todoTask/TodoTask";
import styles from "./TodoTaskList.module.sass";
import cls from "classnames";

interface TodoTaskListProps {
	selectDateDay: string;
	tasks: string[];
	className?: string;
}

export const TodoTaskList = ({ selectDateDay, tasks, className }: TodoTaskListProps) => {
	return (
		<div className={cls(styles.todoTaskListWrapper, className)}>
			<TextUI text={`Список задач на ${selectDateDay}`} variant="h2" />
			<div className={styles.todoTaskList}>
				{tasks.map((task, index) => (
					<TodoTask key={index} index={index + 1} task={task} />
				))}
			</div>
		</div>
	);
};
