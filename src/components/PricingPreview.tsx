import {
  Background,
  Column,
  Row,
  Heading,
  Flex,
  Text,
  Icon,
  Button,
  Scroller,
} from "@once-ui-system/core";

const plans = {
  free: {
    name: "Free",
    href: "/pricing",
    color: "neutral" as "neutral" | "brand" | "accent",
    gradient: false,
    price: {
      original: "0",
      discounted: "0",
    },
    features: [
      "Up to 5 guide lines",
      "Box model inspector",
      "Works on localhost",
      "Basic website inspection",
    ],
  },

  pro: {
    name: "Pro",
    href: "/pricing",
    color: "brand" as "neutral" | "brand" | "accent",
    gradient: true,
    price: {
      original: "59",
      discounted: "29",
    },
    features: [
      "Unlimited guide lines",
      "CSS Cascade Debugger",
      "Typography inspector",
      "Color inspector",
      "Unlimited inspections",
      "Priority feature access",
      "Lifetime access",
    ],
  },

  team: {
    name: "Team",
    href: "/pricing",
    color: "neutral" as "neutral" | "brand" | "accent",
    gradient: false,
    price: {
      original: "144",
      discounted: "144",
    },
    features: [
      "Everything in Pro",
      "Shared guide presets",
      "Team collaboration tools",
      "Priority support",
    ],
  },
};

interface PlanCardProps extends React.ComponentProps<typeof Row> {
  id: string;
  plan: (typeof plans)[keyof typeof plans];
}

const PlanCard: React.FC<PlanCardProps> = ({ id, plan, ...flex }) => {
  const borderColor = `${plan.color}-alpha-medium` as const;
  const textColor = `${plan.color}-medium` as const;
  const gradientColor = `${plan.color}-background-strong` as const;

  return (
    <Column
      id={plan.name}
      border={borderColor}
      fill
      
      overflow="hidden"
      {...flex}
    >
      <Column fill padding="12" gap="8">
        {plan.gradient && (
          <>
            <Background
              top="0"
              left="0"
              position="absolute"
              gradient={{
                x: 50,
                y: 30,
                width: 60,
                height: 100,
                tilt: 45,
                opacity: 100,
                display: true,
                colorStart: gradientColor,
                colorEnd: "static-transparent",
              }}
            />
          </>
        )}
        <Column fill gap="4" padding="24">
          <Column fillWidth gap="8" marginBottom="12">
            <Heading as="h3" align="left" onBackground={textColor} variant="heading-strong-xs">
              {plan.name}
            </Heading>
            <Text align="left" variant="heading-default-xl">
              {plan.price.original !== plan.price.discounted && (
                <Text onBackground="neutral-weak" style={{ textDecoration: "line-through" }}>
                  ${plan.price.original}
                </Text>
              )}{" "}
              ${plan.price.discounted}{" "}
              <Text onBackground="neutral-strong" variant="body-default-s">
                / year
              </Text>
            </Text>
          </Column>
          <Column fillWidth gap="16" paddingTop="20" paddingBottom="12">
            {plan.features.map((feature, index) => (
              <Row key={index} vertical="center" gap="12">
                <Icon name="check" size="xs" onBackground={textColor} />
                <Text align="left" onBackground="neutral-medium" variant="label-default-m">
                  {feature}
                </Text>
              </Row>
            ))}
          </Column>
        </Column>
        <Button
          id={id + "-button-3"}
          href={plan.href}
          variant={plan.color === "neutral" ? "secondary" : "primary"}
          fillWidth
          arrowIcon
        >
          Get started
        </Button>
      </Column>
    </Column>
  );
};

export const PricingPreview: React.FC<React.ComponentProps<typeof Row>> = ({ ...flex }) => {
  return (
    <Scroller maxWidth="xl" fillWidth paddingY="l">
    <Row gap="-1" {...flex}>
      <Flex fillWidth paddingTop="40" minWidth={20}>
        <PlanCard id="free" plan={plans.free} leftRadius="l" />
      </Flex>
      <Column fillWidth minWidth={20}>
        <Flex
          paddingX="16"
          minHeight="40"
          gap="8"
          center
          topRadius="m"
          onBackground="brand-strong"
          borderTop="brand-alpha-medium"
          borderLeft="brand-alpha-medium"
          borderRight="brand-alpha-medium"
          textVariant="label-default-m"
        >
          ⭐ Best Value ⭐
        </Flex>
        <PlanCard id="pro" plan={plans.pro} zIndex={1} />
      </Column>
      <Flex fillWidth paddingTop="40" minWidth={20}>
        <PlanCard id="team" plan={plans.team} rightRadius="l" />
      </Flex>
    </Row>
    </Scroller>
  );
};
