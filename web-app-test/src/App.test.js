import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import Display from "./Component/Display";
import Dashboard from "./Component/Dashboard";
// import { addOneBall } from "./Component/Display"

test("renders without crashing", () => {
  //Arrange, Act, Assert
  render(<App />);
});

test("verify if the buttons are there", () => {
  //Arrange
  const { getByText } = render(<Dashboard />);

  // Act
  getByText("Strike");
  getByText("Ball");
  getByText("Foul");
  getByText("Hit");
  // Assert if ^^^ is truthy
});

test("verify if the state is there", () => {
  //Arrange
  const { getByText } = render(<Display />);

  // Act
  getByText("Score: {score}");
  // getByText(strike);
  // Assert if ^^^ is truthy
});