import React from "react";
import { UseStateHook } from "./UseStateHook";
import { UseReducerHook } from "./UseReducerHook";
import { UseEffectHook } from "./UseEffectHook";

function App() {
  return (
    <div>
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHook />
    </div>
  );
}

export default App;
