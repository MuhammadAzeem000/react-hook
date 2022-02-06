import React, { useReducer } from "react";

export const UseReducerHook = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INC":
        return (state = { ...state, count: state.count + 1 });

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span>count: {state.count}</span>
      <button type="button" onClick={() => dispatch({ type: "INC" })}>
        Increment
      </button>
    </div>
  );
};
