import React from "react";
import type { ComponentRenderer } from "@json-render/react";

export const Button: ComponentRenderer<{
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
}> = ({ props, emit }) => {
  const variantClass = props.variant ? `fr-btn--${props.variant}` : "";
  const sizeClass = props.size ? `fr-btn--${props.size}` : "";
  const iconClass = props.icon ? `fr-icon-${props.icon}` : "";
  const iconPositionClass =
    props.icon && props.iconPosition === "right"
      ? "fr-btn--icon-right"
      : props.icon
        ? "fr-btn--icon-left"
        : "";

  return (
    <button
      className={`fr-btn ${variantClass} ${sizeClass} ${iconClass} ${iconPositionClass}`.trim()}
      disabled={props.disabled}
      onClick={() => emit("press")}
    >
      {props.label}
    </button>
  );
};
