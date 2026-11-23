import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    root: {
        marginTop: 24,
        maxWidth: 540,
        marginInline: "auto",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#dbe1ea",
        borderRadius: 16,
        padding: 20,
        backgroundImage: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        boxShadow: "0 10px 28px rgba(15, 23, 42, 0.1)"
    },
    preview: {
        minHeight: 140,
        display: "grid",
        placeItems: "center",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#cbd5e1",
        borderRadius: 12,
        backgroundColor: "#f1f5f9",
        marginBottom: 16
    },
    image: {
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#e2e8f0"
    },
    errorText: { color: "#b91c1c", fontWeight: 600 },
    button: {
        borderWidth: 0,
        borderRadius: 9999,
        padding: "10px 16px",
        fontSize: "0.95rem",
        fontWeight: 700,
        color: "#ffffff",
        backgroundImage: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
        cursor: "pointer",
        transition:
            "transform .15s ease, box-shadow .2s ease, opacity .2s ease",
        ":hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 10px 20px rgba(37, 99, 235, 0.35)"
        },
        ":active": { transform: "translateY(0)" },
        ":disabled": { opacity: 0.6, cursor: "not-allowed" }
    }
});

const randomStartStyle = {
    root: stylex.props(styles.root).className ?? "",
    preview: stylex.props(styles.preview).className ?? "",
    image: stylex.props(styles.image).className ?? "",
    errorText: stylex.props(styles.errorText).className ?? "",
    button: stylex.props(styles.button).className ?? ""
};

export default randomStartStyle;
