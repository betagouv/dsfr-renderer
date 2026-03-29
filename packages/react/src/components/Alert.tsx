import type { ComponentRenderer } from "@json-render/react";
import { useState } from "react";

export const Alert: ComponentRenderer<{
	title?: string;
	message: string;
	type: "info" | "success" | "warning" | "error";
	size?: "sm" | "md";
	closable?: boolean;
}> = ({ element }) => {
	const [isOpen, setIsOpen] = useState(true);
	const { props } = element;

	if (!isOpen) return null;

	const sizeClass = props.size === "sm" ? "fr-alert--sm" : "";

	return (
		<div
			className={`fr-alert fr-alert--${props.type} ${sizeClass}`.trim()}
			role="alert"
		>
			{props.title && <h3 className="fr-alert__title">{props.title}</h3>}
			<p>{props.message}</p>
			{props.closable && (
				<button
					type="button"
					className="fr-btn--close"
					onClick={() => setIsOpen(false)}
					aria-label="Fermer l'alerte"
				>
					Fermer
				</button>
			)}
		</div>
	);
};
