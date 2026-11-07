import { getPokemon, PokemonCardListView } from "@/features/pokemon";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";
import { isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";

export const metadata = {
    title: ja.app.pokemonRevalidate.title,
    description: ja.app.pokemonRevalidate.description
};

export const revalidate = 60;

async function PokemonRevalidate() {
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
            title={ja.app.pokemonRevalidate.title}
        />
    );
}

export default PokemonRevalidate;
