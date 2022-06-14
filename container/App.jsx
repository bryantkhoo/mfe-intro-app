import React from "react";
import { faker } from "@faker-js/faker";

const Child = React.lazy(() => import("child/App"));

const App = () => {
  const randomName = faker.name.findName();

  return (
    <>
      <React.Suspense fallback="loading">
        <>{`Name generated from container app: ${randomName}`}</>
        <br />
        <Child />
      </React.Suspense>
    </>
  );
};

export default App;
