import { createFileRoute } from "@tanstack/react-router";
import { charactersQueryOptions } from "@/features/harry-potter";
import TanstackQueryLoader, {
    TanstackQueryLoaderError,
    TanstackQueryLoaderPending,
} from "@/pages/tanstack-query-loader/tanstack-query-loader";

export const Route = createFileRoute("/tanstack-query-loader")({
    loader: ({ context }) => context.queryClient.ensureQueryData(charactersQueryOptions),
    pendingComponent: TanstackQueryLoaderPending,
    errorComponent: TanstackQueryLoaderError,
    component: TanstackQueryLoader,
});
