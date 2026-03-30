import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "dsfr-renderer-react";

const AlertStory = (props: {
	title?: string;
	message: string;
	type: "info" | "success" | "warning" | "error";
	size?: "sm" | "md";
	closable?: boolean;
}) => {
	return Alert({
		element: { props },
		emit: () => {},
	});
};

const meta: Meta<typeof AlertStory> = {
	title: "Components/Alert",
	component: AlertStory,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["info", "success", "warning", "error"],
		},
		size: {
			control: "select",
			options: ["sm", "md"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof AlertStory>;

export const Info: Story = {
	args: {
		title: "Information",
		message: "Ceci est un message d'information.",
		type: "info",
	},
};

export const Success: Story = {
	args: {
		title: "Succès",
		message: "Votre action a été enregistrée avec succès.",
		type: "success",
	},
};

export const Warning: Story = {
	args: {
		title: "Attention",
		message: "Vérifiez les informations saisies.",
		type: "warning",
	},
};

export const Error: Story = {
	args: {
		title: "Erreur",
		message: "Une erreur est survenue. Veuillez réessayer.",
		type: "error",
	},
};

export const Small: Story = {
	args: {
		message: "Alerte compacte sans titre.",
		type: "info",
		size: "sm",
	},
};

export const Closable: Story = {
	args: {
		title: "Fermer",
		message: "Cliquez sur le bouton pour fermer cette alerte.",
		type: "info",
		closable: true,
	},
};

export const AllTypes: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<AlertStory message="Message d'information" type="info" />
			<AlertStory message="Message de succès" type="success" />
			<AlertStory message="Message d'avertissement" type="warning" />
			<AlertStory message="Message d'erreur" type="error" />
		</div>
	),
};
