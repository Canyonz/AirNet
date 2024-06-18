import CheckSVG from "@/shared/assets/icons/check.svg";
import DeleteSVG from "@/shared/assets/icons/delete.svg";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import cls from "classnames";
import { useCallback } from "react";
import styles from "./TodoActionsTask.module.sass";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { completeTodoTaskById, deleteTodoById } from "@/entities/todo";

interface TodoActionsTaskProps {
	taskId?: string;
	todoListId?: string;
	isCompleted?: boolean;
	className?: string;
}

export const TodoActionsTask = ({ taskId, todoListId, isCompleted, className }: TodoActionsTaskProps) => {
	const dispatch = useAppDispatch();

	const handleCompleteTaskClick = useCallback(() => {
		if (taskId && todoListId) dispatch(completeTodoTaskById({ taskId, todoListId, completed: true }));
	}, [taskId, todoListId, dispatch]);

	const handleDeleteTaskClick = useCallback(() => {
		if (taskId && todoListId) dispatch(deleteTodoById({ taskId, todoListId }));
	}, [dispatch, taskId, todoListId]);

	return (
		<div className={cls(styles.todoActionsTask, className)}>
			{!isCompleted && (
				<IconUI Svg={CheckSVG} onClick={handleCompleteTaskClick} classNameIcon={styles.todoActionsTaskCompleteIcon} />
			)}
			<IconUI Svg={DeleteSVG} onClick={handleDeleteTaskClick} classNameIcon={styles.todoActionsTaskDeleteIcon} />
		</div>
	);
};
