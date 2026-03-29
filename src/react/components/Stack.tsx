import React from "react";
import type { ComponentRenderer } from "@json-render/react";

export const Stack: ComponentRenderer<{
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: "none" | "vsm" | "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: boolean;
}> = ({ props, children }) => {
  const directionClasses: Record<string, string> = {
    row: "fr-grid-row",
    column: "fr-grid-row fr-grid-row--middle",
    "row-reverse": "fr-grid-row fr-grid-row--right",
    "column-reverse": "fr-grid-row fr-grid-row--middle",
  };

  const gapClasses: Record<string, string> = {
    none: "",
    vsm: "fr-grid-row--gutters-vsm",
    sm: "fr-grid-row--gutters-sm",
    md: "fr-grid-row--gutters",
    lg: "fr-grid-row--gutters-lg",
    xl: "fr-grid-row--gutters-xl",
  };

  const alignClasses: Record<string, string> = {
    start: "fr-grid-row--top",
    center: "fr-grid-row--middle",
    end: "fr-grid-row--bottom",
    stretch: "",
    baseline: "",
  };

  const justifyClasses: Record<string, string> = {
    start: "fr-grid-row--left",
    center: "fr-grid-row--center",
    end: "fr-grid-row--right",
    between: "fr-grid-row--space-between",
    around: "",
    evenly: "",
  };

  const directionClass = directionClasses[props.direction || "row"] || "";
  const gapClass = gapClasses[props.gap || "md"] || "";
  const alignClass = alignClasses[props.align || "stretch"] || "";
  const justifyClass = justifyClasses[props.justify || "start"] || "";
  const wrapClass = props.wrap ? "fr-grid-row--wrap" : "";

  const isColumn = props.direction === "column" || props.direction === "column-reverse";
  const gapSpacing = props.gap === "vsm" ? "2xs" : props.gap;
  const gapStyle = props.gap ? { gap: `var(--spacing-${gapSpacing})` } : {};

  return (
    <div
      className={`${directionClass} ${gapClass} ${alignClass} ${justifyClass} ${wrapClass}`.trim()}
      style={isColumn ? { flexDirection: props.direction, display: "flex", ...gapStyle } : undefined}
    >
      {children}
    </div>
  );
};
