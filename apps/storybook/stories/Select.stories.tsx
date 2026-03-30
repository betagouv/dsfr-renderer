import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "dsfr-renderer-react";
import { createStoryComponent } from "./utils";

const SelectStory = createStoryComponent(Select);

const meta: Meta<typeof SelectStory> = {
	title: "Components/Select",
	component: SelectStory,
	tags: ["autodocs"],
	argTypes: {
		state: {
			control: "select",
			options: ["default", "success", "error"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof SelectStory>;

const defaultOptions = [
	{ value: "fr", label: "France" },
	{ value: "be", label: "Belgique" },
	{ value: "ch", label: "Suisse" },
	{ value: "lu", label: "Luxembourg" },
];

export const Default: Story = {
	args: {
		label: "Pays",
		name: "country",
		options: defaultOptions,
		placeholder: "Sélectionnez un pays",
	},
};

export const Required: Story = {
	args: {
		label: "Département",
		name: "department",
		options: [
			{ value: "75", label: "Paris" },
			{ value: "13", label: "Bouches-du-Rhône" },
			{ value: "69", label: "Rhône" },
		],
		placeholder: "Sélectionnez un département",
		required: true,
	},
};

export const WithValue: Story = {
	args: {
		label: "Pays",
		name: "country",
		options: defaultOptions,
		value: "fr",
	},
};

export const Success: Story = {
	args: {
		label: "Pays",
		name: "country",
		options: defaultOptions,
		value: "fr",
		state: "success",
		stateMessage: "Pays sélectionné",
	},
};

export const Error: Story = {
	args: {
		label: "Pays",
		name: "country",
		options: defaultOptions,
		state: "error",
		stateMessage: "Veuillez sélectionner un pays",
	},
};

export const Disabled: Story = {
	args: {
		label: "Pays",
		name: "country",
		options: defaultOptions,
		disabled: true,
	},
};
