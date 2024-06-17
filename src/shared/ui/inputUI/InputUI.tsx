import styles from "./InputUI.module.sass";
import cls from "classnames";

interface InputUIProps {
	label?: string;
	value: string;
	className?: string;
}

export const InputUI = ({ label, className }: InputUIProps) => {
	return <div className={styles.inputUIWrapper}>InputUI</div>;
};
