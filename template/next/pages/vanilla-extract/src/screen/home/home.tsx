import Head from "next/head";
import { Box, Heading } from "@/components/ui";
import { ja } from "@/shared/lang/ja";
import Link from "next/link";
import homeScreenStyle from "./home.css";

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

            <Box as="main" className={homeScreenStyle.pageRoot}>
                <Box as="section" className={homeScreenStyle.container}>
                    <Heading className={homeScreenStyle.heading}>
                        {ja.app.home.title}
                    </Heading>
                    <p className={homeScreenStyle.description}>{ja.app.home.description}</p>

                    <ul className={homeScreenStyle.navList}>
                        <li>
                            <Link
                                className={homeScreenStyle.navItemLink}
                                href="/pokemon-server-side-render"
                            >
                                {ja.app.home.toPokemonServerSideRender}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={homeScreenStyle.navItemLink}
                                href="/pokemon-static-generator"
                            >
                                {ja.app.home.toPokemonStaticGenerator}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={homeScreenStyle.navItemLink}
                                href="/pokemon-isr"
                            >
                                {ja.app.home.toPokemonIsr}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={homeScreenStyle.navItemLink}
                                href="/pokemon-dynamic-fetch"
                            >
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
