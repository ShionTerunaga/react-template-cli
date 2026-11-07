import {
    createHttpScheme,
    type HttpCustomStatus,
    type HttpCustomStatusScheme,
    type HttpErrorStatusErrorMessage,
    type HttpErrorStatusResponse,
} from "../http/http-scheme";
import { ja } from "@/shared/lang/ja";

export interface FetcherErrorStatusScheme extends HttpCustomStatusScheme {
    returnNotSetAPIUrl: 4040;
    returnSchemeError: 5000;
    returnParseError: 8000;
    returnFetchFunctionError: 9000;
    returnUnknownError: 9999;
}

export type FetcherStatus =
    | HttpCustomStatus
    | FetcherErrorStatusScheme["returnNotSetAPIUrl"] // APIのURLが設定されていない
    | FetcherErrorStatusScheme["returnSchemeError"] // スキームエラー
    | FetcherErrorStatusScheme["returnParseError"] // パースエラー
    | FetcherErrorStatusScheme["returnFetchFunctionError"] // フェッチ関数エラー
    | FetcherErrorStatusScheme["returnUnknownError"];

interface FetcherErrorMessageScheme extends HttpErrorStatusErrorMessage {
    returnNotSetAPIUrl: string;
    returnSchemeError: string;
    returnParseError: string;
    returnFetchFunctionError: string;
    returnUnknownError: string;
}

export interface FetchErrorScheme {
    httpErrorStatusResponse: HttpErrorStatusResponse;
    fetcherErrorStatusScheme: FetcherErrorStatusScheme;
    fetchErrorMessage: FetcherErrorMessageScheme;
}

export const fetcherErrorScheme: FetchErrorScheme = (function () {
    const { httpCustomStatusScheme, httpErrorStatusResponse, httpErrorMessage } = createHttpScheme;

    /**API仕様で変更 */
    const fetcherErrorStatusScheme: FetcherErrorStatusScheme = {
        ...httpCustomStatusScheme,
        returnNotSetAPIUrl: 4040,
        returnSchemeError: 5000,
        returnParseError: 8000,
        returnFetchFunctionError: 9000,
        returnUnknownError: 9999,
    };

    /**API仕様や画面仕様で変更 */
    const fetchErrorMessage: FetcherErrorMessageScheme = {
        ...httpErrorMessage,
        ...ja.shared.error.fetcher,
    };
    return {
        httpErrorStatusResponse,
        fetcherErrorStatusScheme,
        fetchErrorMessage,
    };
})();
