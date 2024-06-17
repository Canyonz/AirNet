import { TodoTask } from "@/entities/todo";
import { TodoActionsTask, TodoAddTask } from "@/features/todo";
import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import cls from "classnames";
import styles from "./Todo.module.sass";

interface TodoProps {
	selectDate: string;
	tasks: string[];
	className?: string;
}

export const Todo = ({ selectDate, tasks, className }: TodoProps) => {
	return (
		<div className={cls(styles.todo, className)}>
			<TextUI text={`Список задач на ${selectDate}`} variant="h2" />
			<TodoAddTask />

			<div className={styles.todoFiltersWrapper}>
				<TextUI text="Фильтр задач по" />
				<div className={styles.todoFilters}>
					<ButtonUI>Неделя</ButtonUI>
					<ButtonUI>Выполненные</ButtonUI>
				</div>
			</div>

			<div className={styles.todoTaskList}>
				{tasks.map((task, index) => (
					<TodoTask key={index} index={index + 1} task={task} actions={<TodoActionsTask taskId={index} date={selectDate} />} />
				))}
			</div>
		</div>
	);
};
