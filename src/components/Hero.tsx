import {
    Column,
    Row,
    Heading,
    Text,
    Button,
    Badge,
    Media,
} from "@once-ui-system/core";

import Image from "next/image";

export function Hero() {
    return (
        <Column
            fillWidth
            maxWidth="xl"
            horizontal="center"
            paddingTop="128"
            paddingBottom="xl"
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
                    <Text onBackground="brand-weak" >
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
                radius="xl"
                border="neutral-alpha-medium"
                background="surface"
                style={{
                    minHeight: "500px",
                }}
            >
                <Media
                    src="/images/preview.png"
                    alt="Extension Preview"
                    sizes="(max-width: 768px) 100vw, 768px"
                    radius="l"
                    border="neutral-alpha-medium"
                />
            </Column>
        </Column>
    );
}