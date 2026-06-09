import React from "react";
import {
    Background,
    Column,
    Grid,
    Heading,
    Icon,
    Row,
    Text,
} from "@once-ui-system/core";

const features = [
    {
        title: "CSS Cascade Debugger",
        description:
            "See every matching CSS rule, specificity score, and winning selector directly on the page.",
        icon: "refresh",
    },
    {
        title: "Visual Box Model",
        description:
            "Inspect margins, padding, borders, and content areas without opening DevTools.",
        icon: "refresh",
    },
    {
        title: "Guide Lines",
        description:
            "Drop horizontal and vertical guides that stay synced across tabs and browser sessions.",
        icon: "refresh",
    },
    {
        title: "Typography Inspector",
        description:
            "Identify font family, size, weight, line-height, and colors instantly.",
        icon: "refresh",
    },
    {
        title: "Design QA",
        description:
            "Validate layouts, spacing, and visual consistency with pixel-perfect precision.",
        icon: "refresh",
    },
    {
        title: "Built for Developers",
        description:
            "Works on localhost, staging environments, production websites, and design references.",
        icon: "refresh",
    },
];

export const ProblemSection: React.FC<
    React.ComponentProps<typeof Row>
> = ({ ...flex }) => {
    return (
        <Column
            fillWidth
            horizontal="center"
            {...flex}
            paddingY="xl"
            >
            <Row
                fillWidth
                borderTop="neutral-medium"
                horizontal="center"
                borderLeft="neutral-medium"
                borderRight="neutral-medium"
            >
                <Background
                    fill={false}
                    fillWidth
                    s={{ hide: true }}
                    borderRight="neutral-medium"
                    mask={{ x: 100, y: 50, radius: 50 }}
                    lines={{
                        display: true,
                        size: "8",
                        angle: -45,
                        thickness: 1,
                        color: "neutral-border-medium",
                    }}
                />

                <Column fillWidth>
                    <Column
                        fillWidth
                        horizontal="center"
                        padding="32"
                    >
                        <Heading
                            as="h2"
                            variant="heading-strong-l"
                            align="center"
                            marginBottom="8"
                        >
                            Everything You Need To Inspect A Website
                        </Heading>

                        <Text
                            align="center"
                            onBackground="neutral-strong"
                            variant="body-default-s"
                        >
                            Sightline brings the most useful parts of DevTools directly onto the page.
                        </Text>
                    </Column>
                </Column>

                <Background
                    fill={false}
                    fillWidth
                    s={{ hide: true }}
                    borderLeft="neutral-medium"
                    mask={{ x: 0, y: 50, radius: 50 }}
                    lines={{
                        display: true,
                        size: "8",
                        angle: 45,
                        thickness: 1,
                        color: "neutral-border-medium",
                    }}
                />
            </Row>

            <Grid
                borderLeft="neutral-medium"
                borderTop="neutral-medium"
                columns="3"
                m={{ columns: 2 }}
                s={{ columns: 1 }}
            >
                {features.map((feature, index) => (
                    <Column
                        key={index}
                        fillWidth
                        gap="16"
                        padding="40"
                        borderBottom="neutral-medium"
                        borderRight="neutral-medium">
                        <Row
                            gap="16"
                            vertical="center"
                            fillWidth>
                            <Icon
                                name={feature.icon}
                                size="m"
                                onBackground="brand-weak"
                            />

                            <Column gap="4">
                                <Heading
                                    as="h3"
                                    variant="body-default-m"
                                >
                                    {feature.title}
                                </Heading>

                                <Text
                                    variant="body-default-s"
                                    onBackground="neutral-weak"
                                    wrap="balance"
                                >
                                    {feature.description}
                                </Text>
                            </Column>
                        </Row>
                    </Column>
                ))}
            </Grid>
        </Column>
    );
};