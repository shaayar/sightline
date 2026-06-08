import {
    Column,
    Row,
    Heading,
    Text,
    Button,
    Badge,
} from "@once-ui-system/core";

export function Hero() {
    return (
        <Column
            fillWidth
            maxWidth="xl"
            horizontal="center"
            paddingY="128"
            gap="xl"
        >
            <Column
                gap="m"
                align="center"
                horizontal="center"
            >
                <Badge>
                    Chrome Extension for Web Developers
                </Badge>

                <Heading
                    variant="display-default-l"
                    marginTop="12"
                    align="center"
                >
                    CSS Debugging.
                    <br />
                    <Text onBackground="brand-weak">
                        Finally Visual.
                    </Text>
                </Heading>

                <Text
                    variant="heading-default-xl"
                    onBackground="neutral-weak"
                    align="center"
                    wrap="balance"
                    style={{
                        maxWidth: "800px",
                    }}
                >
                    Inspect spacing, typography, colors, layouts and
                    CSS cascade directly on the page.
                    No DevTools digging required.
                </Text>

                <Row
                    gap="m"
                    horizontal="center"
                    wrap
                >
                    <Button href="/features">
                        Install Free on Chrome
                    </Button>

                    <Button
                        href="/pricing"
                        variant="secondary"
                    >
                        View Pricing
                    </Button>
                </Row>

                <Text
                    onBackground="neutral-weak"
                    align="center"
                >
                    Built for freelancers, frontend developers and
                    design QA teams.
                </Text>
            </Column>

            <Column
                fillWidth
                padding="l"
                radius="xl"
                border="neutral-alpha-medium"
                background="surface"
                style={{
                    minHeight: "500px",
                }}
            >
                <Text variant="heading-strong-l">
                    Product Preview
                </Text>

                <Text onBackground="neutral-weak">
                    Hero screenshot/mockup goes here.
                </Text>
            </Column>
        </Column>
    );
}