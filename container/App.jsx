import React from "react";
import CountLabel from "./CountLabel.jsx";
import { GlobalProvider } from "container/GlobalContext";
const Child = React.lazy(() => import("child/App"));

const App = () => {
  return (
    <>
      <GlobalProvider>
        <React.Suspense fallback="loading">
          <CountLabel />
          <br />
          <Child />
        </React.Suspense>
      </GlobalProvider>
    </>
  );
};

export default App;
