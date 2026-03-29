import { z } from "zod";

export const Stack = {
	props: z.object({
		direction: z
			.enum(["row", "column", "row-reverse", "column-reverse"])
			.optional()
			.describe("Flex direction"),
		gap: z
			.enum(["none", "vsm", "sm", "md", "lg", "xl"])
			.optional()
			.describe("Gap between children"),
		align: z
			.enum(["start", "center", "end", "stretch", "baseline"])
			.optional()
			.describe("Cross-axis alignment"),
		justify: z
			.enum(["start", "center", "end", "between", "around", "evenly"])
			.optional()
			.describe("Main-axis justification"),
		wrap: z.boolean().optional().describe("Whether children wrap"),
	}),
	description: "DSFR flex container for layouts",
	hasChildren: true,
};
