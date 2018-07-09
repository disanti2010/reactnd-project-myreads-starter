import React from "react";
import { shallow } from "enzyme";
import Book from "../Book";
import "../../setupTests";

const book = {
  title: "test book",
  shelf: "read"
};

it("Book component renders the right title", () => {
  const wrapper = shallow(<Book book={book} />);
  const title = wrapper.find(".book-title");
  expect(title.text()).toBe("test book");
});

it("Book component renders the right shelf", () => {
  const wrapper = shallow(<Book book={book} />);
  const shelf = wrapper.find({ currentSelected: "read" });
  expect(shelf).toHaveLength(1);
});
