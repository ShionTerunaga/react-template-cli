import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    section: {
        minHeight: "100dvh",
        padding: "56px 24px 80px",
        background:
            "linear-gradient(160deg, #e2e8f0 0%, #f8fafc 25%, #f1f5f9 70%, #dbeafe 100%)"
    },
    inner: {
        maxWidth: 1120,
        margin: "0 auto",
        borderRadius: 24,
        border: "1px solid #dbe1ea",
        background: "rgba(255, 255, 255, 0.66)",
        padding: "24px 16px 32px"
    },
    headingWrap: { marginBottom: 28 },
    heading: {
        letterSpacing: "-0.02em",
        textShadow: "0 4px 16px rgba(2, 6, 23, 0.14)"
    }
});

const cardListViewStyle = {
    section: stylex.props(styles.section).className ?? "",
    inner: stylex.props(styles.inner).className ?? "",
    headingWrap: stylex.props(styles.headingWrap).className ?? "",
    heading: stylex.props(styles.heading).className ?? ""
};

export default cardListViewStyle;
