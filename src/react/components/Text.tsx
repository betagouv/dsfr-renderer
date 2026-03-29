import React from "react";
import type { ComponentRenderer } from "@json-render/react";

export const Text: ComponentRenderer<{
  text: string;
  variant?: "default" | "sm" | "xs" | "lead" | "bold" | "muted";
}> = ({ props }) => {
  const variantClasses: Record<string, string> = {
    default: "",
    sm: "fr-text--sm",
    xs: "fr-text--xs",
    lead: "fr-text--lead",
    bold: "fr-text--bold",
    muted: "fr-text--muted",
  };

  const variantClass = variantClasses[props.variant || "default"] || "";

  return <p className={`fr-text ${variantClass}`.trim()}>{props.text}</p>;
};
