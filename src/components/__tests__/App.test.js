import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import ComponentBox from "../CommentBox";
import CommentList from "../CommentList";

it("Show Comment Box", () => {
  //const div = document.createElement("div"); //JSdom libaray comes with jest
  const warraped = shallow(<App />);
  expect(warraped.find(ComponentBox).length).toEqual(1);
});

it("Show Comment List", () => {
  const warraped = shallow(<App />);
  expect(warraped.find(CommentList).length).toEqual(1);
});
