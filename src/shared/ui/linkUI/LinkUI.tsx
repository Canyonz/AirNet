import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "classnames";
import styles from "./LinkUI.module.sass";

interface LinkUIProps extends LinkProps {
	children?: ReactNode;
	className?: string;
}

export const LinkUI = ({ to, className, children, ...restProps }: LinkUIProps) => {
	return (
		<Link to={to} className={cls(styles.linkUI, className)} {...restProps}>
			{children}
		</Link>
	);
};
