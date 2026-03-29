import type { ComponentRenderer } from "@json-render/react";

type Option = { value: string; label: string };

export const Select: ComponentRenderer<{
	label: string;
	name: string;
	options: Array<Option>;
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	state?: "default" | "success" | "error";
	stateMessage?: string;
}> = ({ element, emit }) => {
	const { props } = element;
	const stateClass = props.state ? `fr-select-group--${props.state}` : "";

	return (
		<div className={`fr-select-group ${stateClass}`.trim()}>
			<label className="fr-label" htmlFor={props.name}>
				{props.label}
				{props.required && <span className="fr-hint-text"> (obligatoire)</span>}
			</label>
			<select
				className="fr-select"
				id={props.name}
				name={props.name}
				defaultValue={props.value}
				disabled={props.disabled}
				required={props.required}
				onChange={() => emit("change")}
			>
				{props.placeholder && (
					<option value="" disabled hidden>
						{props.placeholder}
					</option>
				)}
				{props.options.map((option: Option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			{props.stateMessage && (
				<p className={`fr-message fr-message--${props.state || "default"}`}>
					{props.stateMessage}
				</p>
			)}
		</div>
	);
};
