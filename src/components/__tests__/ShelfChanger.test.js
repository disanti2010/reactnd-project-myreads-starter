import React from "react";
import { shallow } from "enzyme";
import Book from "../Book";
import ShelfChanger from "../ShelfChanger";
import "../../setupTests";

const labelSelect = {
  value: "moveto",
  description: "move to..."
};

var optionsSelect = [
  {
    value: "currentlyReading",
    description: "Currently Reading"
  },
  {
    value: "wantToRead",
    description: "Want to Read"
  },
  {
    value: "read",
    description: "Read"
  },
  {
    value: "none",
    description: "None"
  }
];

it("Select component has the right selected value", () => {
  const wrapper = shallow(
    <ShelfChanger
      label={labelSelect}
      options={optionsSelect}
      currentSelected="currentlyReading"
    />
  );
  const select = wrapper.find("select").first();
  expect(select.props().value).toBe("currentlyReading");
});

it("Select component rendered", () => {
  const wrapper = shallow(
    <ShelfChanger
      label={labelSelect}
      options={optionsSelect}
      currentSelected="currentlyReading"
    />
  );
  const select = wrapper.find("select");
  expect(select).toHaveLength(1);
});
