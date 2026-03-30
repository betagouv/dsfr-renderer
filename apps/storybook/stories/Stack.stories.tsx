import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Button } from "dsfr-renderer-react";
import { createStoryComponent } from "./utils";

const StackStory = createStoryComponent(Stack);
const ButtonStory = createStoryComponent(Button);

const meta: Meta<typeof StackStory> = {
	title: "Components/Stack",
	component: StackStory,
	tags: ["autodocs"],
	argTypes: {
		direction: {
			control: "select",
			options: ["row", "column", "row-reverse", "column-reverse"],
		},
		gap: {
			control: "select",
			options: ["none", "vsm", "sm", "md", "lg", "xl"],
		},
		align: {
			control: "select",
			options: ["start", "center", "end", "stretch", "baseline"],
		},
		justify: {
			control: "select",
			options: ["start", "center", "end", "between", "around", "evenly"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof StackStory>;

export const Horizontal: Story = {
	render: () => (
		<StackStory direction="row" gap="md">
			<ButtonStory label="Bouton 1" />
			<ButtonStory label="Bouton 2" />
			<ButtonStory label="Bouton 3" />
		</StackStory>
	),
};

export const Vertical: Story = {
	render: () => (
		<StackStory direction="column" gap="md">
			<ButtonStory label="Bouton 1" />
			<ButtonStory label="Bouton 2" />
			<ButtonStory label="Bouton 3" />
		</StackStory>
	),
};

export const Centered: Story = {
	render: () => (
		<StackStory direction="row" justify="center" gap="md">
			<ButtonStory label="Gauche" />
			<ButtonStory label="Centre" />
			<ButtonStory label="Droite" />
		</StackStory>
	),
};

export const SpaceBetween: Story = {
	render: () => (
		<StackStory direction="row" justify="between">
			<ButtonStory label="Gauche" />
			<ButtonStory label="Droite" />
		</StackStory>
	),
};

export const WithWrap: Story = {
	render: () => (
		<StackStory direction="row" gap="sm" wrap>
			{Array.from({ length: 10 }, (_, i) => (
				<ButtonStory key={i} label={`Bouton ${i + 1}`} />
			))}
		</StackStory>
	),
};

export const Gaps: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			<div>
				<p>Gap: vsm</p>
				<StackStory direction="row" gap="vsm">
					<ButtonStory label="A" />
					<ButtonStory label="B" />
					<ButtonStory label="C" />
				</StackStory>
			</div>
			<div>
				<p>Gap: sm</p>
				<StackStory direction="row" gap="sm">
					<ButtonStory label="A" />
					<ButtonStory label="B" />
					<ButtonStory label="C" />
				</StackStory>
			</div>
			<div>
				<p>Gap: md</p>
				<StackStory direction="row" gap="md">
					<ButtonStory label="A" />
					<ButtonStory label="B" />
					<ButtonStory label="C" />
				</StackStory>
			</div>
			<div>
				<p>Gap: lg</p>
				<StackStory direction="row" gap="lg">
					<ButtonStory label="A" />
					<ButtonStory label="B" />
					<ButtonStory label="C" />
				</StackStory>
			</div>
		</div>
	),
};
