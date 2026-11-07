import { getPokemon, PokemonCardListView } from "@/features/pokemon";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";
import { isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";

export const metadata = {
    title: ja.app.pokemonDynamicFetch.title,
    description: ja.app.pokemonDynamicFetch.description
};

export const dynamic = "force-dynamic";

async function PokemonDynamicFetch() {
    const result = await getPokemon("no-store");

    if (isErr(result)) {
        return (
            <Box>
                {ja.app.common.errorPrefix}
                {result.err.message}
            </Box>
        );
    }

    if (isNone(result.value) || result.value.value.length === 0) {
        return <Box>{ja.app.common.noPokemon}</Box>;
    }

    return (
        <PokemonCardListView
            pokemon={result.value.value}
            title={ja.app.pokemonDynamicFetch.title}
        />
    );
}

export default PokemonDynamicFetch;
