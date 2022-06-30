import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";




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
    const wrapperValue = wrapper.find("#counter-value").text();

    expect(wrapperValue).toBe("0");
  })

  it('Should render the click event if increment button and increment value', () => {
    wrapper.find("#increment-btn").simulate('click');//clicks the button

    const wrapperValue = wrapper.find("#counter-value").text();

    expect(wrapperValue).toBe("1");
  });

  it('Should render the click event if decrement button and decrement value', () => {
    wrapper.find("#increment-btn").simulate('click');//clicks the increment button

    wrapper.find("#decrement-btn").simulate('click');//clicks the decrement button

    const wrapperValue = wrapper.find("#counter-value").text();

    expect(wrapperValue).toBe("0");
  });

  it('Should render counter value zero if decremented below zero', () => {
    wrapper.find("#decrement-btn").simulate('click');//clicks the decrement button

    const wrapperValue = wrapper.find("#counter-value").text();

    expect(wrapperValue).toBe("0");
  });

})