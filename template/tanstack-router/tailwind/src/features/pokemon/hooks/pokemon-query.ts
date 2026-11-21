import { queryOptions } from "@tanstack/react-query";
import { createNone, isNone } from "ts-utility-kit/option";
import { createOk, isErr, type Result } from "ts-utility-kit/result";
import type { Option } from "ts-utility-kit/option";
import { getPokemon } from "../service/get-pokemon";
import type { PokemonView } from "../model/model-view";
import type { FetcherError } from "@/shared/error/fetcher";

async function fetchPokemon(): Promise<Result<Option<Array<PokemonView>>, FetcherError>> {
    const result = await getPokemon();

    if (isErr(result)) {
        return result;
    }

    if (isNone(result.value)) {
        return createOk(createNone());
    }

    return result;
}

export const pokemonQueryOptions = queryOptions({
    queryKey: ["pokemon", "list"],
    queryFn: fetchPokemon,
    staleTime: 60_000,
});
