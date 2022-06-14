import React from "react";
import { GlobalContext } from "container/GlobalContext";

const CountLabel = () => {
  const { state } = React.useContext(GlobalContext);
  return <>{`Container app's value: ${state.count}`}</>;
};

export default CountLabel;
