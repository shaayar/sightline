import {
    Column,
    Grid,
    Heading,
    Text,
    Card,
} from "@once-ui-system/core";

export function ProblemSection() {
    return (
        <Column
            fillWidth
            maxWidth="xl"
            horizontal="center"
            gap="xl"
            paddingY="128"
        >
            <Column gap="s" align="center">
                <Heading variant="display-strong-m">
                    The CSS Problems You Fight Every Day
                </Heading>

                <Text
                    onBackground="neutral-weak"
                    align="center"
                >
                    Sightline brings the most useful parts of DevTools
                    directly onto the page.
                </Text>
            </Column>

            <Grid columns="3" gap="l">
                <Card padding="l">
                    <Heading variant="heading-strong-m">
                        Why isn't my CSS working?
                    </Heading>

                    <Text onBackground="neutral-weak">
                        Find the winning selector instantly.
                    </Text>
                </Card>

                <Card padding="l">
                    <Heading variant="heading-strong-m">
                        How much spacing is that?
                    </Heading>

                    <Text onBackground="neutral-weak">
                        Visualize margin, padding and borders.
                    </Text>
                </Card>

                <Card padding="l">
                    <Heading variant="heading-strong-m">
                        Does this match the design?
                    </Heading>

                    <Text onBackground="neutral-weak">
                        Use guides and overlays for pixel-perfect QA.
                    </Text>
                </Card>
            </Grid>
        </Column>
    );
}