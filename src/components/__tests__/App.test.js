import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import ComponentBox from "components/CommentBox";
import CommentList from "components/CommentList";

beforeEach( () => {
  const warraped = shallow(<App />);
})

it("Show Comment Box", () => {
  //const div = document.createElement("div"); //JSdom libaray comes with jest
  expect(warraped.find(ComponentBox).length).toEqual(1);
});

it("Show Comment List", () => {
  expect(warraped.find(CommentList).length).toEqual(1);
});
