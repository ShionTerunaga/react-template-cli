import { Card } from "@/components/layout";
import { Box, FontCenter, GridBox, Heading } from "@/components/ui";
import { classMerger } from "ts-utility-kit/merger";
import { PokemonView } from "../../model/model-view";

interface Props {
    pokemon: Array<PokemonView>;
    title: string;
}

export function PokemonCardListView({ pokemon, title }: Props) {
    return (
        <Box
            as="section"
            className={classMerger([
                "min-h-[100dvh]",
                "px-6",
                "pb-20",
                "pt-14",
                "bg-[linear-gradient(160deg,#e2e8f0_0%,#f8fafc_25%,#f1f5f9_70%,#dbeafe_100%)]"
            ])}
        >
            <Box
                className={classMerger([
                    "mx-auto",
                    "w-full",
                    "max-w-[1120px]",
                    "rounded-[24px]",
                    "border",
                    "border-[#dbe1ea]",
                    "bg-white/[0.66]",
                    "px-4",
                    "pb-8",
                    "pt-6"
                ])}
            >
                <FontCenter className="mb-[28px]" as="div">
                    <Heading className={classMerger(["tracking-[-0.02em]"])}>{title}</Heading>
                </FontCenter>

                <GridBox>
                    {pokemon.map(({ id, image, name }) => (
                        <Card
                            key={id}
                            src={image}
                            alt={name}
                            title={name}
                            srcWidth={150}
                            boxHeight={300}
                            srcHeight={200}
                        />
                    ))}
                </GridBox>
            </Box>
        </Box>
    );
}
