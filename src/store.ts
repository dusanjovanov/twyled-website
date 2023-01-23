import { createStore } from "redonk";

export const { Provider, useActions, useSliceState } = createStore({
  slices: {
    theme: "light" as "light" | "dark",
  },
  reducers: {
    toggleTheme: (state) => {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    },
  },
});
