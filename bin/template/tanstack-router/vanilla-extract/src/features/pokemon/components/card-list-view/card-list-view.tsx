import { Card } from "@/components/card";
import { Box, FontCenter, GridBox, Heading } from "@/lib/ui";
import cardListViewStyle from "./card-list-view.css";
import type { PokemonView } from "../../model/model-view";

interface Props {
    pokemon: Array<PokemonView>;
    title: string;
}

export function PokemonCardListView({ pokemon, title }: Props) {
    return (
        <Box as="section" className={cardListViewStyle.section}>
            <Box className={cardListViewStyle.inner}>
                <FontCenter className={cardListViewStyle.headingWrap} as="div">
                    <Heading className={cardListViewStyle.heading}>{title}</Heading>
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
