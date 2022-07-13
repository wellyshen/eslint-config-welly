import React from "react";
import { render, act } from "@testing-library/react";
import App from ".App";

it("should ...", () => {
  const { debug } = render(<Hello />);
  debug();

  expect(render(false)).toBeCalled(123);
});
