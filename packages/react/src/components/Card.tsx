import type { ComponentRenderer } from "@json-render/react";

export const Card: ComponentRenderer<{
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
	link?: string;
	linkLabel?: string;
	size?: "sm" | "md" | "lg";
	horizontal?: boolean;
}> = ({ element, children }) => {
	const { props } = element;
	const sizeClass = props.size ? `fr-card--${props.size}` : "";
	const horizontalClass = props.horizontal ? "fr-card--horizontal" : "";

	return (
		<div className={`fr-card ${sizeClass} ${horizontalClass}`.trim()}>
			<div className="fr-card__body">
				{props.title && <h4 className="fr-card__title">{props.title}</h4>}
				{props.description && (
					<p className="fr-card__desc">{props.description}</p>
				)}
				{props.link && (
					<div className="fr-card__end">
						<p className="fr-card__detail">
							<a className="fr-link" href={props.link}>
								{props.linkLabel || "En savoir plus"}
							</a>
						</p>
					</div>
				)}
				{children}
			</div>
			{props.image && (
				<div className="fr-card__header">
					<div className="fr-card__img">
						<img
							className="fr-responsive-img"
							src={props.image}
							alt={props.imageAlt || ""}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
