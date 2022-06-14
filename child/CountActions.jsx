import React from "react";
import { GlobalContext } from "container/GlobalContext";

const CountActions = () => {
  const { state, dispatch } = React.useContext(GlobalContext);
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};

export default CountActions;
