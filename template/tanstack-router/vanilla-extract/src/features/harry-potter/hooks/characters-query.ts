import { queryOptions } from "@tanstack/react-query";
import { isNone } from "ts-utility-kit/option";
import { isErr } from "ts-utility-kit/result";
import { getCharacter } from "../service/get-character";
import type { SinglePageGetCharacters } from "./characters.type";

async function fetchCharacters(): Promise<Array<SinglePageGetCharacters>> {
    const result = await getCharacter();

    if (isErr(result)) {
        throw new Error(result.err.message);
    }

    if (isNone(result.value)) {
        return [];
    }

    return result.value.value.map(({ id, image, name }) => ({ id, image, name }));
}

export const charactersQueryOptions = queryOptions({
    queryKey: ["harry-potter", "characters"],
    queryFn: fetchCharacters,
    staleTime: 60_000,
});
