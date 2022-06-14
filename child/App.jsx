import React from "react";
import { faker } from "@faker-js/faker";

const App = () => {
  const randomEmail = faker.internet.email();
  return <>{`Email generated from child app: ${randomEmail}`}</>;
};

export default App;
