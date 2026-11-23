import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    base: { textAlign: "center", margin: 0 }
});

const fontCenterBaseStyle = stylex.props(styles.base).className ?? "";

export default fontCenterBaseStyle;
