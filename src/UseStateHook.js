import React, { useState } from "react";

export function UseStateHook() {
  const [state, setState] = useState({ count: 0, value: "" });
  function currentValue(event) {
    setState({ ...state, value: event.target.value });
  }
  function count() {
    setState({ ...state, count: state.count + 1 });
  }
  return (
    <div>
      <span>Number of key type: {state.count}</span>
      <button type="button" onClick={count}>
        Count
      </button>
      <input type="text" onChange={(e) => currentValue(e)} />
      <span>{state.value}</span>
    </div>
  );
}
