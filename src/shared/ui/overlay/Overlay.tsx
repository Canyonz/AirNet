import styles from "./Overlay.module.sass";
import cls from "classnames";

interface OverlayProps {
	className?: string;
	onClick: () => void;
}

export const Overlay = ({ className, onClick }: OverlayProps) => {
	return <div className={cls(styles.overlay, className)} onClick={onClick} />;
};
