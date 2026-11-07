import { useSuspenseQuery } from "@tanstack/react-query";
import { PokemonCardListView, pokemonQueryOptions } from "@/features/pokemon";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";

export function PokemonQueryLoaderPending() {
    return <Box>{ja.app.common.loading}</Box>;
}

export function PokemonQueryLoaderError({ error }: { error: Error }) {
    return (
        <Box>
            {ja.app.common.errorPrefix}
            {error.message}
        </Box>
    );
}

function PokemonQueryLoader() {
    const { data: pokemon } = useSuspenseQuery(pokemonQueryOptions);

    if (pokemon.length === 0) {
        return <Box>{ja.app.common.noPokemon}</Box>;
    }

    return <PokemonCardListView pokemon={pokemon} title={ja.app.pokemonQueryLoader.title} />;
}

export default PokemonQueryLoader;
