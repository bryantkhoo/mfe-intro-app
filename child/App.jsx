import React from "react";
import { Route, Link, Routes } from "react-router-dom";
const App = () => {
  return (
    <div style={{ border: "1px solid grey" }}>
      Child App
      <br />
      <Link to={"/child/A"}> Go to: Route A</Link>
      <br />
      <Link to={"/child/B"}> Go to: Route B</Link>
      <br />
      <Routes>
        <Route path="/A" index element={<>Child App's Route A</>} />
        <Route path="/B" element={<>Child App's Route B</>} />
      </Routes>
    </div>
  );
};

export default App;
