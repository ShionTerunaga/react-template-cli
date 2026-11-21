import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    homePageRoot: {
        minHeight: "100dvh",
        padding: "72px 24px",
        background: "radial-gradient(circle at 10% 20%, #dbeafe 0%, #eff6ff 45%, #f8fafc 100%)",
    },
    homeContainer: {
        maxWidth: 920,
        margin: "0 auto",
        padding: 32,
        borderRadius: 24,
        border: "1px solid #dbe1ea",
        background: "rgba(255, 255, 255, 0.88)",
        boxShadow: "0 22px 50px rgba(15, 23, 42, 0.12)",
    },
    homeHeading: { letterSpacing: "-0.03em", marginBottom: 16 },
    homeDescription: { color: "#334155", lineHeight: 1.6, marginBottom: 24 },
    homeNavList: { listStyle: "none", display: "grid", gap: 12, padding: 0 },
    homeNavItemLink: {
        display: "block",
        textDecoration: "none",
        color: "#0f172a",
        border: "1px solid #cbd5e1",
        borderRadius: 12,
        background: "#f8fafc",
        padding: "14px 16px",
        fontWeight: 500,
        transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
        ":hover": {
            transform: "translateY(-2px)",
            borderColor: "#60a5fa",
            boxShadow: "0 10px 24px rgba(59, 130, 246, 0.16)",
        },
    },
    serverActionPage: {
        minHeight: "100dvh",
        padding: "64px 24px",
        background: "radial-gradient(circle at top right, #bfdbfe 0%, #e2e8f0 30%, #f8fafc 100%)",
    },
    serverActionInner: {
        maxWidth: 960,
        margin: "0 auto",
        borderRadius: 24,
        border: "1px solid #dbe1ea",
        background: "rgba(255, 255, 255, 0.82)",
        padding: "28px 20px 36px",
    },
    serverActionTitle: { textAlign: "center" },
    randomRoot: {
        marginTop: 24,
        maxWidth: 540,
        marginInline: "auto",
        border: "1px solid #dbe1ea",
        borderRadius: 16,
        padding: 20,
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        boxShadow: "0 10px 28px rgba(15, 23, 42, 0.1)",
    },
    randomPreview: {
        minHeight: 140,
        display: "grid",
        placeItems: "center",
        border: "1px dashed #cbd5e1",
        borderRadius: 12,
        background: "#f1f5f9",
        marginBottom: 16,
    },
    randomImage: { borderRadius: 10, border: "1px solid #e2e8f0" },
    randomErrorText: { color: "#b91c1c", fontWeight: 600 },
    randomButton: {
        border: "none",
        borderRadius: 9999,
        padding: "10px 16px",
        fontSize: "0.95rem",
        fontWeight: 700,
        color: "#ffffff",
        background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
        cursor: "pointer",
        transition: "transform .15s ease, box-shadow .2s ease, opacity .2s ease",
        ":hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 10px 20px rgba(37, 99, 235, 0.35)",
        },
        ":active": { transform: "translateY(0)" },
        ":disabled": { opacity: 0.6, cursor: "not-allowed" },
    },
    cardContainer: {
        border: "1px solid #dbe1ea",
        borderRadius: 18,
        overflow: "hidden",
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(6px)",
        boxShadow: "0 12px 28px rgba(15, 23, 42, 0.12)",
        textAlign: "center",
        margin: "0.8rem",
        transition: "transform .2s ease, box-shadow .2s ease, border-color .2s ease",
        ":hover": {
            transform: "translateY(-4px)",
            borderColor: "#93c5fd",
            boxShadow: "0 20px 36px rgba(30, 64, 175, 0.22)",
        },
    },
    cardImage: {
        objectFit: "cover",
        width: "100%",
        borderBottom: "1px solid #e2e8f0",
    },
    cardTitle: {
        padding: "0.9rem",
        fontSize: "1rem",
        fontWeight: 700,
        color: "#0f172a",
        lineHeight: 1.35,
        margin: 0,
    },
    listSection: {
        minHeight: "100dvh",
        padding: "56px 24px 80px",
        background: "linear-gradient(160deg, #e2e8f0 0%, #f8fafc 25%, #f1f5f9 70%, #dbeafe 100%)",
    },
    listInner: {
        maxWidth: 1120,
        margin: "0 auto",
        borderRadius: 24,
        border: "1px solid #dbe1ea",
        background: "rgba(255, 255, 255, 0.66)",
        padding: "24px 16px 32px",
    },
    listHeadingWrap: { marginBottom: 28 },
    listHeading: {
        letterSpacing: "-0.02em",
        textShadow: "0 4px 16px rgba(2, 6, 23, 0.14)",
    },
    gapSmall: { gap: 8 },
    gapMedium: { gap: 16 },
    gapLarge: { gap: 24 },
    columnsThree: { gridTemplateColumns: "repeat(3, 1fr)" },
    columnsFour: { gridTemplateColumns: "repeat(4, 1fr)" },
    columnsFive: { gridTemplateColumns: "repeat(5, 1fr)" },
    gridBase: {
        display: "grid",
        justifyItems: "center",
        alignItems: "start",
        width: "100%",
        "@media (max-width: 980px)": {
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        },
        "@media (max-width: 640px)": {
            gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        },
    },
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
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    },
    shadowMiddle: {
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    },
    shadowBig: {
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    },
    colorWhite: { backgroundColor: "#ffffff", color: "#0f172a" },
    colorLightGray: { backgroundColor: "#f2f4f8", color: "#0f172a" },
    colorGray: { backgroundColor: "#e6e9ee", color: "#0f172a" },
    colorDarkGray: { backgroundColor: "#b8bdc6", color: "#041426" },
    colorBlack: { backgroundColor: "#0b1220", color: "#ffffff" },
    colorRed: { backgroundColor: "#ff6b6b", color: "#1b1b1b" },
    colorBlue: { backgroundColor: "#5b8def", color: "#062447" },
    colorGreen: { backgroundColor: "#7ee08a", color: "#062447" },
    fontCenter: { textAlign: "center", margin: 0 },
    headingSmall: { fontSize: 18, fontWeight: 400 },
    headingMiddle: { fontSize: 24, fontWeight: 500 },
    headingBig: { fontSize: 32, fontWeight: 600 },
    textNormal: { color: "#333333" },
    textWhite: { color: "#ffffff" },
    backgroundBlue: { backgroundColor: "aqua" },
    backgroundGreen: { backgroundColor: "#33ffcc" },
    backgroundPopup: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
});

