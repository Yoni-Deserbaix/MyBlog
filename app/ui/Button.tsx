"use client";
import * as React from "react";

export default function Button() {
  return (
    <button onClick={() => console.log("Test client component")}>
      Say hello
    </button>
  );
}
