import React from "react";
const Child = React.lazy(() => import("child/App"));

const App = () => {
  return (
    <>
      <React.Suspense fallback="loading">
        Container app <Child />
      </React.Suspense>
    </>
  );
};

export default App;
