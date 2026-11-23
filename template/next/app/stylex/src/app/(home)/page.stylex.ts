import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    pageRoot: {
        minHeight: "100dvh",
        padding: "72px 24px",
        background:
            "radial-gradient(circle at 10% 20%, #dbeafe 0%, #eff6ff 45%, #f8fafc 100%)"
    },
    container: {
        maxWidth: 920,
        margin: "0 auto",
        padding: 32,
        borderRadius: 24,
        border: "1px solid #dbe1ea",
        background: "rgba(255, 255, 255, 0.88)",
        boxShadow: "0 22px 50px rgba(15, 23, 42, 0.12)"
    },
    heading: { letterSpacing: "-0.03em", marginBottom: 16 },
    description: { color: "#334155", lineHeight: 1.6, marginBottom: 24 },
    navList: { listStyle: "none", display: "grid", gap: 12, padding: 0 },
    navItemLink: {
        display: "block",
        textDecoration: "none",
        color: "#0f172a",
        border: "1px solid #cbd5e1",
        borderRadius: 12,
        background: "#f8fafc",
        padding: "14px 16px",
        fontWeight: 500,
        transition:
            "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
        ":hover": {
            transform: "translateY(-2px)",
            borderColor: "#60a5fa",
            boxShadow: "0 10px 24px rgba(59, 130, 246, 0.16)"
        }
    }
});

const homePageStyle = {
    pageRoot: stylex.props(styles.pageRoot).className ?? "",
    container: stylex.props(styles.container).className ?? "",
    heading: stylex.props(styles.heading).className ?? "",
    description: stylex.props(styles.description).className ?? "",
    navList: stylex.props(styles.navList).className ?? "",
    navItemLink: stylex.props(styles.navItemLink).className ?? ""
};

export default homePageStyle;
