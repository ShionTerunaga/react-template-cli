import { useSuspenseQuery } from "@tanstack/react-query";
import { PokemonCardListView, pokemonQueryOptions } from "@/features/pokemon";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";
import { isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";

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

    if (isErr(pokemon)) {
        return <Box>{ja.app.common.errorPrefix}</Box>;
    }

    if (isNone(pokemon.value)) {
        return <Box>{ja.app.common.noPokemon}</Box>;
    }

    return (
        <PokemonCardListView
            pokemon={pokemon.value.value}
            title={ja.app.pokemonQueryLoader.title}
        />
    );
}

export default PokemonQueryLoader;
