import { useSuspenseQuery } from "@tanstack/react-query";
import { CardListView, charactersQueryOptions } from "@/features/harry-potter";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";

export function TanstackQueryPending() {
    return <Box>{ja.app.common.loading}</Box>;
}

export function TanstackQueryError({ error }: { error: Error }) {
    return (
        <Box>
            {ja.app.common.errorPrefix}
            {error.message}
        </Box>
    );
}

function TanstackQuery() {
    const { data: characters } = useSuspenseQuery(charactersQueryOptions);

    if (characters.length === 0) {
        return <Box>{ja.app.common.noCharacters}</Box>;
    }

    return <CardListView potters={characters} title={ja.app.tanstackQuery.title} />;
}

export default TanstackQuery;
