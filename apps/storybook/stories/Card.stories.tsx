import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "dsfr-renderer-react";

const CardStory = (props: {
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
	link?: string;
	linkLabel?: string;
	size?: "sm" | "md" | "lg";
	horizontal?: boolean;
	children?: React.ReactNode;
}) => {
	return Card({
		element: { props },
		emit: () => {},
		children: props.children,
	});
};

const meta: Meta<typeof CardStory> = {
	title: "Components/Card",
	component: CardStory,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof CardStory>;

export const Default: Story = {
	args: {
		title: "Titre de la carte",
		description: "Description de la carte avec du contenu textuel.",
	},
};

export const WithLink: Story = {
	args: {
		title: "Carte avec lien",
		description: "Cliquez pour en savoir plus.",
		link: "#",
		linkLabel: "En savoir plus",
	},
};

export const WithImage: Story = {
	args: {
		title: "Carte illustrée",
		description: "Une carte avec une image d'illustration.",
		image: "https://via.placeholder.com/400x200",
		imageAlt: "Image d'illustration",
		link: "#",
	},
};

export const Horizontal: Story = {
	args: {
		title: "Carte horizontale",
		description: "Affichage horizontal pour les espaces restreints.",
		image: "https://via.placeholder.com/200x150",
		horizontal: true,
	},
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
			<div style={{ width: "200px" }}>
				<CardStory title="Petite" size="sm" />
			</div>
			<div style={{ width: "250px" }}>
				<CardStory title="Moyenne" description="Description standard" />
			</div>
			<div style={{ width: "300px" }}>
				<CardStory title="Grande" description="Description plus longue" size="lg" />
			</div>
		</div>
	),
};
