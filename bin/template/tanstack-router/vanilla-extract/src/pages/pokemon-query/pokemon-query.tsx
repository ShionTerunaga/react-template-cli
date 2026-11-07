import { useQuery } from "@tanstack/react-query";
import { PokemonCardListView, pokemonQueryOptions } from "@/features/pokemon";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";

function PokemonQuery() {
    const { data: pokemon, error, isError, isPending } = useQuery(pokemonQueryOptions);

    if (isPending) {
        return <Box>{ja.app.common.loading}</Box>;
    }

    if (isError) {
        return (
            <Box>
                {ja.app.common.errorPrefix}
                {error.message}
            </Box>
        );
    }

    if (pokemon.length === 0) {
        return <Box>{ja.app.common.noPokemon}</Box>;
    }

    return <PokemonCardListView pokemon={pokemon} title={ja.app.pokemonQuery.title} />;
}

export default PokemonQuery;
