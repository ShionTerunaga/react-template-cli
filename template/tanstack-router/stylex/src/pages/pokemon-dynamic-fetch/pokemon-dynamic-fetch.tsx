import { isSome } from "ts-utility-kit/option";
import { PokemonCardListView, useSinglePagePokemon } from "@/features/pokemon";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";

function PokemonDynamicFetch() {
    const { error, isLoading, pokemon } = useSinglePagePokemon();

    if (isLoading) {
        return <Box>{ja.app.common.loading}</Box>;
    }

    if (isSome(error)) {
        return (
            <Box>
                {ja.app.common.errorPrefix}
                {error.value.message}
            </Box>
        );
    }

    if (pokemon.length === 0) {
        return <Box>{ja.app.common.noPokemon}</Box>;
    }

    return <PokemonCardListView pokemon={pokemon} title={ja.app.pokemonDynamicFetch.title} />;
}

export default PokemonDynamicFetch;
