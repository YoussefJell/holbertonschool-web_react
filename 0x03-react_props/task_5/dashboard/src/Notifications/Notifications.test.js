import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });
  // it("Notifications renders three list items", () => {
  //   const wrapper = shallow(<Notifications />);
  //   wrapper.update();
  //   expect(wrapper.find("li")).toHaveLength(3);
  // });
  // it("Notifications renders the text Here is the list of notifications", () => {
  //   const text = "Here is the list of notifications";
  //   const wrapper = shallow(<Notifications />);
  //   wrapper.update();
  //   expect(wrapper.find(".Notifications p").text()).toEqual(text);
  // });
  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div.menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div.Notifications");
    expect(item).toHaveLength(0);
  });
  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.Notifications");
    expect(item).toHaveLength(1);
  });
});
