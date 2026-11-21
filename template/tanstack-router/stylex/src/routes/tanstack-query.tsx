import { createFileRoute } from "@tanstack/react-router";
import { charactersQueryOptions } from "@/features/harry-potter";
import TanstackQuery, {
    TanstackQueryError,
    TanstackQueryPending,
} from "@/pages/tanstack-query/tanstack-query";

export const Route = createFileRoute("/tanstack-query")({
    loader: ({ context }) => context.queryClient.ensureQueryData(charactersQueryOptions),
    pendingComponent: TanstackQueryPending,
    errorComponent: TanstackQueryError,
    component: TanstackQuery,
});