function className(style: stylex.CompiledStyles): string {
    return stylex.props(style).className ?? "";
}

export const homeStyles = {
    pageRoot: className(styles.homePageRoot),
    container: className(styles.homeContainer),
    heading: className(styles.homeHeading),
    description: className(styles.homeDescription),
    navList: className(styles.homeNavList),
    navItemLink: className(styles.homeNavItemLink),
};

export const serverActionStyles = {
    page: className(styles.serverActionPage),
    inner: className(styles.serverActionInner),
    title: className(styles.serverActionTitle),
};

export const randomStartStyles = {
    root: className(styles.randomRoot),
    preview: className(styles.randomPreview),
    image: className(styles.randomImage),
    errorText: className(styles.randomErrorText),
    button: className(styles.randomButton),
};

export const cardStyles = {
    cardContainer: className(styles.cardContainer),
    image: className(styles.cardImage),
    title: className(styles.cardTitle),
};

export const cardListStyles = {
    section: className(styles.listSection),
    inner: className(styles.listInner),
    headingWrap: className(styles.listHeadingWrap),
    heading: className(styles.listHeading),
};

export const gridBoxGap = {
    smallGap: className(styles.gapSmall),
    medium: className(styles.gapMedium),
    large: className(styles.gapLarge),
};

export const gridBoxGridTemplate = {
    three: className(styles.columnsThree),
    four: className(styles.columnsFour),
    five: className(styles.columnsFive),
};

export const gridBoxBaseStyles = className(styles.gridBase);

export const boxVariants = {
    boxWidthStyle: {
        small: className(styles.widthSmall),
        middle: className(styles.widthMiddle),
        big: className(styles.widthBig),
        auto: className(styles.widthAuto),
        full: className(styles.widthFull),
    },
    boxHeightStyle: {
        small: className(styles.heightSmall),
        middle: className(styles.heightMiddle),
        big: className(styles.heightBig),
        auto: className(styles.heightAuto),
        full: className(styles.heightFull),
    },
    boxBorderRadiusStyle: {
        none: "",
        small: className(styles.radiusSmall),
        middle: className(styles.radiusMiddle),
        big: className(styles.radiusBig),
        full: className(styles.radiusFull),
    },
    border: {
        none: "",
        thin: className(styles.borderThin),
        middle: className(styles.borderMiddle),
        thick: className(styles.borderThick),
    },
    boxShadowStyle: {
        none: "",
        small: className(styles.shadowSmall),
        middle: className(styles.shadowMiddle),
        big: className(styles.shadowBig),
    },
    colorStyle: {
        white: className(styles.colorWhite),
        lightGray: className(styles.colorLightGray),
        gray: className(styles.colorGray),
        darkGray: className(styles.colorDarkGray),
        black: className(styles.colorBlack),
        red: className(styles.colorRed),
        blue: className(styles.colorBlue),
        green: className(styles.colorGreen),
    },
};

export const fontCenterStyle = className(styles.fontCenter);

export const headingFontStyle = {
    firstSmall: className(styles.headingSmall),
    firstMiddle: className(styles.headingMiddle),
    firstBig: className(styles.headingBig),
};

export const textColor = {
    textNormal: className(styles.textNormal),
    textWhite: className(styles.textWhite),
};

export const backgroundColor = {
    likeBlue: className(styles.backgroundBlue),
    likeGreen: className(styles.backgroundGreen),
    popupBackground: className(styles.backgroundPopup),
};
