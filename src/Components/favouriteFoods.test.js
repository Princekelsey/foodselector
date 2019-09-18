import React from "react";
import { shallow } from "enzyme";
import FavoriteFoods from "./FavoriteFoods";
import FoodSelections from "./FoodSelection";
import App from "../App";
import { findByTestAttr } from "../Utils";

describe("Food Components", () => {
  describe("Favourite Component", () => {
    it("Should render without errors", () => {
      const component = shallow(<FavoriteFoods />);
      const wrapper = findByTestAttr(component, "favoriteFoods");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("App Component", () => {
    it("Should render without errors", () => {
      const component = shallow(<App />);
      const wrapper = findByTestAttr(component, "app-test");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Food selection component", () => {
    it("Should render without errors", () => {
      const component = shallow(<FoodSelections />);
      const wrapper = findByTestAttr(component, "foodselection");
      expect(wrapper.length).toBe(1);
    });

    it("Should render buttons", () => {
      const component = shallow(<FoodSelections />);
      const button = findByTestAttr(component, "btn-test");
      expect(button.length).toBe(1);
    });
  });
});
