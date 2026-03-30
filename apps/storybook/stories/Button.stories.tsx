import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "dsfr-renderer-react";

// Wrapper to adapt ComponentRenderer for Storybook
const ButtonStory = (props: {
	label: string;
	variant?: "primary" | "secondary" | "tertiary";
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	icon?: string;
	iconPosition?: "left" | "right";
}) => {
	return Button({
		element: { props },
		emit: (event: string) => console.log(`Event: ${event}`),
	});
};

const meta: Meta<typeof ButtonStory> = {
	title: "Components/Button",
	component: ButtonStory,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "tertiary"],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		iconPosition: {
			control: "select",
			options: ["left", "right"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof ButtonStory>;

export const Primary: Story = {
	args: {
		label: "Bouton principal",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		label: "Bouton secondaire",
		variant: "secondary",
	},
};

export const Tertiary: Story = {
	args: {
		label: "Bouton tertiaire",
		variant: "tertiary",
	},
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
			<ButtonStory label="Petit" size="sm" />
			<ButtonStory label="Moyen" size="md" />
			<ButtonStory label="Grand" size="lg" />
		</div>
	),
};

export const Disabled: Story = {
	args: {
		label: "Bouton désactivé",
		disabled: true,
	},
};

export const WithIcon: Story = {
	args: {
		label: "Télécharger",
		icon: "download-line",
		iconPosition: "left",
	},
};
