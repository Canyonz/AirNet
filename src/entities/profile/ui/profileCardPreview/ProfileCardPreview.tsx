import { ButtonUI } from "@/shared/ui/buttonUI/ButtonUI";
import styles from "./ProfileCardPreview.module.sass";
import cls from "classnames";
import { TextUI } from "@/shared/ui/textUI/TextUI";

interface ProfileCardPreviewProps {
	text?: string;
	img: string;
	className?: string;
	onClick: () => void;
}

export const ProfileCardPreview = ({ text, img, className, onClick }: ProfileCardPreviewProps) => {
	return (
		<ButtonUI
			variant="clear"
			style={{ backgroundImage: `url(${img})` }}
			className={cls(styles.profileCardPreview, className)}
			onClick={onClick}
		>
			<TextUI text={text} variant="h1" textAlign="center" className={styles.profileCardPreviewText} />
		</ButtonUI>
	);
};
