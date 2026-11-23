import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    gapSmall: { gap: 8 },
    gapMedium: { gap: 16 },
    gapLarge: { gap: 24 },
    columnsThree: { gridTemplateColumns: "repeat(3, 1fr)" },
    columnsFour: { gridTemplateColumns: "repeat(4, 1fr)" },
    columnsFive: { gridTemplateColumns: "repeat(5, 1fr)" },
    base: {
        display: "grid",
        justifyItems: "center",
        alignItems: "start",
        width: "100%",
        "@media (max-width: 980px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
        },
        "@media (max-width: 640px)": {
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))"
        }
    }
});

export const gridBoxGap = {
    smallGap: stylex.props(styles.gapSmall).className ?? "",
    medium: stylex.props(styles.gapMedium).className ?? "",
    large: stylex.props(styles.gapLarge).className ?? ""
};

export const gridBoxGridTemplate = {
    three: stylex.props(styles.columnsThree).className ?? "",
    four: stylex.props(styles.columnsFour).className ?? "",
    five: stylex.props(styles.columnsFive).className ?? ""
};

export const gridBoxBaseStyles = stylex.props(styles.base).className ?? "";
