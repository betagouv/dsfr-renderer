import type { Meta, StoryObj } from "@storybook/react";
import { Stack, Button } from "dsfr-renderer-react";

const StackStory = (props: {
	direction?: "row" | "column" | "row-reverse" | "column-reverse";
	gap?: "none" | "vsm" | "sm" | "md" | "lg" | "xl";
	align?: "start" | "center" | "end" | "stretch" | "baseline";
	justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
	wrap?: boolean;
	children?: React.ReactNode;
}) => {
	return Stack({
		element: { props },
		emit: () => {},
		children: props.children,
	});
};

const ButtonElement = (label: string) =>
	Button({
		element: { props: { label } },
		emit: () => {},
	});

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
			{ButtonElement("Bouton 1")}
			{ButtonElement("Bouton 2")}
			{ButtonElement("Bouton 3")}
		</StackStory>
	),
};

export const Vertical: Story = {
	render: () => (
		<StackStory direction="column" gap="md">
			{ButtonElement("Bouton 1")}
			{ButtonElement("Bouton 2")}
			{ButtonElement("Bouton 3")}
		</StackStory>
	),
};

export const Centered: Story = {
	render: () => (
		<StackStory direction="row" justify="center" gap="md">
			{ButtonElement("Gauche")}
			{ButtonElement("Centre")}
			{ButtonElement("Droite")}
		</StackStory>
	),
};

export const SpaceBetween: Story = {
	render: () => (
		<StackStory direction="row" justify="between" style={{ width: "100%" }}>
			{ButtonElement("Gauche")}
			{ButtonElement("Droite")}
		</StackStory>
	),
};

export const WithWrap: Story = {
	render: () => (
		<StackStory direction="row" gap="sm" wrap>
			{Array.from({ length: 10 }, (_, i) => ButtonElement(`Bouton ${i + 1}`))}
		</StackStory>
	),
};

export const Gaps: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
			<div>
				<p>Gap: vsm</p>
				<StackStory direction="row" gap="vsm">
					{ButtonElement("A")}
					{ButtonElement("B")}
					{ButtonElement("C")}
				</StackStory>
			</div>
			<div>
				<p>Gap: sm</p>
				<StackStory direction="row" gap="sm">
					{ButtonElement("A")}
					{ButtonElement("B")}
					{ButtonElement("C")}
				</StackStory>
			</div>
			<div>
				<p>Gap: md</p>
				<StackStory direction="row" gap="md">
					{ButtonElement("A")}
					{ButtonElement("B")}
					{ButtonElement("C")}
				</StackStory>
			</div>
			<div>
				<p>Gap: lg</p>
				<StackStory direction="row" gap="lg">
					{ButtonElement("A")}
					{ButtonElement("B")}
					{ButtonElement("C")}
				</StackStory>
			</div>
		</div>
	),
};
