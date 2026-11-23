import { backgroundColor, textColor } from "@/shared/stylex/presets";

export { backgroundColor, textColor };

export type TextTheme = keyof typeof textColor;
export type BackgroundTheme = keyof typeof backgroundColor;
