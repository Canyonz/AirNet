import styles from "./TextUI.module.sass";
import cls from "classnames";

type TextUIVariant = "h1" | "h2" | "h3" | "span";
type TextUIColor = "primary" | "grey";
type TextUIAlign = "left" | "center" | "right";

interface TextUIProps {
	text?: string;
	title?: string;
	variant?: TextUIVariant;
	color?: TextUIColor;
	textAlign?: TextUIAlign;
	className?: string;
}

export const TextUI = ({
	text = "",
	title = "",
	variant = "span",
	color = "primary",
	textAlign = "left",
	className,
}: TextUIProps) => {
	const TextTag = variant;

	return (
		<TextTag title={title} className={cls(styles.textUI, styles[color], styles[textAlign], className)}>
			{text}
		</TextTag>
	);
};
