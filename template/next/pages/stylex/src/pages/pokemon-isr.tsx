import { getPokemon, PokemonView } from "@/features/pokemon";
import { PokemonCacheScreen } from "@/screen/pokemon-cache/pokemon-cache";
import { ja } from "@/shared/lang/ja";
import { isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";
import { GetStaticProps } from "next";

interface Props {
    pokemon: Array<PokemonView>;
    errorMessage: string | null;
}

function PokemonIsr(props: Props) {
    return <PokemonCacheScreen {...props} title={ja.app.pokemonIsr.title} />;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const result = await getPokemon("force-cache");

    if (isErr(result)) {
        return {
            props: { pokemon: [], errorMessage: result.err.message },
            revalidate: 60
        };
    }

    return {
        props: {
            pokemon: isNone(result.value) ? [] : result.value.value,
            errorMessage: null
        },
        revalidate: 60
    };
};

export default PokemonIsr;
