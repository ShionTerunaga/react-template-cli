import { Box } from "@/components/ui";
import { CardListView } from "@/components/view";
import type { APIView } from "@/features/harry-potter";
import { ja } from "@/shared/lang/ja";
import type { CheckerProps } from "@/shared/types/object";
import type { Option } from "ts-utility-kit/option";
import { isNone } from "ts-utility-kit/option";
import type { Result } from "ts-utility-kit/result";
import { isErr } from "ts-utility-kit/result";
import type { FetcherError } from "@/shared/error/fetcher";

interface Props {
    character: Result<Option<APIView[]>, FetcherError>;
}

function StaticGeneratorScreen<T extends Props>(
    props: CheckerProps<T, Props, "This props is different from Props.">
) {
    const { character } = props;

    if (isErr(character)) {
        return <Box>静的生成が失敗してます。</Box>;
    }

    if (isNone(character.value)) {
        return <Box>表示するデータがありません。</Box>;
    }

    return (
        <CardListView
            potters={character.value.value}
            title={ja.app.staticGeneratorPotter.title}
        />
    );
}

export default StaticGeneratorScreen;
