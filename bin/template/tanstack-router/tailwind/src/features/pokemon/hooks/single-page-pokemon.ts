import { useEffect, useState } from "react";
import { createNone, createSome, isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";
import { getPokemon } from "../service/get-pokemon";
import type { Option } from "ts-utility-kit/option";
import type { FetcherError } from "@/shared/error/fetcher";
import type { PokemonView } from "../model/model-view";

export function useSinglePagePokemon() {
    const [fetchedPokemon, setFetchedPokemon] =
        useState<Option<Array<PokemonView>>>(createNone());
    const [error, setError] = useState<Option<FetcherError>>(createNone());

    useEffect(() => {
        let ignore = false;

        getPokemon()
            .then((result) => {
                if (ignore) {
                    return;
                }

                if (isErr(result)) {
                    setError(createSome(result.err));
                    return;
                }

                if (isNone(result.value)) {
                    return;
                }

                setFetchedPokemon(createSome(result.value.value));
            })
            .catch((caughtError) => {
                if (!ignore) {
                    setError(createSome(caughtError));
                }
            });

        return () => {
            ignore = true;
        };
    }, []);

    return {
        isLoading: isNone(fetchedPokemon) && isNone(error),
        pokemon: isNone(fetchedPokemon) ? [] : fetchedPokemon.value,
        error,
    };
}
