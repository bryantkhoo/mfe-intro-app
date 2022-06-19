import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Child = React.lazy(() => import("child/App"));
const Child2 = React.lazy(() => import("child2/App"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback="loading">
          Container app
          <br />
          <Link to={"/"}> Go to: Home</Link>
          <br />
          <Link to={"/child"}> Go to: Child</Link>
          <br />
          <Link to={"/child2"}> Go to: Child2</Link>
          <br />
          <Routes>
            <Route path="/" index element={<>Home</>} />
            <Route
              path="/child/*"
              element={
                <React.Suspense fallback="loading">
                  <Child />
                </React.Suspense>
              }
            />
            <Route
              path="/child2/*"
              element={
                <React.Suspense fallback="loading">
                  <Child2 />
                </React.Suspense>
              }
            />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
