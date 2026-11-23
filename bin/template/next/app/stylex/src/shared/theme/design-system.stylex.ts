import * as stylex from "@stylexjs/stylex";
import { appTheme } from "./theme.stylex";

const styles = stylex.create({
    textNormal: { color: appTheme.textNormal },
    textWhite: { color: appTheme.white },
    likeBlue: { backgroundColor: appTheme.likeBlue },
    likeGreen: { backgroundColor: appTheme.likeGreen },
    popupBackground: { backgroundColor: appTheme.popupBackground }
});

export const textColor = {
    textNormal: stylex.props(styles.textNormal).className ?? "",
    textWhite: stylex.props(styles.textWhite).className ?? ""
};

export const backgroundColor = {
    likeBlue: stylex.props(styles.likeBlue).className ?? "",
    likeGreen: stylex.props(styles.likeGreen).className ?? "",
    popupBackground: stylex.props(styles.popupBackground).className ?? ""
};

export type TextTheme = keyof typeof textColor;
export type BackgroundTheme = keyof typeof backgroundColor;
