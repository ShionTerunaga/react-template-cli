import type { CheckerProps } from "@/shared/types/object";
import { headingFontStyle } from "./heading.style"; // Tailwind variants
import type { TextTheme } from "@/shared/theme/design-system";
import { textColor } from "@/shared/theme/design-system";
import type { ChildrenOnly } from "@/shared/types/react";
import type { ElementType } from "react";
import { classMerger } from "ts-utility-kit/merger";

type HeadingFont = keyof typeof headingFontStyle;
interface HeadingStyle {
    as?: Extract<ElementType, "h1" | "h2" | "h3">;
    fontStyle?: HeadingFont;
    color?: TextTheme;
    style?: React.CSSProperties;
    className?: string;
}
interface HeadingProps extends HeadingStyle, ChildrenOnly {}

export function Heading<T extends HeadingProps>(
    props: CheckerProps<T, HeadingProps, "Heading Props Error">
) {
    const {
        as = "h1",
        fontStyle = "firstBig",
        color = "textNormal",
        style,
        className,
        children
    } = props;

    const cn = classMerger([
        headingFontStyle[fontStyle],
        textColor[color],
        className ? className : ""
    ]);

    const componentProps = {
        className: cn,
        style,
        children
    };

    const Components = as;

    return <Components {...componentProps} />;
}
