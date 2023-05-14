import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  // it("App renders a 'div' with the class App-header", () => {
  //   const wrapper = shallow(<App />);
  //   wrapper.update();
  //   expect(wrapper.find("div.App-header")).toHaveLength(1);
  // });
  // it("App renders a div with the class App-body", () => {
  //   const wrapper = shallow(<App />);
  //   wrapper.update();
  //   expect(wrapper.find("div.App-body")).toHaveLength(1);
  // });
  // it("App renders a div with the class App-footer", () => {
  //   const wrapper = shallow(<App />);
  //   wrapper.update();
  //   expect(wrapper.find("div.App-footer")).toHaveLength(1);
  // });
  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
