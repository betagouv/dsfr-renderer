import React from "react";
import type { ComponentRenderer } from "@json-render/react";

export const Input: ComponentRenderer<{
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "date";
  placeholder?: string;
  value?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  state?: "default" | "success" | "error";
  stateMessage?: string;
}> = ({ props, emit }) => {
  const stateClass = props.state ? `fr-input-group--${props.state}` : "";

  return (
    <div className={`fr-input-group ${stateClass}`.trim()}>
      <label className="fr-label" htmlFor={props.name}>
        {props.label}
        {props.required && <span className="fr-hint-text"> (obligatoire)</span>}
      </label>
      <input
        className="fr-input"
        id={props.name}
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        defaultValue={props.value}
        disabled={props.disabled}
        required={props.required}
        onChange={(e) => emit("change", { value: e.target.value })}
        onFocus={() => emit("focus")}
        onBlur={() => emit("blur")}
      />
      {props.hint && <p className="fr-hint-text">{props.hint}</p>}
      {props.stateMessage && (
        <p className={`fr-message fr-message--${props.state || "default"}`}>
          {props.stateMessage}
        </p>
      )}
    </div>
  );
};
