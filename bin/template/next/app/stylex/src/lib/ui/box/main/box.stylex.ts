import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    widthSmall: { width: 150 },
    widthMiddle: { width: 300 },
    widthBig: { width: 450 },
    widthAuto: { width: "auto" },
    widthFull: { width: "100vw" },
    heightSmall: { height: 150 },
    heightMiddle: { height: 300 },
    heightBig: { height: 450 },
    heightAuto: { height: "auto" },
    heightFull: { height: "100vh" },
    radiusSmall: { borderRadius: 4 },
    radiusMiddle: { borderRadius: 8 },
    radiusBig: { borderRadius: 16 },
    radiusFull: { borderRadius: 9999 },
    borderThin: { border: "1px solid #e0e0e0" },
    borderMiddle: { border: "2px solid #c0c0c0" },
    borderThick: { border: "4px solid #a0a0a0" },
    shadowSmall: {
        boxShadow:
            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
    },
    shadowMiddle: {
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
    },
    shadowBig: {
        boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
    },
    colorWhite: { backgroundColor: "#ffffff", color: "#0f172a" },
    colorLightGray: { backgroundColor: "#f2f4f8", color: "#0f172a" },
    colorGray: { backgroundColor: "#e6e9ee", color: "#0f172a" },
    colorDarkGray: { backgroundColor: "#b8bdc6", color: "#041426" },
    colorBlack: { backgroundColor: "#0b1220", color: "#ffffff" },
    colorRed: { backgroundColor: "#ff6b6b", color: "#1b1b1b" },
    colorBlue: { backgroundColor: "#5b8def", color: "#062447" },
    colorGreen: { backgroundColor: "#7ee08a", color: "#062447" }
});

export const boxVariants = {
    boxWidthStyle: {
        small: stylex.props(styles.widthSmall).className ?? "",
        middle: stylex.props(styles.widthMiddle).className ?? "",
        big: stylex.props(styles.widthBig).className ?? "",
        auto: stylex.props(styles.widthAuto).className ?? "",
        full: stylex.props(styles.widthFull).className ?? ""
    },
    boxHeightStyle: {
        small: stylex.props(styles.heightSmall).className ?? "",
        middle: stylex.props(styles.heightMiddle).className ?? "",
        big: stylex.props(styles.heightBig).className ?? "",
        auto: stylex.props(styles.heightAuto).className ?? "",
        full: stylex.props(styles.heightFull).className ?? ""
    },
    boxBorderRadiusStyle: {
        none: "",
        small: stylex.props(styles.radiusSmall).className ?? "",
        middle: stylex.props(styles.radiusMiddle).className ?? "",
        big: stylex.props(styles.radiusBig).className ?? "",
        full: stylex.props(styles.radiusFull).className ?? ""
    },
    border: {
        none: "",
        thin: stylex.props(styles.borderThin).className ?? "",
        middle: stylex.props(styles.borderMiddle).className ?? "",
        thick: stylex.props(styles.borderThick).className ?? ""
    },
    boxShadowStyle: {
        none: "",
        small: stylex.props(styles.shadowSmall).className ?? "",
        middle: stylex.props(styles.shadowMiddle).className ?? "",
        big: stylex.props(styles.shadowBig).className ?? ""
    },
    colorStyle: {
        white: stylex.props(styles.colorWhite).className ?? "",
        lightGray: stylex.props(styles.colorLightGray).className ?? "",
        gray: stylex.props(styles.colorGray).className ?? "",
        darkGray: stylex.props(styles.colorDarkGray).className ?? "",
        black: stylex.props(styles.colorBlack).className ?? "",
        red: stylex.props(styles.colorRed).className ?? "",
        blue: stylex.props(styles.colorBlue).className ?? "",
        green: stylex.props(styles.colorGreen).className ?? ""
    }
};
