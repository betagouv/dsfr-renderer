import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "dsfr-renderer-react";
import { createStoryComponent } from "./utils";

const InputStory = createStoryComponent(Input);

const meta: Meta<typeof InputStory> = {
	title: "Components/Input",
	component: InputStory,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["text", "email", "password", "number", "tel", "url", "date"],
		},
		state: {
			control: "select",
			options: ["default", "success", "error"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof InputStory>;

export const Default: Story = {
	args: {
		label: "Nom",
		name: "name",
		placeholder: "Entrez votre nom",
	},
};

export const Required: Story = {
	args: {
		label: "Email",
		name: "email",
		type: "email",
		placeholder: "exemple@domaine.fr",
		required: true,
	},
};

export const WithHint: Story = {
	args: {
		label: "Téléphone",
		name: "phone",
		type: "tel",
		placeholder: "06 00 00 00 00",
		hint: "Format: 06 00 00 00 00",
	},
};

export const Success: Story = {
	args: {
		label: "Code postal",
		name: "postalcode",
		value: "75001",
		state: "success",
		stateMessage: "Code postal valide",
	},
};

export const Error: Story = {
	args: {
		label: "Email",
		name: "email",
		type: "email",
		value: "invalid",
		state: "error",
		stateMessage: "Format d'email invalide",
	},
};

export const Disabled: Story = {
	args: {
		label: "Champ désactivé",
		name: "disabled",
		disabled: true,
		placeholder: "Non modifiable",
	},
};
