import { useQuery } from "@tanstack/react-query";
import { CardListView, charactersQueryOptions } from "@/features/harry-potter";
import { Box } from "@/lib/ui";
import { ja } from "@/shared/lang/ja";

function TanstackQuery() {
    const { data: characters, error, isError, isPending } = useQuery(charactersQueryOptions);

    if (isPending) {
        return <Box>{ja.app.common.loading}</Box>;
    }

    if (isError) {
        return (
            <Box>
                {ja.app.common.errorPrefix}
                {error.message}
            </Box>
        );
    }

    if (characters.length === 0) {
        return <Box>{ja.app.common.noCharacters}</Box>;
    }

    return <CardListView potters={characters} title={ja.app.tanstackQuery.title} />;
}

export default TanstackQuery;
