import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";


import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


describe("Counter testing", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<App />);
  })

  it("should render the title of the counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter App");
  })

  it("Should render button text of Increment",()=>{
    const wrapperValue = wrapper.find("#increment-btn").text();

    expect(wrapperValue).toBe("Increment");
  })

  it("Should render the initial value of state in div",()=>{

  })
})