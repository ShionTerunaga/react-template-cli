import { Box, Heading } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";
import { Link } from "@tanstack/react-router";
import homePageStyle from "./home.css";

function HomeLayout() {
    return (
        <Box as="main" className={homePageStyle.pageRoot}>
            <Box as="section" className={homePageStyle.container}>
                <Heading className={homePageStyle.heading}>{ja.app.home.title}</Heading>
                <p className={homePageStyle.description}>{ja.app.home.description}</p>

                <ul className={homePageStyle.navList}>
                    <li>
                        <Link className={homePageStyle.navItemLink} to="/pokemon-dynamic-fetch">
                            {ja.app.home.toPokemonDynamicFetch}
                        </Link>
                    </li>
                    <li>
                        <Link className={homePageStyle.navItemLink} to="/pokemon-query">
                            {ja.app.home.toPokemonQuery}
                        </Link>
                    </li>
                    <li>
                        <Link className={homePageStyle.navItemLink} to="/pokemon-query-loader">
                            {ja.app.home.toPokemonQueryLoader}
                        </Link>
                    </li>
                </ul>
            </Box>
        </Box>
    );
}

export default HomeLayout;
