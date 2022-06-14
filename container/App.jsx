import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Child = React.lazy(() => import("child/App"));

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
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
