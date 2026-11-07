import { getPokemon, PokemonView } from "@/features/pokemon";
import { PokemonCacheScreen } from "@/screen/pokemon-cache/pokemon-cache";
import { ja } from "@/shared/lang/ja";
import { isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";
import { GetServerSideProps } from "next";

interface Props {
    pokemon: Array<PokemonView>;
    errorMessage: string | null;
}

function PokemonServerSideRender(props: Props) {
    return (
        <PokemonCacheScreen
            {...props}
            title={ja.app.pokemonServerSideRender.title}
        />
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const result = await getPokemon("no-store");

    if (isErr(result)) {
        return { props: { pokemon: [], errorMessage: result.err.message } };
    }

    return {
        props: {
            pokemon: isNone(result.value) ? [] : result.value.value,
            errorMessage: null
        }
    };
};

export default PokemonServerSideRender;
