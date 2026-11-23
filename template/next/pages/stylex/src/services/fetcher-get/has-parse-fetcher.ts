import type * as v from "valibot";
import type { Option } from "ts-utility-kit/option";
import { createNone, isNone } from "ts-utility-kit/option";
import type { Result } from "ts-utility-kit/result";
import { createOk, isErr } from "ts-utility-kit/result";
import { fetcher } from "./fetcher";
import type { FetcherError } from "@/shared/error/fetcher/fetcher-error";

export async function hasParseFetcher<T extends v.GenericSchema, S>({
    url,
    scheme,
    cache,
    parse
}: {
    url: Option<string>;
    scheme: T;
    cache?: RequestCache;
    parse: (scheme: v.InferOutput<T>) => Result<Option<S>, FetcherError>;
}): Promise<Result<Option<S>, FetcherError>> {
    const fetcherResult = await fetcher<T>({
        url,
        scheme,
        cache
    });

    if (isErr(fetcherResult)) {
        return fetcherResult;
    }

    if (isNone(fetcherResult.value)) {
        return createOk(createNone());
    }

    return parse(fetcherResult.value.value);
}
