import cls from "classnames";
import { ReactElement } from "react";
import { Overlay } from "../overlay/Overlay";
import { Portal } from "../portal/Portal";
import styles from "./ModalUI.module.sass";

interface ModalUIProps {
	children: ReactElement;
	className?: string;
	onClose: () => void;
}

export const ModalUI = ({ children, className, onClose }: ModalUIProps) => {
	return (
		<Portal>
			<div className={cls(styles.modalUI, className)}>
				<Overlay onClick={onClose} />
				<div className={styles.content}>{children}</div>
			</div>
		</Portal>
	);
};
