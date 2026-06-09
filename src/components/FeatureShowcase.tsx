import { Background, Column, Heading, Row, SpacingToken, Text } from "@once-ui-system/core";
import { ReactNode } from "react";

type StickyCard = {
  title?: string;
  description?: ReactNode;
  paddingX?: SpacingToken;
  paddingTop?: SpacingToken;
};

const stickyCards: StickyCard[] = [
  {
    title: "CSS debugging shouldn't require five DevTools panels.",
    description:
      "Most developers spend more time finding the problem than fixing it.",
    paddingX: "32",
  },
  {
    title: "Inspect spacing, typography, colors, and layouts directly on the page.",
    description:
      "No tab switching. No hunting through nested panels. Just point and inspect.",
    paddingX: "24",
    paddingTop: "8",
  },
  {
    title: "Understand why your CSS is winning. Or losing.",
    description:
      "Visualize specificity, matched rules, overrides, and the complete cascade.",
    paddingX: "16",
    paddingTop: "16",
  },
  {
    title: "Drop guides. Compare layouts. Build pixel-perfect interfaces.",
    description:
      "Keep design references aligned across tabs and validate spacing with confidence.",
    paddingX: "8",
    paddingTop: "24",
  },
  {
    title: "Sightline brings the most useful parts of DevTools onto the page.",
    description:
      "Built for frontend developers, freelancers, agencies, and design QA teams.",
    paddingX: "0",
    paddingTop: "32",
  },
];

export const FeatureShowcase = (flex: React.ComponentProps<typeof Column>) => {
  return (
    <Column fillWidth gap="xl" paddingY="xl" {...flex}>
      {stickyCards.map((card, index) => (
        <Row key={index} fillWidth position="sticky" paddingTop={card.paddingTop} paddingX={card.paddingX}>
          <Row fillWidth height="80dvh" radius="l" border maxHeight={44} center align="center" gap="xl" background="page" overflow="hidden" s={{direction: "column"}}>
            <Background data-solid="color" position="absolute" left="0" top="0" fill gradient={{display: true, colorStart: "brand-solid-weak", x: 40, y: 100, width: 75, height: 75}} />
            <Background position="absolute" left="0" top="0" fill gradient={{display: true, colorStart: "accent-solid-weak", x: 60, y: 100, width: 75, height: 75}} />
            <Column fillWidth center padding="xl">
              <Column maxWidth="m" gap="24">
                <Heading as="h2" variant="display-strong-m">
                  {card.title}
                </Heading>
                <Text onBackground="neutral-weak" variant="heading-default-xl" wrap="balance">
                  {card.description}
                </Text>
              </Column>
            </Column>
          </Row>
        </Row>
      ))}
    </Column>
  );
};
