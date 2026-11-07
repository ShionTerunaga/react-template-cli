import { Box } from "@/components/ui";
import { PokemonCardListView, PokemonView } from "@/features/pokemon";
import { ja } from "@/shared/lang/ja";

interface Props {
    pokemon: Array<PokemonView>;
    title: string;
    errorMessage: string | null;
}

export function PokemonCacheScreen({ pokemon, title, errorMessage }: Props) {
    if (errorMessage !== null) {
        return (
            <Box>
                {ja.app.common.errorPrefix}
                {errorMessage}
            </Box>
        );
    }

    if (pokemon.length === 0) {
        return <Box>{ja.app.common.noPokemon}</Box>;
    }

    return <PokemonCardListView pokemon={pokemon} title={title} />;
}
