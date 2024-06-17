import CheckSVG from "@/shared/assets/icons/check.svg";
import DeleteSVG from "@/shared/assets/icons/delete.svg";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import cls from "classnames";
import { useCallback } from "react";
import styles from "./TodoActionsTask.module.sass";

interface TodoActionsTaskProps {
	taskId: string;
	date: string;
	className?: string;
}

export const TodoActionsTask = ({ taskId, date, className }: TodoActionsTaskProps) => {
	const handleCompleteTaskClick = useCallback(() => {
		console.log(taskId);
		console.log(date);
	}, [date, taskId]);

	const handleDeleteTaskClick = useCallback(() => {
		console.log(taskId);
		console.log(date);
	}, [date, taskId]);

	return (
		<div className={cls(styles.todoActionsTask, className)}>
			<IconUI Svg={CheckSVG} onClick={handleCompleteTaskClick} classNameIcon={styles.todoActionsTaskCompleteIcon} />
			<IconUI Svg={DeleteSVG} onClick={handleDeleteTaskClick} classNameIcon={styles.todoActionsTaskDeleteIcon} />
		</div>
	);
};
