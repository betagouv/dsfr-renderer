import type { ReactNode } from "react";
import type { ComponentRenderProps } from "@json-render/react";
import { fn } from "storybook/test";

/**
 * Creates a Storybook-compatible wrapper for a json-render ComponentRenderer.
 *
 * Builds a properly-shaped ComponentRenderProps with no-op defaults for
 * required fields (emit, on) so stories can pass props directly.
 * Uses Storybook's `fn()` for emit so events appear in the Actions panel.
 */
export function createStoryComponent<P extends Record<string, unknown>>(
	Component: (props: ComponentRenderProps<P>) => ReactNode,
) {
	const StoryComponent = (props: P & { children?: ReactNode }) => {
		const { children, ...componentProps } = props;
		const element = {
			type: Component.name || "Unknown",
			props: componentProps as unknown as P,
		};

		return (
			<Component
				element={element}
				emit={fn()}
				on={(event: string) => ({
					emit: () => {},
					shouldPreventDefault: false,
					bound: false,
				})}
				children={children}
			/>
		);
	};
	StoryComponent.displayName = Component.name || "StoryComponent";
	return StoryComponent;
}