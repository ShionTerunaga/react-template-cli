export { backgroundColor, textColor } from "@/shared/stylex/presets";

export type TextTheme = keyof typeof import("@/shared/stylex/presets").textColor;
export type BackgroundTheme = keyof typeof import("@/shared/stylex/presets").backgroundColor;
