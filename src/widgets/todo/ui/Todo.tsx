import { TodoListI, TodoTask } from "@/entities/todo";
import { TodoActionsTask, TodoAddTask } from "@/features/todo";
import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import cls from "classnames";
import styles from "./Todo.module.sass";

interface TodoProps {
	todo?: TodoListI;
	className?: string;
}

export const Todo = ({ todo, className }: TodoProps) => {
	return (
		<div className={cls(styles.todo, className)}>
			<TextUI text={`Список задач на ${todo?.date}`} variant="h2" />
			<TodoAddTask todoListId={todo?.id} />

			<div className={styles.todoFiltersWrapper}>
				<TextUI text="Фильтр задач по" />
				<div className={styles.todoFilters}>
					<ButtonUI>Неделя</ButtonUI>
					<ButtonUI>Выполненные</ButtonUI>
				</div>
			</div>

			<div className={styles.todoTaskList}>
				{todo?.tasks ? (
					todo.tasks.map((task, index) => (
						<TodoTask
							key={task.id}
							index={index + 1}
							task={task.value}
							actions={<TodoActionsTask taskId={task?.id} date={todo?.date} />}
						/>
					))
				) : (
					<TextUI text="Задач пока нет" textAlign="center" variant="h3" />
				)}
			</div>
		</div>
	);
};
