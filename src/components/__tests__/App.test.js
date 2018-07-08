import React from "react";
import App from "../../App";
import { shallow } from "enzyme";
import "../../setupTests";

global.localStorage = {
  token: ""
};

it("renders without crashing", () => {
  expect(shallow(<App />));
});
