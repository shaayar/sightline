import { Column, Heading, Icon, Row, Text, Media } from "@once-ui-system/core";

const features = [
  {
    title: "Guide Lines That Sync Across Tabs",
    description:
    "Drop horizontal and vertical guides at any pixel position. Guides stay synced across tabs, persist after browser restart, and help you recreate layouts with precision.",
    // icon: "refresh",
    image: "/images/feature1.png",
  },
  {
    title: "Box Model Inspector",
    description:
      "Hover any element to instantly visualize margins, padding, borders, and content areas. See spacing values without digging through DevTools.",
    // icon: "refresh",
    image: "/images/feature2.png",
  },
  {
    title: "Typography & Color Inspection",
    description:
      "Inspect font family, size, weight, line-height, and colors directly on the page. Perfect for design QA and implementation reviews.",
    // icon: "refresh",
    image: "/images/feature3.png",
  },
  {
    title: "CSS Cascade Debugger",
    description:
      "See every matching CSS rule, specificity score, overridden property, and winning selector. Finally understand why your CSS is or isn't applying.",
    // icon: "refresh",
    image: "/images/feature4.png",
  },
];

export const FeaturesShowcase: React.FC<React.ComponentProps<typeof Row>> = ({ ...flex }) => {
  return (
    <Column fillWidth horizontal="center" gap="xl" {...flex}>

      <Column gap="xl" maxWidth="l">
        {features.map((feature, index) => (
          <Row
            key={index}
            gap="xl"
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            vertical="center"
            m={{direction: "column"}}
          >
            <Column
              fillWidth
              paddingY="24"
              gap="12"
              m={{direction: "column"}}
            >
              {/* <Icon padding="8" name={feature.icon} onBackground="brand-weak" /> */}
              <Heading size="l">{feature.title}</Heading>
              <Text onBackground="neutral-medium" variant="body-default-m" wrap="balance">
                {feature.description}
              </Text>
            </Column>
            <Media
              src={feature.image}
              alt={"Image for " + feature.title}
              sizes={"(max-width: 1024px) 90vw, 640px"}
              radius="l"
              aspectRatio="16 / 9"
            />
          </Row>
        ))}
      </Column>
    </Column>
  );
};
