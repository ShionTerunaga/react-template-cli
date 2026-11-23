import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    firstSmall: { fontSize: 18, fontWeight: 400 },
    firstMiddle: { fontSize: 24, fontWeight: 500 },
    firstBig: { fontSize: 32, fontWeight: 600 }
});

export const headingFontStyle = {
    firstSmall: stylex.props(styles.firstSmall).className ?? "",
    firstMiddle: stylex.props(styles.firstMiddle).className ?? "",
    firstBig: stylex.props(styles.firstBig).className ?? ""
};
