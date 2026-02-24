import React from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, onChange }) {
  return (
    <Editor
      height="90vh"
      defaultLanguage="java"
      value={code}
      onChange={(value) => onChange(value)}
    />
  );
}