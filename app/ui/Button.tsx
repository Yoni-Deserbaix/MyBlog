"use client";
import * as React from "react";

export default function Button() {
  return (
    <button onClick={() => alert("Hello i'm client component")}>
      Say hello
    </button>
  );
}
