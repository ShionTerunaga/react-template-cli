import { queryOptions } from "@tanstack/react-query";
import { isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";
import { getPokemon } from "../service/get-pokemon";
import type { PokemonView } from "../model/model-view";

async function fetchPokemon(): Promise<Array<PokemonView>> {
    const result = await getPokemon();

    if (isErr(result)) {
        throw new Error(result.err.message);
    }

    if (isNone(result.value)) {
        return [];
    }

    return result.value.value;
}

export const pokemonQueryOptions = queryOptions({
    queryKey: ["pokemon", "list"],
    queryFn: fetchPokemon,
    staleTime: 60_000,
});
