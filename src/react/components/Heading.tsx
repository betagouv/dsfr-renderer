import React from "react";
import type { ComponentRenderer } from "@json-render/react";

export const Heading: ComponentRenderer<{
  text: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}> = ({ props }) => {
  const Tag = props.level || "h2";
  const sizeClass = props.size ? `fr-display--${props.size}` : "";

  return <Tag className={`fr-heading ${sizeClass}`.trim()}>{props.text}</Tag>;
};
