import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
// import { addOneBall } from "./Component/Display"

test("renders without crashing", () => {
  //Arrange, Act, Assert
  render(<App />);
});