export const ja = {
    app: {
        common: {
            errorPrefix: "エラー: ",
            fetchError: "データ取得に失敗しました。",
            noPokemon: "ポケモンが見つかりません。"
        },
        home: {
            title: "こんにちは,Next.js",
            openPopup: "説明",
            toPokemonForceCache: "PokeAPI の force-cache 取得例へ",
            toPokemonNoStore: "PokeAPI の no-store 取得例へ",
            toPokemonRevalidate: "PokeAPI の時間ベース再検証例へ",
            toServerActionSample: "Server Action sampleへ"
        },
        forceCachePotter: {
            title: "forceCache収集"
        },
        noStorePotter: {
            title: "no-storeでのデータ収集"
        },
        pokemonDynamicFetch: {
            title: "PokeAPI による動的なデータ取得",
            description: "PokeAPI を no-store で取得するページです。"
        },
        pokemonForceCache: {
            title: "PokeAPI の force-cache によるデータ取得",
            description:
                "PokeAPI のレスポンスを Data Cache に保存するページです。"
        },
        pokemonRevalidate: {
            title: "PokeAPI の時間ベース再検証",
            description:
                "PokeAPI のキャッシュを60秒ごとに再検証するページです。"
        },
        serverActionSample: {
            title: "Server Action sample",
            button: "犬の画像を取得",
            error: "エラーが発生しました。もう一度お試しください。"
        }
    },
    features: {
        about: {
            popup: {
                title: "このサイトについて",
                contents: "このサイトはサンプルです。",
                close: "閉じる"
            }
        }
    }
};
