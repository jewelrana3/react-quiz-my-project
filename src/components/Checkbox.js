import React from "react";

export default function Checkbox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" />
      <span> {text}</span>
    </label>
  );
}
