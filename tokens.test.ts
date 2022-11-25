import { darkTheme } from "./tokens";

describe("theme", () => {
  it("should have a dark theme color", () => {
    expect(Object.keys(darkTheme)).toEqual([
      "primary",
      "secondary",
      "background",
    ]);
  });
});
