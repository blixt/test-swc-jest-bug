import { Color, coolColor } from "./colors";

type Token = "primary" | "secondary" | "background";
type Theme = Record<Token, Color>;

export const darkTheme = {
  primary: [255, 0, 0],
  secondary: "#0fa",
  background: coolColor(),
} satisfies Theme;
