type Integer = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Hex = Integer | "A" | "B" | "C" | "D" | "E" | "F";
type HexColor = `#${Hex}${Hex}${Hex}` | Lowercase<`#${Hex}${Hex}${Hex}`>;

export type Color = [r: number, g: number, b: number] | HexColor;

export function coolColor(): Color {
  return "#c00";
}
