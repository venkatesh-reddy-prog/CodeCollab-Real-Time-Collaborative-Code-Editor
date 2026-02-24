import React from "react";

export default function CursorLayer({ cursors }) {
  return (
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      {cursors.map((cursor, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: cursor.line * 18,
            left: cursor.column * 8,
            color: "red",
            fontSize: "12px"
          }}
        >
          {cursor.user}
        </div>
      ))}
    </div>
  );
}