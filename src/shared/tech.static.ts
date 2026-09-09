interface SelectOption {
    label: string;
    value: string;
}

interface LibraryOption extends SelectOption {
    unitTest: boolean;
    storybook: boolean;
}

interface TechSchema {
    frameworks: readonly SelectOption[];
    css: readonly SelectOption[];
    libraries: readonly LibraryOption[];
}

export const techSchema = {
    frameworks: [
        { label: "TanStack Router", value: "tanstack-router" },
        { label: "Next.js (App Router)", value: "next/app" },
        { label: "Next.js (Pages Router)", value: "next/pages" }
    ],
    css: [
        { label: "Tailwind CSS", value: "tailwind" },
        { label: "Vanilla Extract", value: "vanilla-extract" }
    ],
    libraries: [
        {
            label: "Popup",
            value: "popup",
            unitTest: true,
            storybook: true
        },
        {
            label: "Loading",
            value: "loading",
            unitTest: true,
            storybook: true
        }
    ]
} as const satisfies TechSchema;

export type Framework = (typeof techSchema.frameworks)[number]["value"];
export type Css = (typeof techSchema.css)[number]["value"];
export type Library = (typeof techSchema.libraries)[number]["value"];
export type LibrarySetting = (typeof techSchema.libraries)[number];

export interface InstallTemplateArgs {
    appName: string;
    root: string;
    framework: Framework;
    css: Css;
}
