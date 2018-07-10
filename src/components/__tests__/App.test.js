import React from "react";
import App from "../../App";
import { shallow } from "enzyme";
import "../../setupTests";

global.localStorage = {
  token: ""
};

global.fetch = jest.fn(() => new Promise(resolve => resolve()));

it("renders without crashing", () => {
  expect(shallow(<App />));
});
