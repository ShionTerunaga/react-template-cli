import { getPokemon, PokemonCardListView } from "@/features/pokemon";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";
import { isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";

export const metadata = {
    title: ja.app.pokemonForceCache.title,
    description: ja.app.pokemonForceCache.description
};

async function PokemonForceCache() {
    const result = await getPokemon("force-cache");

    if (isErr(result)) {
        return <Box>{ja.app.common.fetchError}</Box>;
    }

    if (isNone(result.value) || result.value.value.length === 0) {
        return <Box>{ja.app.common.noPokemon}</Box>;
    }

    return (
        <PokemonCardListView
            pokemon={result.value.value}
            title={ja.app.pokemonForceCache.title}
        />
    );
}

export default PokemonForceCache;
