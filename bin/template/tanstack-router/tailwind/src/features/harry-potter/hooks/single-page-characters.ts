import { useEffect, useMemo, useState } from "react";
import { createNone, createSome, isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";
import { getCharacter } from "../service/get-character";
import type { Option } from "ts-utility-kit/option";
import type { APIView } from "../model/model-view";
import type { SinglePageGetCharacters } from "./characters.type";
import type { FetcherError } from "@/shared/error/fetcher";

export function useSinglePageCharacters() {
    const [fetchCharacter, setFetchCharacter] = useState<Option<Array<APIView>>>(createNone());

    const [error, setError] = useState<Option<FetcherError>>(createNone());

    useEffect(() => {
        getCharacter()
            .then((result) => {
                if (isErr(result)) {
                    setError(createSome(result.err));
                    return;
                }

                if (isNone(result.value)) {
                    return;
                }

                setFetchCharacter(createSome(result.value.value));
            })
            .catch((err) => {
                setError(createSome(err));
            });
    }, []);

    const isLoading: boolean = useMemo(() => {
        return isNone(fetchCharacter) && isNone(error);
    }, [fetchCharacter, error]);

    const characters: Array<SinglePageGetCharacters> = useMemo(() => {
        if (isNone(fetchCharacter)) {
            return [];
        }

        const mappedCharacters: Array<SinglePageGetCharacters> = fetchCharacter.value.map(
            (item) => ({
                id: item.id,
                name: item.name,
                image: item.image,
            }),
        );

        return mappedCharacters;
    }, [fetchCharacter]);

    return {
        isLoading,
        characters,
        error,
    };
}
