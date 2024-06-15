import DeleteSVG from "@/shared/assets/icons/delete.svg";
import { IconUI } from "@/shared/ui/iconUI/IconUI";
import { TextUI } from "@/shared/ui/textUI/TextUI";
import cls from "classnames";
import styles from "./TodoTask.module.sass";

interface TodoTaskProps {
	index: number;
	task: string;
	classname?: string;
}

export const TodoTask = ({ index, task, classname }: TodoTaskProps) => {
	const taskText = `${index}. ${task}`;

	return (
		<div className={cls(styles.todoTask, classname)}>
			<TextUI text={taskText} />
			<IconUI Svg={DeleteSVG} onClick={() => {}} />
		</div>
	);
};
