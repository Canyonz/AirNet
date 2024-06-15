import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
	children: ReactNode;
	bind?: HTMLElement;
}

export const Portal = ({ children, bind = document.body }: PortalProps) => {
	return createPortal(children, bind);
};
