import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./ButtonUI.module.sass";
import cls from "classnames";

type ButtonUIVariant = "filled" | "outline" | "clear";
type ButtonUISize = "large" | "medium" | "small";

interface ButtonUIProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: ButtonUIVariant;
	size?: ButtonUISize;
	className?: string;
}

export const ButtonUI = ({ children, variant = "filled", size = "medium", className, ...restProps }: ButtonUIProps) => {
	return (
		<button className={cls(styles.buttonUI, styles[size], styles[variant], className)} {...restProps}>
			{children}
		</button>
	);
};
