import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "dsfr-renderer-react";
import { createStoryComponent } from "./utils";

const TextStory = createStoryComponent(Text);

const meta: Meta<typeof TextStory> = {
	title: "Components/Text",
	component: TextStory,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "sm", "xs", "lead", "bold", "muted"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof TextStory>;

export const Default: Story = {
	args: {
		text: "Texte par défaut avec la taille standard.",
	},
};

export const Small: Story = {
	args: {
		text: "Texte small pour les informations secondaires.",
		variant: "sm",
	},
};

export const ExtraSmall: Story = {
	args: {
		text: "Texte extra small pour les légendes.",
		variant: "xs",
	},
};

export const Lead: Story = {
	args: {
		text: "Texte lead pour les introductions mises en avant.",
		variant: "lead",
	},
};

export const Bold: Story = {
	args: {
		text: "Texte en gras pour l'emphase.",
		variant: "bold",
	},
};

export const Muted: Story = {
	args: {
		text: "Texte atténué pour les informations moins importantes.",
		variant: "muted",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<TextStory text="Texte par défaut" />
			<TextStory text="Texte small" variant="sm" />
			<TextStory text="Texte extra small" variant="xs" />
			<TextStory text="Texte lead" variant="lead" />
			<TextStory text="Texte bold" variant="bold" />
			<TextStory text="Texte muted" variant="muted" />
		</div>
	),
};
