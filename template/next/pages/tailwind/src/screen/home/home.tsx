import Head from "next/head";
import { Box, Heading } from "@/components/ui";
import { ja } from "@/shared/lang/ja";
import Link from "next/link";
import { classMerger } from "ts-utility-kit/merger";

const navigationLinkClassName = classMerger([
    "block",
    "rounded-xl",
    "border",
    "border-slate-300",
    "bg-slate-50",
    "px-4",
    "py-[14px]",
    "font-medium",
    "text-slate-900",
    "no-underline",
    "transition-[transform,box-shadow,border-color]",
    "duration-200",
    "ease-in",
    "hover:-translate-y-0.5",
    "hover:border-blue-400",
    "hover:shadow-[0_10px_24px_rgba(59,130,246,0.16)]"
]);

function HomeScreen() {
    return (
        <>
            <Head>
                <title>{ja.app.home.title}</title>
                <meta name="description" content={ja.app.home.description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box
                as="main"
                className={classMerger([
                    "min-h-[100dvh]",
                    "bg-[radial-gradient(circle_at_10%_20%,#dbeafe_0%,#eff6ff_45%,#f8fafc_100%)]",
                    "px-6",
                    "py-[72px]"
                ])}
            >
                <Box
                    as="section"
                    className={classMerger([
                        "mx-auto",
                        "w-full",
                        "max-w-[920px]",
                        "rounded-3xl",
                        "border",
                        "border-[#dbe1ea]",
                        "bg-white/[0.88]",
                        "p-8",
                        "shadow-[0_22px_50px_rgba(15,23,42,0.12)]"
                    ])}
                >
                    <Heading className={classMerger(["mb-4", "tracking-[-0.03em]"])}>
                        {ja.app.home.title}
                    </Heading>
                    <p className={classMerger(["mb-6", "leading-[1.6]", "text-slate-700"])}>
                        {ja.app.home.description}
                    </p>
                    <ul className={classMerger(["grid", "list-none", "gap-3", "p-0"])}>
                        <li>
                            <Link className={navigationLinkClassName} href="/pokemon-server-side-render">
                                {ja.app.home.toPokemonServerSideRender}
                            </Link>
                        </li>
                        <li>
                            <Link className={navigationLinkClassName} href="/pokemon-static-generator">
                                {ja.app.home.toPokemonStaticGenerator}
                            </Link>
                        </li>
                        <li>
                            <Link className={navigationLinkClassName} href="/pokemon-isr">
                                {ja.app.home.toPokemonIsr}
                            </Link>
                        </li>
                        <li>
                            <Link className={navigationLinkClassName} href="/pokemon-dynamic-fetch">
                                {ja.app.home.toPokemonDynamicFetch}
                            </Link>
                        </li>
                    </ul>
                </Box>
            </Box>
        </>
    );
}

export default HomeScreen;
