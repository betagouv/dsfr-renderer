import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "dsfr-renderer-react";

const HeadingStory = (props: {
	text: string;
	level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: "xs" | "sm" | "md" | "lg" | "xl";
}) => {
	return Heading({
		element: { props },
		emit: () => {},
	});
};

const meta: Meta<typeof HeadingStory> = {
	title: "Components/Heading",
	component: HeadingStory,
	tags: ["autodocs"],
	argTypes: {
		level: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
		size: {
			control: "select",
			options: ["xs", "sm", "md", "lg", "xl"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof HeadingStory>;

export const H1: Story = {
	args: {
		text: "Titre de niveau 1",
		level: "h1",
	},
};

export const H2: Story = {
	args: {
		text: "Titre de niveau 2",
		level: "h2",
	},
};

export const H3: Story = {
	args: {
		text: "Titre de niveau 3",
		level: "h3",
	},
};

export const H4: Story = {
	args: {
		text: "Titre de niveau 4",
		level: "h4",
	},
};

export const AllLevels: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<HeadingStory text="Titre H1" level="h1" />
			<HeadingStory text="Titre H2" level="h2" />
			<HeadingStory text="Titre H3" level="h3" />
			<HeadingStory text="Titre H4" level="h4" />
			<HeadingStory text="Titre H5" level="h5" />
			<HeadingStory text="Titre H6" level="h6" />
		</div>
	),
};
